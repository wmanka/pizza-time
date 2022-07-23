export enum PaymentMethod {
  Cash = 0,
  CreditCard = 1,
  OnlinePayment = 2
}

export const PaymentMethodNames: Record<number, string> = {
  [PaymentMethod.Cash]: 'Cash',
  [PaymentMethod.CreditCard]: 'Credit Card',
  [PaymentMethod.OnlinePayment]: 'Online Payment'
};