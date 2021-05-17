import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import templateString from './comp-io.component.html';
import cssString from './comp-io.component.css';

@Component({
  selector: 'comp-io',
  template: templateString,
  styles: [cssString]
})
export class CompIoComponent implements OnInit {

  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  ngOnInit() {
    this.name = this.name + "+";
    // console.log(this.name);
  }

  textClick(){
    console.log("Emit++");
    this.nameChange.emit(this.name);
  }
  
}
