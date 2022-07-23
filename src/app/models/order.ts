import { PaymentMethod } from "../enums/payment-method.enum";
import { OrderDetail } from "./order-detail";
import { User } from "./user";

export interface Order {
  id: number;
  date: Date;
  user: User;
  paymentMethod: PaymentMethod,
  details: OrderDetail[];
}