import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import mapKeys from 'lodash.mapkeys';
import toCamelCase from 'lodash.camelcase';

import {MainAPI} from '@app/utils';

const initialState = {
  isFirstLoad: true,
  isSignedIn: false,
  userInfo: {},
};

const BASE_URL = 'https://c588-103-41-172-114.in.ngrok.io';

// Not used in this front-end version of the app.
export const signupAction = createAsyncThunk(
  'post/signup',
  async ({userData, apiEndpoint}, {rejectWithValue, dispatch}) => {
    try {
      const response = await MainAPI.post(
        `${BASE_URL}/${apiEndpoint}`,
        userData,
      );

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

export const updateUserAction = createAsyncThunk(
  'patch/update-user',
  async (
    {userData, userProfileImage},
    {rejectWithValue, dispatch, getState},
  ) => {
    try {
      const state = getState();
      const userId = state?.user?.signupResponse?.id || '0';

      const dataResponse = await MainAPI.patch(
        `api/v1/customers/${userId}`,
        userData,
      );

      if (dataResponse?.status === 200) {
        dispatch(
          updateSignupResponse(
            mapKeys(
              Object.fromEntries(
                Object.entries(dataResponse?.data).filter(
                  item => item[0] != 'display_picture_path',
                ),
              ),
              (value, key) => toCamelCase(key) || {},
            ),
          ),
        );
      }

      // Execute only when image is uploaded.
      if (userProfileImage?._parts[0][1] !== null) {
        const imageResponse = await MainAPI.post(
          `api/v1/customers/attach_picture`,
          userProfileImage,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        imageResponse?.status === 200
          ? dispatch(
              updateImagePath(
                `${BASE_URL}` +
                  sliceImageURL(imageResponse?.data?.display_picture_path),
              ),
            )
          : alert('Failed to upload image');
      }
    } catch (err) {
      if (err?.response?.status === 422) {
        // Returning error in case of failed input validation.
        return rejectWithValue(err?.response?.data?.data);
      } else {
        return rejectWithValue(err?.message);
      }
    }
  },
);

export const getAllProducts = createAsyncThunk(
  'get/products',
  async (_, {rejectWithValue}) => {
    try {
      const response = await MainAPI.get(`api/v1/products`);

      if (response.status === 200) {
        const data =
          Array.isArray(response.data) && response.data.length
            ? response?.data?.map(item =>
                mapKeys(item, (value, key) => toCamelCase(key)),
              )
            : [];

        const updatedData =
          Array.isArray(data) && data.length
            ? data?.map(item => {
                return {
                  ...item,
                  imagePath:
                    item.imagePath &&
                    `${BASE_URL}` + sliceImageURL(item.imagePath),
                };
              })
            : [];

        return updatedData;
      }
    } catch (err) {
      return rejectWithValue(err || 'Failed to get products');
    }
  },
);

export const logoutAction = createAsyncThunk(
  'delete/logout',
  async (_, {rejectWithValue}) => {
    try {
      await MainAPI.delete(`customers/sign_out`);
    } catch (err) {
      return rejectWithValue(err || 'Logout Fallback Error');
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
    // Below reducers are not used in this version.
    updateSignupResponse: (state, action) => {
      state.signupResponse = {...state.signupResponse, ...action.payload};
    },
    updateAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    updateImagePath: (state, action) => {
      state.signupResponse = {
        ...state.signupResponse,
        displayPicturePath: action.payload,
      };
    },
    clearUserInfo: state => {
      state.signupResponse = {};
      state.authToken = null;
      state.errors = {};
    },
  },
});

export const {updateIsFirstLoad, updateIsSignedIn, updateUserInfo, logoutUser} =
  UserInfo.actions;

export default UserInfo.reducer;
