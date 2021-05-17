import { Component, Input, OnInit } from '@angular/core';
import templateString from './comp-input.component.html';
import cssString from './comp-input.component.css';

@Component({
  selector: 'comp-input',
  template: templateString,
  styles: [cssString]
})
export class CompInputComponent implements OnInit {
  @Input() name: string;
  ngOnInit() {
    this.name = this.name + "!!!";
  }
}
