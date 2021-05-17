import { Component, OnInit } from '@angular/core';
import templateString from './variable.component.html';

@Component({
  template: templateString
})
export class VariableComponent implements OnInit {
  private editableText1: string;
  constructor() {}

  ngOnInit() {
    this.editableText1 = 'Angular 2+2';
  }
}
