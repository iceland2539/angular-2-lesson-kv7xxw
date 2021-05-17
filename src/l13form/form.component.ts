import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  private form: FormGroup;
  private data: any;

  
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      test1: new FormControl('a'),
      test2: new FormControl({ value: 'b', disabled: "true" }),
      test3: new FormControl('c', [Validators.required ]),
    });

    this.data = {
      test1: "",
      test2: "x",
      test3: ""
    }
    this.form.patchValue(this.data);
  }

  submit(){
    console.log("test2.value");
    console.log(this.form.controls.test2.value);
    console.log("form.value");
    console.log(this.form.value); // ไม่แสดงค่าตัวที่ Disable
    if(this.form.controls.test3.invalid){
      console.log("test3 INVALID");
    }
    if(this.form.controls.test3.dirty){
      console.log("test3 DIRTY");
    }
    if(this.form.controls.test3.touched){
      console.log("test3 TOUCHED");
    }
  }

  reset(){
    this.form.reset(); // ล้างค่าทั้งหมดให้เป็นค่าว่าง
    this.form.patchValue(this.data);
  }

}