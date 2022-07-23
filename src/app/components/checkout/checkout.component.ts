import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { OrderDetail } from 'src/app/models/order-detail';
import { Product } from 'src/app/models/product';
import { PaymentMethod } from '../../enums/payment-method.enum';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  form = new FormGroup({
    clientDetails: new FormGroup({
      firstName: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
      address: new FormControl<string>(''),
    }),
    orderDetails: new FormArray([
    ]),
    paymentDetails: new FormGroup({
      paymentMethod: new FormControl<PaymentMethod>(PaymentMethod.Cash)
    })
  });

  constructor() {
    const items = [{
      product: {
        name: 'Cheese Pizza',
        price: 50
      } as Product,
      quantity: 2,
      total: 100
    } as OrderDetail
    ];

    items.forEach((selectedProduct: OrderDetail) => {
      this.addOrderDetail(selectedProduct);
    });
  }

  addOrderDetail(selectedProduct: any): void {
    const control = this.form.get('orderDetails') as FormArray;
    control.push(this.createOrderDetail(selectedProduct));
  }

  createOrderDetail(selectedProduct: OrderDetail): FormGroup {
    return new FormGroup({
      quantity: new FormControl<number>(selectedProduct.quantity, { nonNullable: true }),
      total: new FormControl<number>(selectedProduct.total),
      product: new FormGroup({
        name: new FormControl<string>(selectedProduct.product.name),
        price: new FormControl<number>(selectedProduct.product.price),
      })
    });
  }

  removeOrderDetail({ group, index }: { group: FormGroup, index: number; }) {
    const control = this.form.get('orderDetails') as FormArray;
    control.removeAt(index);
  }

  onSubmit(): void { }
}
