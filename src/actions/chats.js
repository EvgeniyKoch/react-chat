/* eslint-disable consistent-return */
import * as types from '../constants/chats';
import callApi from '../utils/call-api';
import { redirect } from './services';

export const fetchMyChats = () => (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch({
    type: types.FETCH_MY_CHATS_REQUEST,
  });
  return callApi('chats/my', token)
    .then(data => dispatch({
      type: types.FETCH_MY_CHATS_SUCCESS,
      payload: data,
    }))
    .catch(reason => dispatch({
      type: types.FETCH_MY_CHATS_FEILURE,
      payload: reason,
    }));
};

export const fetchAllChats = () => (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch({
    type: types.FETCH_ALL_CHATS_REQUEST,
  });
  return callApi('chats', token)
    .then(data => dispatch({
      type: types.FETCH_ALL_CHATS_SUCCESS,
      payload: data,
    }))
    .catch(reason => dispatch({
      type: types.FETCH_ALL_CHATS_FEILURE,
      payload: reason,
    }));
};

export const fetchChat = chatId => (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch({
    type: types.FETCH_CHATS_REQUEST,
  });
  return callApi(`chats/${chatId}`, token)
    .then((data) => {
      dispatch({
        type: types.FETCH_CHATS_SUCCESS,
        payload: data,
      });
      return data;
    })
    .catch(reason => dispatch({
      type: types.FETCH_CHATS_FEILURE,
      payload: reason,
    }));
};

export const setActiveChat = chatId => (dispatch) => {
  return dispatch(fetchChat(chatId))
    .then((data) => {
      if (!data) {
        dispatch(redirect('chat'));

        return dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
      }
      dispatch({
        type: types.SET_ACTIVE_CHAT,
        payload: data,
      });
    });
};
