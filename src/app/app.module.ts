import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnterprisesComponent } from './enterprises/enterprise.component';
import { EnterpriseService } from './enterprises/enterprise.service';

@NgModule({
  declarations: [
    AppComponent,
    EnterprisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ EnterpriseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
