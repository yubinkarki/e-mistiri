import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isFirstLoad: true,
  isSignedIn: false,
  userInfo: {},
};

export const UserInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateIsFirstLoad: state => {
      state.isFirstLoad = false;
    },
    updateIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {updateIsFirstLoad, updateIsSignedIn, updateUserInfo} =
  UserInfo.actions;

export default UserInfo.reducer;
