import { Component, ElementRef, input, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-search',
  standalone: true,
  imports: [],
  templateUrl: './custom-search.component.html',
  styleUrl: './custom-search.component.scss',
})
export class CustomSearchComponent {
  placeholder = input.required<string>();
  resetTrigger = input<boolean>();
  handlClick = output<string>();
  handlInput = output<Event>();
  handlChange = output<Event>();

  @ViewChild('searchInput') searchInput!: ElementRef;

  resetValue() {
    this.searchInput.nativeElement.value = '';
  }

  onValueInput(event: Event) {
    this.handlInput.emit(event);
  }

  onValueChange(event: Event) {
    this.handlChange.emit(event);
  }

  onClick() {
    this.handlClick.emit(this.searchInput.nativeElement.value);
  }
}
