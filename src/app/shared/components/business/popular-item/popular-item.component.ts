import {
  PopularProduct,
  ProductsRes,
} from './../../../../core/interfaces/products';
import {
  Component,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
  inject,
  Signal,
  computed,
  ElementRef,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import {
  CategoriesRes,
  Category,
} from '../../../../core/interfaces/categories';
import { ProductsService } from '../../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';
import { trigger, transition, query, useAnimation } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { AnimationState } from '../../../../core/enums/animation.enum';
import { productsAnimation } from '../../../../animation/products-animation';

@Component({
  selector: 'app-popular-item',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-item.component.html',
  styleUrl: './popular-item.component.scss',
  animations: [
    trigger('productsAnimation', [
      transition(
        `${AnimationState.Hidden} => ${AnimationState.Visible} , ${AnimationState.NotLoaded} => ${AnimationState.Loaded}`,
        [
          query(
            '.popular__items__products .item',
            [
              useAnimation(productsAnimation, {
                params: {
                  baseOpacity: 0,
                  baseTransform: 'translateY(20px) scale(0.8)',
                  firstOpacity: 1,
                  firstTransform: 'translateY(0) scale(0.8)',
                  secondOpacity: 1,
                  secondTransform: 'translateY(0) scale(1)',
                  firstTime: '0.3s',
                  firstEffect: 'ease-out',
                  secondTime: '0.2s',
                  secondEffect: 'ease-out',
                },
              }),
            ],
            { optional: true }
          ),
        ]
      ),
    ]),
  ],
})
export class PopularItemComponent implements OnInit, OnDestroy, AfterViewInit {
  categoryApiFromHome: InputSignal<CategoriesRes> = input.required();

  private _ProductsService = inject(ProductsService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);
  private timeouts: Set<NodeJS.Timeout> = new Set();

  categoryDisplay!: Signal<Category[]>;
  productsDisplay: WritableSignal<PopularProduct[]> = signal([]);
  $destroy = new Subject();
  selectedActiveCategory: WritableSignal<number> = signal(-1);
  listAnimationState = AnimationState.Hidden;
  isReloadAnimationEnabled = false;

  ngOnInit(): void {
    this.categoryDisplay = computed(
      () => this.categoryApiFromHome().categories || []
    );

    this.getPopularProductApi();
  }

  getPopularProductApi(keyword: string = ''): void {
    if (this.isReloadAnimationEnabled) {
      // First set to NotLoaded
      this.listAnimationState = AnimationState.NotLoaded;

      // Add a small delay to ensure the NotLoaded state is registered
      const preTimeout = setTimeout(() => {
        this._ProductsService
          .getAllProducts(keyword)
          .pipe(takeUntil(this.$destroy))
          .subscribe({
            next: (res: ProductsRes) => {
              // Set the data first
              this.productsDisplay.set(res.products);

              // Add a small delay before changing to Loaded state
              const postTimeout = setTimeout(() => {
                this.listAnimationState = AnimationState.Loaded;
              }, 50);
              this.timeouts.add(postTimeout);
            },
            error: (err) => {
              console.error('Failed to load products:', err);
              const errorTimeout = setTimeout(() => {
                this.listAnimationState = AnimationState.Loaded;
              }, 50);
              this.timeouts.add(errorTimeout);
            },
          });
      }, 50);
      this.timeouts.add(preTimeout);
    } else {
      this._ProductsService
        .getAllProducts(keyword)
        .pipe(takeUntil(this.$destroy))
        .subscribe({
          next: (res: ProductsRes) => {
            this.productsDisplay.set(res.products);
          },
          error: (err) => {
            console.error('Failed to load products:', err);
          },
        });
    }
  }

  getKeyword(key: string, index: number): void {
    this.getPopularProductApi(key);
    this.selectedActiveCategory.set(index);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05,
      };

      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
          const timeout = setTimeout(() => {
            this.listAnimationState = AnimationState.Visible;
            this.isReloadAnimationEnabled = true;
          }, 50);
          this.timeouts.add(timeout);
          observer.unobserve(entry.target);
        }
      }, options);

      observer.observe(this.elementRef.nativeElement);
    } else {
      // For SSR, set state in next tick
      const timeout = setTimeout(() => {
        this.listAnimationState = AnimationState.Visible;
        this.isReloadAnimationEnabled = true;
      });
      this.timeouts.add(timeout);
    }
  }

  ngOnDestroy(): void {
    this.$destroy.next('destroy');
    // Clean up all timeouts
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }
}
