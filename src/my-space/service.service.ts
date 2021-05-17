import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {
  resources: string = 'hu345234bhj5';

  constructor(protected http: HttpClient) {}

  plus(a, b) {
    return a + b;
  }

  all() {
    return this.http.get('https://www.facebook.com');
  }

  create(attrs) {
    return this.http.post('https://www.facebook.com', attrs);
  }

  update(attrs) {
    return this.http.put('https://www.facebook.com', attrs);
  }

  delete(option) {
    return this.http.delete('https://www.facebook.com', option);
  }
}
