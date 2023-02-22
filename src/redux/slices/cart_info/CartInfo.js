import {createSlice} from '@reduxjs/toolkit';

import {Images} from '@app/constants';

const initialState = {
  cartProducts: [],
};

export const CartInfo = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.cartProducts.find(
        item => item.id === action.payload && {...item, count: item.count++},
      );
    },
    decreaseCount: (state, action) => {
      state.cartProducts.find(
        item => item.id === action.payload && {...item, count: item.count--},
      );
    },
    removeCartItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        item => item.id !== action.payload,
      );
    },
    addProduct: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
  },
});

export const {increaseCount, decreaseCount, removeCartItem, addProduct} =
  CartInfo.actions;

export default CartInfo.reducer;
