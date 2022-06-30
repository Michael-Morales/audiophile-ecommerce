const getTotalPrice = (
  products: Array<{ price: number; quantity: number }>
): number => {
  return products
    .map(({ price, quantity }) => price * quantity)
    .reduce((a, b) => a + b, 0);
};

export default getTotalPrice;
