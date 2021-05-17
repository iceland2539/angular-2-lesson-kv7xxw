import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {
  resources: string = "hu345234bhj5";

  constructor (protected http: HttpClient) {
  }

  plus(a, b){
    return a + b;
  }

  all() {
    return this.http.get('/');
  }

  create(attrs) {
    return this.http.post('https://www.google.com', attrs);
  }

  update(attrs) {
    return this.http.put('/hu345234bhj5', attrs);
  }

  delete(option) {
    return this.http.delete('/hu345234bhj5', option);
  }
}
