import { Component, OnInit } from '@angular/core';
import  templateString  from './for-loop.component.html';

@Component({
  template: templateString,
})
export class ForLoopComponent implements OnInit {
  
  private text1s;
  private text2ss;

  constructor() { }

  ngOnInit() {
    this.text1s = ["Banana", "Papaya", "Panama"]
    this.text2ss = [["a01","a02","a03"],["b01","b02","b03"]]
  }

}