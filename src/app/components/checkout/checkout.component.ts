import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentType } from '../../enums/payment-type.enum';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form = new FormGroup({
    clientDetails: new FormGroup({
      firstName: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
    }),
    paymentDetails: new FormGroup({
      paymentType: new FormControl<PaymentType>(PaymentType.Cash)
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
