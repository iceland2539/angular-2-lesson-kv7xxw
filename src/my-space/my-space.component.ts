import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.css'],
  providers: [ServiceService]
})
export class MySpaceComponent implements OnInit {
  private editabletext1: string;
  private text;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.editabletext1 = 'please input text';
    this.text = ['I', 'sad', 'tu', 'and', 'pom'];
  }

  inputchange() {
    console.log(this.editabletext1);
  }

  button1Click() {
    console.log('click');
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
