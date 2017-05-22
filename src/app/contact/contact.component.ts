import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact;
  @Input() contacts;

  constructor(private _contactsService: ContactsService) { }

  ngOnInit() {
  }

  deleteContact(contact){
    if (confirm("Você tem certeza que deseja excluir " + contact.firstName + " " + contact.lastName + "?")) {
      var index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);

      this._contactsService.deleteContact(contact.key)
        .subscribe(
          data => alert(data.message),
          err => {
            alert("Não foi possível remover o contato. Tente novamente!");
            console.log(err);
            this.contacts.splice(index, 0, contact);
          });
    }
  }
}
