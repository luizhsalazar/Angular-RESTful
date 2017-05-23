import { Injectable } from '@angular/core';
import { Contact } from './contacts';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactsService {

    private contactsUrl: string = "http://localhost:59396/api/contacts";
    private header = new Headers({ 'content-type': 'application/json', 'accept': 'application/json'});

    constructor(private http: Http) { }

    getContacts() {
      return this.http.get(this.contactsUrl)
                 .map(response => <Contact[]>response.json());
    }

    getContact(id) {
      return this.http.get(this.contactsUrl + '/' + id)
                 .map(response => response.json());
    }

    addContact(contact){
      return this.http.post(this.contactsUrl, contact, this.header)
        .map(response => response.json());
    }

    updateContact(contactId, contact){
      return this.http.put(this.contactsUrl + '/' + contactId, contact)
        .map(response => response.json());
    }

    deleteContact(id){
      return this.http.delete(this.contactsUrl + '/' + id)
        .map(response => response.json());
    }
}
