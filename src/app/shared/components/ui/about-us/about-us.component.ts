import {
  Component,
  ElementRef,
  AfterViewInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SectionTagComponent } from '../section-tag/section-tag.component';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { appFeaturesMockData } from '../../../../mock/app-features.mock';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  sequence,
} from '@angular/animations';
import { AnimationState } from '../../../../core/enums/animation.enum';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SectionTagComponent, PrimaryBtnComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  animations: [
    trigger('fadeInUp', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('hidden => visible', [animate('0.5s ease-out')]),
    ]),
    trigger('animationList', [
      transition('hidden => visible', [
        query(
          'li',
          [
            style({ opacity: 0, transform: 'translateY(20px) scale(0.8)' }), // Initial state
            // Run the animation for each item with delay
            stagger(100, [
              sequence([
                // run animation in sequence for each item
                // First animation: Fade in
                animate(
                  '0.3s ease-out',
                  style({ opacity: 1, transform: 'translateY(0) scale(0.8)' })
                ),
                // Second animation: Scale up
                animate(
                  '0.2s ease-out',
                  style({ transform: 'translateY(0) scale(1)' })
                ),
              ]),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AboutUsComponent implements AfterViewInit {
  featuresList: string[] = appFeaturesMockData;
  animationState = AnimationState.Hidden;
  listAnimationState = AnimationState.Hidden;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);
  private timeOut!: NodeJS.Timeout;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      };

      // Watch until reach to the element in the viewport to start the animation
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          this.animationState = AnimationState.Visible;
          this.timeOut = setTimeout(() => {
            //  Run the list animation after the 100ms from fade animation
            this.listAnimationState = AnimationState.Visible;
          }, 100);

          observer.unobserve(entry.target);
        }
      }, options);

      observer.observe(this.elementRef.nativeElement);
    } else {
      this.timeOut = setTimeout(() => {
        this.animationState = AnimationState.Visible;
        this.listAnimationState = AnimationState.Visible;
      }, 200);
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeOut); // clear timer
  }
}
