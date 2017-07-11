/*
 * Example actions
 */

import {
  CALL_API,
  CALL_API_SUCCESS,
  CALL_API_ERROR,
} from './constants';

/**
 * make API call
 * @returns {{type}}
 */
export function callApi() {
  return {
    type: CALL_API,
  };
}

/**
 * API returned response
 * @param response
 * @returns {{type: *, response: *}}
 */
export function callApiSuccess(response) {
  return {
    type: CALL_API_SUCCESS,
    response,
  };
}

/**
 * API response error
 * @param error
 * @returns {{type: *, error: *}}
 */
export function callApiError(error) {
  return {
    type: CALL_API_ERROR,
    error,
  };
}
