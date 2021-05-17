import { Component, OnInit } from '@angular/core';
import  templateString  from './service.component.html';
import { ServiceService } from './service.service';

@Component({
  template: templateString,
  providers: [ServiceService]
})
export class ServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService ) { }

  ngOnInit() {
  }

  getMethod(){
    this.serviceService.all()
        .subscribe(function(result: any){
          console.log(">>>>>Success");
          console.log(result);
        });
  }

  postMethod(){
    this.serviceService.create({ name: "Eve", age: 16 })
        .subscribe((result: any) => {
          console.log(">>>>>Success");
          console.log(result);
        }, (error: any) => {
          console.log(">>>>>Error");
          console.log(error);
        });
  }

  putMethod(){
    this.serviceService.update({ name: "Eve", age: 16 })
        .subscribe((result: any) => {
          console.log(">>>>>Success");
          console.log(result);
        });
  }

  deleteMethod(){
    this.serviceService.delete({ name: "Eve", age: 16 })
        .subscribe((result: any) => {
          console.log(">>>>>Success");
          console.log(result);
        });
  }
}