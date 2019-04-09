import * as types from '../constants/services';
import history from '../utils/history';

export const redirect = to => (dispatch) => {
  history.push(`${process.env.PUBLiC_URL}${to}`);
  dispatch({
    type: types.REDIRECT,
    payload: { to },
  });
};
