import { Currency } from "./currency";
import { ProductCategory } from "./product-category";

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: Currency;
  category: ProductCategory;
}