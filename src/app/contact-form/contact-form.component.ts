import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { Contact } from '../contacts/contacts';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  private contact;
  private contactId;

  constructor(private _contactsService: ContactsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.forEach(
      (params: Params) => this.contactId = params['id']
    );

    if (this.contactId) {
      this._contactsService.getContact(this.contactId)
      .subscribe(data => { this.contact = data,
        console.log(this.contact)
      });
    }

  }

  onSubmit(form) {
      var result, data = form.value;

      if (data.id) {
          result = this._contactsService.updateContact(data);
      } else {
          result = this._contactsService.addContact(data);
      }

      result.subscribe(
          data => this._router.navigate(['contacts'])
      );
  }

  isValidField(field) {
      return !field.valid && field.touched;
  }

  validate(field) {
      return {
          'has-error': this.isValidField(field),
          'has-feedback': this.isValidField(field)
      };
  }

}
