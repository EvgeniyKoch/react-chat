import * as types from '../constants';
import callApi from '../utils/call-api';

export const signup = (username, password) => (dispatch) => {
  dispatch({
    type: types.SIGNUP_REQUEST,
  });

  return callApi('signup', undefined, { method: 'POST' }, {
    username,
    password,
  })
    .then((json) => {
      if (!json.token) {
        throw new Error('Token has not been provided!');
      }

      // Save JWT to localStorage
      localStorage.setItem('token', json.token);

      dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: json,
      });
    })
    .catch(reason => dispatch({
      type: types.SIGNUP_FAILURE,
      payload: reason,
    }));
};


export const login = (username, password) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });

  return callApi('login', undefined, { method: 'POST' }, {
    username,
    password,
  })
    .then((json) => {
      if (!json.token) {
        throw new Error('Token has not been provided!');
      }

      // Save JWT to localStorage
      localStorage.setItem('token', json.token);

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: json,
      });
    })
    .catch(reason => dispatch({
      type: types.LOGIN_FAILURE,
      payload: reason,
    }));
};


export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT_REQUEST,
  });
};

export const recieveAuth = () => (dispatch, getState) => {
  const { token } = getState().auth;
  if (!token) {
    dispatch({
      type: types.RECIEVE_AUTH_FAILURE,
    });
  }

  return callApi('users/me', token)
    .then(json => dispatch({
      type: types.RECIEVE_AUTH_SUCCESS,
      payload: json,
    }))
    .catch(reason => dispatch({
      type: types.RECIEVE_AUTH_FAILURE,
      payload: reason,
    }));
};
