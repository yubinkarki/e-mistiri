export const totalAmount = data => {
  return data
    ?.map(item =>
      item?.discountedPrice || 0
        ? item?.discountedPrice * item?.count
        : item?.price * item?.count,
    )
    .reduce((a, b) => a + b, 0);
};

export const totalCount = data => {
  return data?.map(item => item?.count || 0).reduce((a, b) => a + b, 0);
};
