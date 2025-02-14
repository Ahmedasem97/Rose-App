import {
  Component,
  ElementRef,
  input,
  OnChanges,
  output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-custom-radio-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './custom-radio-dropdown.component.html',
  styleUrl: './custom-radio-dropdown.component.scss',
})
export class CustomRadioDropdownComponent {
  optionsList = input.required<string[]>();
  optionsName = input.required<string>();
  dropdownTitle = input.required<string>();
  dropdownId = input.required<string>();
  defaultValue = input<string>();
  handlChangeValue = output<Event>();
  resetTrigger = input<boolean>();

  @ViewChildren('radio') radios!: QueryList<ElementRef>;

  uncheckRadios() {
    this.radios.forEach(
      (radio: ElementRef) => (radio.nativeElement.checked = false)
    );
  }
  onChangeValue(event: Event) {
    this.handlChangeValue.emit(event);
  }
}
