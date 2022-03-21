import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesCustomerComponent } from './components/messages-customer/messages-customer.component';
import { InfoCustomerComponent } from './components/info-customer/info-customer.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessagesCustomerComponent,
    InfoCustomerComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
