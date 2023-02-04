import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import mapKeys from 'lodash.mapkeys';
import toCamelCase from 'lodash.camelcase';

const initialState = {
  isFirstLoad: true,
  isSignedIn: false,
  userInfo: {},
};

const BASE_URL = 'https://c588-103-41-172-114.in.ngrok.io';

// Actions have been omitted in this front-end only app.
export const signupAction = createAsyncThunk(
  'post/signup',
  async ({userData, apiEndpoint}, {rejectWithValue, dispatch, getState}) => {
    try {
      const state = getState();

      const response = await axios.post(`${BASE_URL}/${apiEndpoint}`, userData);

      const responseCode = response?.data?.status?.code || 0;

      if (responseCode === 200) {
        dispatch(
          updateSignupResponse(
            mapKeys(
              response?.data?.status?.data,
              (value, key) => toCamelCase(key) || {},
            ),
          ),
        );

        dispatch(updateAuthToken(response?.headers?.authorization));
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

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
      state.userInfo = {...state.userInfo, ...action.payload};
    },
    logoutUser: state => {
      state.userInfo = {};
      state.isSignedIn = false;
    },
  },
});

export const {updateIsFirstLoad, updateIsSignedIn, updateUserInfo, logoutUser} =
  UserInfo.actions;

export default UserInfo.reducer;
