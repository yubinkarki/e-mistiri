import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {UserInfoSlice, ProductInfoSlice, CartInfoSlice} from './slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isSignedIn', 'isFirstLoad', 'userInfo', 'cartProducts'], // State name in slice.
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, UserInfoSlice),
  product: ProductInfoSlice,
  cart: CartInfoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  // To disable "A non-serializable value was detected in an action" warning.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
