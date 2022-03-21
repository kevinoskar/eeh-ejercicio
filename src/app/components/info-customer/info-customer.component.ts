import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-customer',
  templateUrl: './info-customer.component.html',
  styleUrls: ['./info-customer.component.css']
})
export class InfoCustomerComponent implements OnInit {

  constructor() { }
  @Input() phones: any;

  ngOnInit(): void {
  }


}
