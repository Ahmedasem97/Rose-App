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
import { GalleryComponent } from '../../../shared/components/ui/gallery/gallery.component';
import { CategoriesComponent } from '../../../shared/components/ui/categories/categories.component';
import { TrustedComponent } from '../../../shared/components/ui/trusted/trusted.component';
import { BestSeller1Component } from '../../../shared/components/business/pest-seller1/pest-seller1.component';
import { ReviewComponent } from '../../../shared/components/ui/review/review.component';
import { FeaturesComponent } from '../../../shared/components/ui/features/features.component';
import { AboutUsComponent } from '../../../shared/components/ui/about-us/about-us.component';
import { OurTeamComponent } from "../../../shared/components/ui/our-team/our-team.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PopularItemComponent,
    SpecialGiftsSectionComponent,
    GalleryComponent,
    AboutUsComponent,
    CategoriesComponent,
    TrustedComponent,
    BestSeller1Component,
    ReviewComponent,
    FeaturesComponent,
    OurTeamComponent
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
