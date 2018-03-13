import { Component, OnInit } from '@angular/core';
import {
  iconAnimation,
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
    <div class="bubble bubble-child" [@child1]="bubbleState">
      <i class="material-icons" [@icon]="bubbleState">create</i>
    </div>
    <div class="bubble bubble-child" [@child2]="bubbleState">
      <i class="material-icons" [@icon]="bubbleState">delete</i>
    </div>
    <div class="bubble bubble-child" [@child3]="bubbleState">
      <i class="material-icons" [@icon]="bubbleState">edit</i>
    </div>
    <div class="bubble bubble-child" [@child4]="bubbleState">
      <i class="material-icons" [@icon]="bubbleState">done</i>
    </div>
    <div class="bubble bubble-child" [@child5]="bubbleState">
      <i class="material-icons" [@icon]="bubbleState">favorite</i>
    </div>
    <div class="bubble bubble-child" [@child6]="bubbleState">
      <i class="material-icons" [@icon]="bubbleState">build</i>
    </div>
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
    iconAnimation,
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
