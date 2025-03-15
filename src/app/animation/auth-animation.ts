import { animation, style, animate } from '@angular/animations';
export const authAnimation = animation([
  style({
    transform: '{{ transformFrom }}',
    opacity: 0,
  }),
  animate(
    '{{ time }} {{ effect }}',
    style({ transform: '{{ transformTo }}', opacity: 1 })
  ),
]);
