import { Component, EventEmitter, input, InputSignal, Output } from '@angular/core';

@Component({
  selector: 'app-main-buttom',
  standalone: true,
  imports: [],
  templateUrl: './main-buttom.component.html',
  styleUrl: './main-buttom.component.scss'
})
export class MainButtomComponent {
  text: InputSignal<string> = input.required()
  btnClass: InputSignal<string> = input.required()
  iconDirection: InputSignal<string> = input("")
  iconName: InputSignal<string> = input("")

  @Output() buttomEmitt = new EventEmitter();
}
