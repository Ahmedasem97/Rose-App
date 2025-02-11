import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-tag',
  standalone: true,
  imports: [],
  templateUrl: './section-tag.component.html',
  styleUrl: './section-tag.component.scss',
})
export class SectionTagComponent {
  @Input() tagName: string = '';
  @Input() tagClasses: string = '';
}
