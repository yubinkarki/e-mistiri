export const totalAmount = data => {
  return data
    .map(item =>
      item.discountedPrice
        ? item.discountedPrice * item.count
        : item.price * item.count,
    )
    .reduce((a, b) => a + b, 0);
};

export const totalCount = data => {
  return data.map(item => item.count).reduce((a, b) => a + b, 0);
};
