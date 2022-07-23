import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    ClientDetailsComponent,
    OrderDetailsComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
