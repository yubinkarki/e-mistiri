import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  counterError: false,
};

export const CartInfo = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.cartProducts.find(item => {
        if (item.id === action.payload.id) {
          item.count + action.payload.count < 10
            ? {
                ...item,
                count: item.count++,
              }
            : (state.counterError = true);
        }
      });
    },
    decreaseCount: (state, action) => {
      state.cartProducts.find(
        item => item.id === action.payload.id && {...item, count: item.count--},
      );
    },
    removeCartItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        item => item.id !== action.payload,
      );
    },
    addProduct: (state, action) => {
      if (state.cartProducts.length) {
        const doesItemAlreadyExist = state.cartProducts.some(
          item => item.id === action.payload.id,
        );

        if (doesItemAlreadyExist) {
          state.cartProducts = state.cartProducts.map(item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  count: item.count + action.payload.count,
                }
              : {...item},
          );
        } else {
          state.cartProducts = [...state.cartProducts, action.payload];
        }
      } else {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },
    clearCart: state => {
      state.cartProducts = [];
    },
  },
});

export const {
  increaseCount,
  decreaseCount,
  removeCartItem,
  addProduct,
  clearCart,
} = CartInfo.actions;

export default CartInfo.reducer;
