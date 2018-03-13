import {
  group,
  trigger,
  style,
  animate,
  query,
  stagger,
  transition,
  animation,
  useAnimation,
  state,
  animateChild,
} from '@angular/animations';

const timing = '1000ms ease-out';

export const crossAnimation = trigger('cross', [
  state('on', style({ transform: 'rotate(270deg)' })),
  state('off', style({ transform: 'rotate(50deg)' })),
  transition('off => on', animate(timing)),
  transition('on => off', animate(timing)),
]);

export const parentAnimation = trigger('parent', [
  state('off', style({ transform: 'scale(1)' })),
  state('on', style({ transform: 'scale(0.75)' })),
  transition('off => on', [
    group([
      style({ transform: 'scale(1)' }),
      animate(timing, style({ transform: 'scale(0.75)' })),
      query('@cross', animateChild()),
    ]),
  ]),
  transition('on => off', [
    group([animate(timing), query('@cross', animateChild())]),
  ]),
]);
