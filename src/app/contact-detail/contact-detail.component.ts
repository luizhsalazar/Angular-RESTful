import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { Contact } from '../contacts/contacts';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

    private contact;
    private contactId;

    constructor(private _route: ActivatedRoute, private _contactService: ContactsService) { }

    ngOnInit() {
        this._route.params.forEach(
          (params: Params) => this.contactId = params['id']
        );

        this._contactService.getContact(this.contactId)
                              .subscribe(data => { this.contact = data,
                                                   console.log(this.contact)
                                                 });
    }
}
