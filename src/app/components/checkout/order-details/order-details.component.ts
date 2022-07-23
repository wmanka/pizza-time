import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ProductSize, ProductSizeNames } from 'src/app/enums/product-size.enum';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  @Input() parent: FormGroup | undefined;
  @Output() removed = new EventEmitter<any>();
  get orderDetails() {
    return (this.parent?.get('orderDetails') as FormArray).controls;
  }

  public productSizeNames = ProductSizeNames;
  public productSizes = Object.values(ProductSize)
    .filter(value => typeof value === 'number')
    .map(value => parseInt(value as string));

  onRemoveOrderDetail(orderDetail: any, index: number) {
    this.removed.emit({ orderDetail, index });
  }
}
