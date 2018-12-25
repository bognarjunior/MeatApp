import { Component, OnInit } from '@angular/core';
import { RadioOption } from './../../shared';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: Array<RadioOption> = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Crédito', value: 'CRE'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'REF'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
