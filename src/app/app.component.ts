import { Component, ViewChild } from '@angular/core';
import { InfoCustomerComponent } from './components/info-customer/info-customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eeh-ejercicio';

  phones: any;
  responses: Array<any> ;
  constructor() {
    this.responses = []
  }

  sendPhones(phones: any) {
    this.phones = phones
  }
  
}
