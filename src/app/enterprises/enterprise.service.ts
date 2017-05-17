import { ENTERPRISES } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Enterprise } from './enterprise';
import 'rxjs/add/operator/map';

@Injectable()
export class EnterpriseService {

  constructor(private http: Http) { }

  getEnterprises() {
    return this.http.get('assets/enterprises.json')
          .map(response => <Enterprise[]>response.json().data);
  }
}
