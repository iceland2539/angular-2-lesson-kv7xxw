import { Component, OnInit } from '@angular/core';
import  templateString  from './click.component.html';

@Component({
  template: templateString,
})
export class ClickComponent implements OnInit {
  
  private a01: number;
  private a02: number;
  private a03: number;
  private b01: number;
  private b02: number;
  private b03: number;

  constructor() { }

  ngOnInit() {
    this.a01 = 1
    this.a02 = 2
    this.a03 = 3
    this.b01 = 11
    this.b02 = 12
    this.b03 = 13
  }

  button1Click() {
    this.a01 = Math.random()*100;
    this.a02 = Math.random()*100;
    this.a03 = Math.random()*100;
    this.b01 = Math.random()*100;
    this.b02 = Math.random()*100;
    this.b03 = Math.random()*100;
    alert("Alert");
    console.log("log");
  }
}