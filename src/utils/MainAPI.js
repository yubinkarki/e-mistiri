import axios from 'axios';
// import {store} from '@app/redux/store';
// import {updateIsSignedIn} from '@app/redux/slices';
// import {clearUserInfo} from '@app/redux/slices/userInfo';

export const MainAPI = axios.create({
  baseURL: 'https://c588-103-41-172-114.in.ngrok.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* MainAPI.interceptors.request.use(
  function (config) {
    // Taking token from state. Doing this outside the function did not work.
    const token = store?.getState()?.user?.authToken;

    config.headers.authorization = token;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
); */

/* MainAPI.interceptors.response.use(
  response => response,
  error => {
    // Handling invalid token error.
    if (error.response.status === 401) {
      store.dispatch(clearUserInfo());
      store.dispatch(updateIsSignedIn(false));
    }

    return Promise.reject(error);
  },
); */
