import { animation, style, animate } from '@angular/animations';
export const authAnimation = animation([
  style({
    transform: '{{ transformFrom }}',
  }),
  animate('{{ time }} {{ effect }}', style({ transform: '{{ transformTo }}' })),
]);
