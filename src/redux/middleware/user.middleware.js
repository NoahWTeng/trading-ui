import { apiRequest } from '@actions';
import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_PROCESS, USER_LOGOUT } from '@constants';
// import { storage } from '@helpers';

const URL = `${API_URL}/users/login`;

// export const loginProcess =
//   ({ dispatch }) =>
//   next =>
//   action => {
//     next(action);
//     if (action.type === ADMIN_LOGIN_PROCESS) {
//       dispatch(apiRequest('POST', URL, action.payload, FETCH_ADMIN_SUCCESS, FETCH_ADMIN_ERROR));
//     }
//   };

// export const loginSucess =
//   ({ dispatch }) =>
//   next =>
//   action => {
//     next(action);

//     if (action.type === FETCH_ADMIN_SUCCESS) {
//       storage.set('admin', action.payload);
//       storage.set('isAuth', true);
//     }
//   };

// export const loginReject =
//   ({ dispatch }) =>
//   next =>
//   action => {
//     next(action);

//     if (action.type === FETCH_ADMIN_ERROR) {
//     }
//   };

// export const logoutSuccess =
//   ({ dispatch }) =>
//   next =>
//   action => {
//     next(action);

//     if (action.type === ADMIN_LOGOUT) {
//       storage.remove('admin');
//       storage.remove('isAuth');
//     }
//   };

export const userMdl = [];
