import { Component, OnInit } from '@angular/core';
import templateString from './comp-intro.component.html';
import cssString from './comp-intro.component.css';

@Component({
  selector: 'comp-intro',
  template: templateString,
  styles: [cssString]
})
export class CompIntroComponent implements OnInit {

  name: string;

  ngOnInit() {
    this.name = "Click";
  }

  textClickEvent(){
    this.name = this.name + "+"
  }
  
}
