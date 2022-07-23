import { ProductSize } from "../enums/product-size.enum";
import { Product } from "./product";

export interface OrderDetail {
  id: number;
  product: Product;
  size: ProductSize;
  quantity: number;
  total: number;
}