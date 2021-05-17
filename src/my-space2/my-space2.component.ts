import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { ServiceService } from './service2.service';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space2.component.html',
  styleUrls: ['./my-space2.component.css'],
  providers: [ServiceService]
})
export class MySpace2Component implements OnInit {
  private text;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.text = [
      [
        { name: 'a01', checked: true },
        { name: 'b01', checked: false },
        { name: 'c01', checked: false },
        { name: 'd01', checked: false }
      ],
      [
        { name: 'a02', checked: false },
        { name: 'b02', checked: false },
        { name: 'c02', checked: false },
        { name: 'd02', checked: false }
      ],
      [
        { name: 'a03', checked: false },
        { name: 'b03', checked: false },
        { name: 'c03', checked: false },
        { name: 'd03', checked: false }
      ],
      [
        { name: 'a04', checked: false },
        { name: 'b04', checked: false },
        { name: 'c04', checked: false },
        { name: 'd04', checked: false }
      ]
    ];
  }

  inputchange() {
    console.log(this.text);
  }

  checkboxchange() {
    console.log(this.text);
  }

  getMethod() {
    this.serviceService.all().subscribe(function(result: any) {
      console.log('>>>>>Success');
      console.log(result);
    });
  }

  postMethod() {
    this.serviceService.create({ name: 'Eve', age: 16 }).subscribe(
      (result: any) => {
        console.log('>>>>>Success');
        console.log(result);
      },
      (error: any) => {
        console.log('>>>>>Error');
        console.log(error);
      }
    );
  }

  putMethod() {
    this.serviceService
      .update({ name: 'Eve', age: 16 })
      .subscribe((result: any) => {
        console.log('>>>>>Success');
        console.log(result);
      });
  }

  deleteMethod() {
    this.serviceService
      .delete({ name: 'Eve', age: 16 })
      .subscribe((result: any) => {
        console.log('>>>>>Success');
        console.log(result);
      });
  }
}
