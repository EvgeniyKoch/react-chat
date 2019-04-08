import * as types from '../constants';


export const signup = (username, password) => (dispatch) => {
  dispatch({
    type: types.SIGNUP_REQUEST,
  });

  return fetch('http://localhost:8000/v1/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((json) => {
      if (json.success) {
        return json;
      }
      throw new Error(json.message);
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

  return fetch('http://localhost:8000/v1/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(res => res.json())
    .then((json) => {
      if (json.success) {
        return json;
      }
      throw new Error(json.message);
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

  return fetch('http://localhost:8000/v1/users/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((json) => {
      if (json.success) {
        return json;
      }
      throw new Error(json.message);
    })
    .then(json => dispatch({
      type: types.RECIEVE_AUTH_SUCCESS,
      payload: json,
    }))
    .catch(reason => dispatch({
      type: types.RECIEVE_AUTH_FAILURE,
      payload: reason,
    }));
};
