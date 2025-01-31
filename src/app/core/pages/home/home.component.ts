import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { PopularItemComponent } from '../../../shared/components/business/popular-item/popular-item.component';
import { CategoriesService } from '../../../shared/services/categories.service';
import { Subject, takeUntil } from 'rxjs';
import { SpecialGiftsSectionComponent } from '../../../shared/components/ui/special-gifts-section/special-gifts-section.component';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from '../../../shared/components/ui/gallery/gallery.component';
import { TrustedComponent } from '../../../shared/components/ui/trusted/trusted.component';
@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    RouterOutlet,
    PopularItemComponent,
    SpecialGiftsSectionComponent,
    GalleryComponent,
    TrustedComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private _CategoriesService: CategoriesService) {}

  categoryApi: WritableSignal<any> = signal('');
  $destroy = new Subject<string>();

  ngOnInit(): void {
    this._CategoriesService
      .getAllCategories()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res) => {
          this.categoryApi.set(res);
        },
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next('subscribeDestroy');
  }
}
