import { Component, OnInit } from '@angular/core';
import  templateString  from './component-output.component.html';

@Component({
  template: templateString
})
export class ComponentOutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  textClicksss(output){
    console.log("component output(name): " + output);
  }

}