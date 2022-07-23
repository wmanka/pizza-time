export enum ProductSize {
  Small = 0,
  Medium = 1,
  Large = 2
}

export const ProductSizeNames: Record<number, string> = {
  [ProductSize.Small]: 'Small',
  [ProductSize.Medium]: 'Medium',
  [ProductSize.Large]: 'Large'
};