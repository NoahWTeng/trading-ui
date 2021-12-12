import { API_REQUEST } from '@constants';
import { userLogout } from '@actions';

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError';
  }
}

// this middleware care only for API calls
export const apiMdl =
  ({ dispatch }) =>
  next =>
  action => {
    if (action.type === API_REQUEST) {
      const { method, url, onSuccess, onError } = action.meta;

      fetch(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.token}`,
        },
        body: action.payload && JSON.stringify(action.payload),
      })
        .then(res => {
          if (res.status === 200 || res.status === 201) {
            return res.json();
          }
          if (res.status === 401) {
            throw new AuthError(`HTTP ${res.status}: ${res.statusText}`);
          }
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        })
        .then(data => dispatch({ type: onSuccess, payload: data }))
        .catch(error => {
          if (error.name === 'AuthError') dispatch(userLogout());
          dispatch({ type: onError, payload: error });
        });
    }
    return next(action);
  };
