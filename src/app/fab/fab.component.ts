import { Component, OnInit } from '@angular/core';
import { parentAnimation, crossAnimation } from './fab.animations';

enum BubbleState {
  on = 'on',
  off = 'off',
}

@Component({
  selector: 'zet-fab',
  template: `
  <div class="bubble bubble-parent" [@parent]="bubbleState" (click)="toggle()">
    <div class="bubble bubble-child"></div>
    <div class="bubble bubble-child"></div>
    <div class="bubble bubble-child"></div>
    <div class="bubble bubble-child"></div>
    <div class="bubble bubble-child"></div>
    <div class="bubble bubble-child"></div>
    <div class="bubble-cross" [@cross]="bubbleState">❌</div>
  </div>
  `,
  styleUrls: ['./fab.component.scss'],
  animations: [parentAnimation, crossAnimation],
})
export class FabComponent implements OnInit {
  bubbleState: BubbleState = BubbleState.off;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.bubbleState =
      this.bubbleState === BubbleState.off ? BubbleState.on : BubbleState.off;
  }
}
