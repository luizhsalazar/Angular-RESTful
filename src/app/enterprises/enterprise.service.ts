import { ENTERPRISES } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Enterprise } from './enterprise';
import 'rxjs/add/operator/map';

@Injectable()
export class EnterpriseService {

    private url: string = "http://jsonplaceholder.typicode.com/users";

    constructor(private http: Http) { }

    getEnterprises() {
        return this.http.get('assets/enterprises.json')
              .map(response => <Enterprise[]>response.json().data);
    }

    getEnterprise(id) {
        return this.http.get(this.getIdUrl(id))
          .map(response => response.json());
    }

    private getIdUrl(id) {
        return this.url + "/" + id;
    }
}
