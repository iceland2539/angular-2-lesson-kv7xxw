import { Component, OnInit } from '@angular/core';
import  templateString  from './component-io.component.html';

@Component({
  template: templateString
})
export class ComponentIoComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = "Eve";
  }

  clickX(output){
    console.log("name: " + this.name);
  }
}