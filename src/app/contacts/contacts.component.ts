import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from './contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    private contacts: Contact[];

    constructor(private _contactsService: ContactsService) { }

    ngOnInit() {
      this._contactsService.getContacts()
            .subscribe(
                data => this.contacts = data
            );
    }

}
