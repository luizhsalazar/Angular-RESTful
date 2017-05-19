import { Injectable } from '@angular/core';
import { Contact } from './contacts';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

    private contactsUrl: string = "http://localhost:59396/api/contacts";

    constructor(private http: Http) { }

    getContacts() {
      return this.http.get(this.contactsUrl)
                 .map(response => <Contact[]>response.json());
    }

    getContact(id) {
      return this.http.get(this.contactsUrl + '/' + id)
                 .map(response => response.json);
    }
}
