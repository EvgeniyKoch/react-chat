import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants';

const initialState = {
  isAuthenticated: false,
  user: {},
  token: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return state;
    default:
      return state;
  }
};

export default auth;
