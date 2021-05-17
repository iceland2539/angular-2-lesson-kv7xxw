import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import templateString from './hello.component.html';
import cssString from './hello.component.css';

@Component({
  selector: 'hello',
  template: templateString,
  styles: [cssString]
})
export class HelloComponent implements OnInit {
  @Input() onlyInputName: string;

  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  @Output() textClick = new EventEmitter();

  ngOnInit() {
    this.name = this.name + "+";
    this.onlyInputName = this.onlyInputName + "+";
  }

  textClickEvent(){
    var output = 1234;
    this.nameChange.emit(this.name);
    this.textClick.emit(output);
  }
  
}
