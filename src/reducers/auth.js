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
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {

      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {

      };
    default:
      return state;
  }
};

export default auth;
