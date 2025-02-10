import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  width = input.required<string>();
  height = input.required<string>();
  color = input.required<string>();
}
