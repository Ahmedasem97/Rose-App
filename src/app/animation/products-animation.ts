import {
  animation,
  style,
  animate,
  sequence,
  stagger,
} from '@angular/animations';
export const productsAnimation = animation([
  style({ opacity: '{{ baseOpacity }}', transform: '{{ baseTransform }}' }),
  stagger(100, [
    sequence([
      animate(
        '{{ firstTime }} {{ firstEffect }}',
        style({
          opacity: '{{ firstOpacity }}',
          transform: '{{ firstTransform }}',
        })
      ),
      animate(
        '{{ secondTime }} {{ secondEffect }}',
        style({
          opacity: '{{ secondOpacity }}',
          transform: '{{ secondTransform }}',
        })
      ),
    ]),
  ]),
]);

/**
 * 
 style({ opacity: 0, transform: 'translateY(20px) scale(0.8)' }),
  stagger(100, [
    sequence([
      animate(
        '0.3s ease-out',
        style({ opacity: 1, transform: 'translateY(0) scale(0.8)' })
      ),
      animate(
        '0.2s ease-out',
        style({ opacity: 1, transform: 'translateY(0) scale(1)' })
      ),
    ]),
  ]),
 * 
 */
