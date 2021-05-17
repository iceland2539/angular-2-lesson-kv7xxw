import { Component, OnInit } from '@angular/core';
import  templateString  from './change.component.html';

@Component({
  template: templateString
})
export class ChangeComponent implements OnInit {
  private select1: string;
  sss;
  constructor() { }


  ngOnInit() {
  }

  select1Change() {
    alert(this.select1);
  }

  input1Change(value) {
    this.sss = value;
    console.log(value);
    // alert(value);
  }

}