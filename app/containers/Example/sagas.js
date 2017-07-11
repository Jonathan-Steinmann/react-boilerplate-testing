/**
 * example saga
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CALL_API } from 'containers/Example/constants';
import { callApiSuccess, callApiError } from 'containers/Example/actions';
import request from 'utils/request';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

/**
 * call api using request utliity and 'put' reponse or handle error
 */
export function* getEvent() {
  // static URL for example purposes
  const requestURL = 'http://api-app.espn.com//v1/sports/baseball/mlb/events/320328111';
  try {
    const response = yield call(request, requestURL);
    yield put(callApiSuccess(response));
  } catch (err) {
    yield put(callApiError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apiData() {
  // Watches for CALL_API action and calls getEvent when one comes in.
  const watcher = yield takeLatest(CALL_API, getEvent);
  // Suspend execution
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  apiData,
];
