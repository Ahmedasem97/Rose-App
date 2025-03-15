import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('toggleModals', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.5s ease-in', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.5s ease-in', style({ transform: 'scale(0)' })),
      ]),
    ]),
  ],
})
export class ModalComponent {}
