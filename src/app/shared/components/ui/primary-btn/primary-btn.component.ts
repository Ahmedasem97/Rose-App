import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  standalone: true,
  imports: [],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss',
})
export class PrimaryBtnComponent {
  @Input() btnText: string = '';
  @Input() btnIcon: string = '';
  @Input() btnIconClasses: string = '';
  @Input() btnClasses: string = '';
  @Input() btnTextClasses: string = '';
  @Output() handleBtnClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(event?: any) {
    this.handleBtnClick.emit(event);
  }
}
