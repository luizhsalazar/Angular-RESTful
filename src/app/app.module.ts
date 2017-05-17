import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EnterprisesComponent } from './enterprises/enterprise.component';
import { EnterpriseService } from './enterprises/enterprise.service';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterprisesComponent,
    EnterpriseComponent,
    EnterpriseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'enterprises', pathMatch: 'full' },
        { path: 'enterprises', component: EnterprisesComponent },
        { path: 'enterprise/:id', component: EnterpriseDetailComponent }
    ])
  ],
  providers: [ EnterpriseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
