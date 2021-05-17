import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import templateString from './comp-output.component.html';
import cssString from './comp-output.component.css';

@Component({
  selector: 'comp-output',
  template: templateString,
  styles: [cssString]
})
export class CompOutputComponent implements OnInit {
  @Output() textClick = new EventEmitter<number>();

  ngOnInit() {
  }

  textClickEvent(){
    var output = 1234;
    this.textClick.emit(output);
  }
}
