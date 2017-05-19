import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { EnterprisesComponent } from './enterprises/enterprise.component';
import { EnterpriseService } from './enterprises/enterprise.service';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterprisesComponent,
    EnterpriseComponent,
    EnterpriseDetailComponent,
    ContactsComponent,
    ContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
        { path: '', redirectTo: 'enterprises', pathMatch: 'full' },
        { path: 'enterprises', component: EnterprisesComponent },
        { path: 'enterprise/:id', component: EnterpriseDetailComponent },
        { path: 'contacts', component: ContactsComponent },
        { path: 'contact/:id', component: ContactDetailComponent }
    ])
  ],
  providers: [ EnterpriseService, ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
