import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isFirstLoad: true,
  isSignedIn: false,
  signupResponse: {},
  authToken: '',
  errors: {},
  fetching: false,
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
  },
});

export const {updateIsFirstLoad, updateIsSignedIn} = UserInfo.actions;

export default UserInfo.reducer;
