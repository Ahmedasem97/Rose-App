import { Component } from '@angular/core';
import { GalleryMockData } from '../../../../mock/gallery.mock';
import { SectionTagComponent } from '../section-tag/section-tag.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { GalleryItems } from '../../../../core/interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SectionTagComponent, SectionTitleComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  galleryItemsList: GalleryItems[] = GalleryMockData;
}
