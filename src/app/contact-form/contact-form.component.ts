import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private _contactsService: ContactsService, private _router: Router) { }

  ngOnInit() {
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
