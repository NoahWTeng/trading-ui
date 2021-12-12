import { USER_LOGIN_PROCESS, USER_LOGOUT } from '@constants';

const userLogin = data => ({
  type: USER_LOGIN_PROCESS,
  payload: data,
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

export { userLogin, userLogout };
