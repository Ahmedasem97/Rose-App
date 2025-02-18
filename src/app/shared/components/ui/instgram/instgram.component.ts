import { Component } from '@angular/core';
import { instgram } from '../../../../core/interfaces/instgram.interface';

@Component({
  selector: 'app-instgram',
  standalone: true,
  imports: [],
  templateUrl: './instgram.component.html',
  styleUrl: './instgram.component.scss'
})
export class InstgramComponent {

   instgramImg: instgram[] = [
      {
        image: "/instgram 1.png",
      },
      {
        image: "/instgram 2.png",
      },
      {
        image: "/instgram 3.png",
      },
      {
        image: "/instgram 4.png",
      },
      {
        image: "/instgram 5.png",
      },
    ]
}
