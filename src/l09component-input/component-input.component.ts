import { Component, OnInit } from '@angular/core';
import  templateString  from './component-input.component.html';

@Component({
  template: templateString,
})
export class ComponentInputComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = "Eve";
  }
}