import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentMethod, PaymentMethodNames } from 'src/app/enums/payment-method.enum';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  @Input() parent: FormGroup | undefined;

  public paymentMethodNames = PaymentMethodNames;
  public paymentMethods = Object.values(PaymentMethod)
    .filter(value => typeof value === 'number')
    .map(value => parseInt(value as string));

  constructor() { }

  ngOnInit(): void {
  }

}
