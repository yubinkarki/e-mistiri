import {createSlice} from '@reduxjs/toolkit';

import {Images} from '@app/constants';

const initialState = {
  cartProducts: [
    {
      id: 1,
      title: 'Engine Filter',
      subtitle: 'Yamaha',
      price: 1540,
      discountedPrice: 0,
      image: <Images.engineFilter />,
      count: 2,
    },
    {
      id: 2,
      title: 'Regular Servicing',
      subtitle: 'The Wheels Pvt Ltd',
      price: 1240,
      discountedPrice: 980,
      image: <Images.brakePad />,
      count: 1,
    },
  ],
};

export const CartInfo = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = CartInfo.actions;

export default CartInfo.reducer;
