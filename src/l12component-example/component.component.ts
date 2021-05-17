import { Component, OnInit } from '@angular/core';
import  templateString  from './component.component.html';

@Component({
  template: templateString,
})
export class ComponentComponent implements OnInit {
  name: string;
  name2: string;
  onlyInputName: string;
  constructor() { }

  ngOnInit() {
    this.name = "Eve";
    this.name2 = "Alice";
    this.onlyInputName = "Adam";
  }

  textClick(output){
    console.log(output);
    console.log(this.name2);
  }

}