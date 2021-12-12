import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_PROCESS, USER_LOGOUT } from '@constants';

import { getStorage } from '@helpers';

const initialState = {
  isFetching: false,
  isAuth: getStorage.isLogin() || false,
  user: getStorage.user() || null,
  error: null,
};

export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_PROCESS:
      return {
        ...state,
        isFetching: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        isAuth: true,
        admin: action.payload,
        isFetching: false,
      };
    case USER_LOGIN_ERROR:
      return {
        isAuth: false,
        admin: {},
        isFetching: false,
        error: action.payload.error,
      };
    case USER_LOGOUT:
      return { isAuth: false, admin: {}, isFetching: false, error: null };

    default:
      return state;
  }
};
