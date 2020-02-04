import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button style="width:100%;height:100%;font-size:3em;" nbButton *ngIf="!value">{{value}}</button>
    <button style="width:100%;height:100%;font-size:3em;" nbButton hero status="success" *ngIf="value=='X'">{{value}}</button>
    <button style="width:100%;height:100%;font-size:3em;" nbButton hero status="info" *ngIf="value=='O'">{{value}}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
