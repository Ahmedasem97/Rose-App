import {
  Component,
} from '@angular/core';
import { PopularItemComponent } from '../../../shared/components/business/popular-item/popular-item.component';
import { SpecialGiftsSectionComponent } from '../../../shared/components/ui/special-gifts-section/special-gifts-section.component';
import { GalleryComponent } from '../../../shared/components/ui/gallery/gallery.component';
import { CategoriesComponent } from '../../../shared/components/ui/categories/categories.component';
import { TrustedComponent } from '../../../shared/components/ui/trusted/trusted.component';
import { BestSeller1Component } from '../../../shared/components/business/pest-seller1/pest-seller1.component';
import { ReviewComponent } from '../../../shared/components/ui/review/review.component';
import { FeaturesComponent } from '../../../shared/components/ui/features/features.component';
import { AboutUsComponent } from '../../../shared/components/ui/about-us/about-us.component';

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
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
}
