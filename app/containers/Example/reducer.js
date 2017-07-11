/*
 * Example reducer
 */

import { fromJS } from 'immutable';
import {
  CALL_API,
  CALL_API_SUCCESS,
  CALL_API_ERROR,
} from './constants';

// The initial state of Example
const initialState = fromJS({
  loading: false,
  error: false,
  response: false,
});

/**
 * manage API response states
 * @param state
 * @param action
 * @returns {*}
 */
function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case CALL_API:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['response'], false);
    case CALL_API_SUCCESS:
      return state
        .setIn(['response'], action.response)
        .set('loading', false);
    case CALL_API_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default exampleReducer;
