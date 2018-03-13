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

// region timings
const timing = '1000ms ease-out';
// endregion

// region constants
const arch = 75;
const height = 150;
const baseTranslate = {
  x: '-50%',
  y: '-50%',
};
const children = {
  child1: {
    x: -50 + -height + '%',
    y: -50 + arch + '%',
  },
  child2: {
    x: -50 + 0 + '%',
    y: -50 + height + '%',
  },
  child3: {
    x: -50 + height + '%',
    y: -50 + arch + '%',
  },
  child4: {
    x: -50 + height + '%',
    y: -50 + -arch + '%',
  },
  child5: {
    x: -50 + 0 + '%',
    y: -50 + -height + '%',
  },
  child6: {
    x: -50 + -height + '%',
    y: -50 + -arch + '%',
  },
};
// endregion

// region partial animations
const transform = animation([
  animate(timing, style({ transform: 'translate({{x}}, {{y}}' })),
]);
// endregion

// region animations
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
      query('@*', animateChild()),
    ]),
  ]),
  transition('on => off', [
    group([animate(timing), query('@*', animateChild())]),
  ]),
]);

export const childAnimation1 = trigger('child1', [
  state(
    'off',
    style({
      transform: `translate(${baseTranslate.x}, ${baseTranslate.y})`,
    }),
  ),
  state(
    'on',
    style({
      transform: `translate(${children.child1.x}, ${children.child1.y})`,
    }),
  ),
  transition(
    'off => on',
    useAnimation(transform, {
      params: children.child1,
    }),
  ),
  transition(
    'on => off',
    useAnimation(transform, {
      params: baseTranslate,
    }),
  ),
]);

export const childAnimation2 = trigger('child2', [
  state(
    'off',
    style({
      transform: `translate(${baseTranslate.x}, ${baseTranslate.y})`,
    }),
  ),
  state(
    'on',
    style({
      transform: `translate(${children.child2.x}, ${children.child2.y})`,
    }),
  ),
  transition(
    'off => on',
    useAnimation(transform, {
      params: children.child2,
    }),
  ),
  transition(
    'on => off',
    useAnimation(transform, {
      params: baseTranslate,
    }),
  ),
]);

export const childAnimation3 = trigger('child3', [
  state(
    'off',
    style({
      transform: `translate(${baseTranslate.x}, ${baseTranslate.y})`,
    }),
  ),
  state(
    'on',
    style({
      transform: `translate(${children.child3.x}, ${children.child3.y})`,
    }),
  ),
  transition(
    'off => on',
    useAnimation(transform, {
      params: children.child3,
    }),
  ),
  transition(
    'on => off',
    useAnimation(transform, {
      params: baseTranslate,
    }),
  ),
]);

export const childAnimation4 = trigger('child4', [
  state(
    'off',
    style({
      transform: `translate(${baseTranslate.x}, ${baseTranslate.y})`,
    }),
  ),
  state(
    'on',
    style({
      transform: `translate(${children.child4.x}, ${children.child4.y})`,
    }),
  ),
  transition(
    'off => on',
    useAnimation(transform, {
      params: children.child4,
    }),
  ),
  transition(
    'on => off',
    useAnimation(transform, {
      params: baseTranslate,
    }),
  ),
]);

export const childAnimation5 = trigger('child5', [
  state(
    'off',
    style({
      transform: `translate(${baseTranslate.x}, ${baseTranslate.y})`,
    }),
  ),
  state(
    'on',
    style({
      transform: `translate(${children.child5.x}, ${children.child5.y})`,
    }),
  ),
  transition(
    'off => on',
    useAnimation(transform, {
      params: children.child5,
    }),
  ),
  transition(
    'on => off',
    useAnimation(transform, {
      params: baseTranslate,
    }),
  ),
]);

export const childAnimation6 = trigger('child6', [
  state(
    'off',
    style({
      transform: `translate(${baseTranslate.x}, ${baseTranslate.y})`,
    }),
  ),
  state(
    'on',
    style({
      transform: `translate(${children.child6.x}, ${children.child6.y})`,
    }),
  ),
  transition(
    'off => on',
    useAnimation(transform, {
      params: children.child6,
    }),
  ),
  transition(
    'on => off',
    useAnimation(transform, {
      params: baseTranslate,
    }),
  ),
]);
// endregion
