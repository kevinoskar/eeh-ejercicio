import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-messages-customer',
  templateUrl: './messages-customer.component.html',
  styleUrls: ['./messages-customer.component.css']
})
export class MessagesCustomerComponent implements OnInit {

  messageDefault: string;
  phones: Array<any>;
  inputPhone: string;
  responses: Array<any>;
  
  constructor(
    private _testService: TestService
  ) {
    this.messageDefault = 'Para su clave {v1}, se ha registrado la gestión {v2} en las oficinas principales.',
    this.phones = [],
    this.responses = [],
    this.inputPhone = ''
   }
   @Output() emitPhones = new EventEmitter<any>()
   @Output() emitResponses = new EventEmitter<any>()
   

  ngOnInit(): void {
  }

  savePhone(): void {
    let data = {
      key: '',
      phone: this.inputPhone,
      message: '',
      messageDate: '',
      showDate: false
    }
    this.phones.push(data);
    console.log('data', data);
    this.emitPhones.emit(this.phones);
    this.inputPhone = ''
  }

  notification(): void {
    this.phones.forEach(phone => {
      phone.key = Math.floor(Math.random() * 9999 - 1000 + 1000);
      phone.message = `Para su clave ${phone.key}, se ha registrado la gestión ${Math.floor(Math.random() * 999999 - 100000 + 100000)} en las oficinas principales.`
    });
    this.emitPhones.emit(this.phones);
  }

  dateRegister(): void {
    this.phones.forEach(phone => {
      const kWh = Number((Math.random() * 999 - 100 + 100).toFixed(2));
      const cost = (kWh <= 150) ? (kWh * 2) : (kWh * 6)
      const date = new Date();
      const days = 15;
      date.setDate(date.getDate() + days);
      phone.messageDate = `Se ha realizado la facturación del mes de marzo para su clave ${phone.key}, su consumo es ${kWh.toString()} kWh de el monto a pagar es de Lps.${cost}, fecha máxima de pago ${date}`
      phone.showDate = true;
    }); 
    this.emitPhones.emit(this.phones);
    console.log(this.phones);
  }

  sendMessages(): void {
    const data: Array<any> = [];
    var json = {
      telefono: 0,
      clave: 0,
      nombre: 'Kevin González'
    };

    this.phones.forEach(item => {
      json.telefono = Number(item.phone);
      json.clave = Number(item.key);
      this.responses.push(this._testService.sendMessages(json))
    });
    this.emitResponses.emit(this.responses);
  }
    

}
