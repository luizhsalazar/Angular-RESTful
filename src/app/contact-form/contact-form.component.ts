import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
      console.log(form);
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
