import { Component, Input } from '@angular/core';
import { IconSection } from '../../../../core/interfaces/icons-section.interface';

@Component({
  selector: 'app-icons-section',
  standalone: true,
  imports: [],
  templateUrl: './icons-section.component.html',
  styleUrl: './icons-section.component.scss'
})
export class IconsSectionComponent {
  @Input({ required: true }) getApi!: IconSection;


}
