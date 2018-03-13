import { Component, OnInit } from '@angular/core';
import {
  parentAnimation,
  crossAnimation,
  childAnimation1,
  childAnimation2,
  childAnimation3,
  childAnimation4,
  childAnimation5,
  childAnimation6,
} from './fab.animations';

enum BubbleState {
  on = 'on',
  off = 'off',
}

@Component({
  selector: 'zet-fab',
  template: `
  <div class="bubble bubble-parent" [@parent]="bubbleState" (click)="toggle()">
    <div class="bubble bubble-child" [@child1]="bubbleState"></div>
    <div class="bubble bubble-child" [@child2]="bubbleState"></div>
    <div class="bubble bubble-child" [@child3]="bubbleState"></div>
    <div class="bubble bubble-child" [@child4]="bubbleState"></div>
    <div class="bubble bubble-child" [@child5]="bubbleState"></div>
    <div class="bubble bubble-child" [@child6]="bubbleState"></div>
    <div class="bubble-cross" [@cross]="bubbleState">❌</div>
  </div>
  `,
  styleUrls: ['./fab.component.scss'],
  animations: [
    parentAnimation,
    crossAnimation,
    childAnimation1,
    childAnimation2,
    childAnimation3,
    childAnimation4,
    childAnimation5,
    childAnimation6,
  ],
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
