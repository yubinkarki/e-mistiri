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
});

export default UserInfo.reducer;
