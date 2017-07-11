/**
 * Test  sagas
 */
import { take, put, cancel, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CALL_API } from 'containers/Example/constants';
import { callApiSuccess, callApiError } from 'containers/Example/actions';
import { getEvent, apiData } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
describe('getEvent Saga', () => {
  let callAPIGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    callAPIGenerator = getEvent();
    const selectDescriptor = callAPIGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the CALL_API_SUCCESS action if it requests the data successfully', () => {
    const response = [{
      name: 'First API',
    }, {
      name: 'Second API',
    }];
    const putDescriptor = callAPIGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(callApiSuccess(response)));
  });

  it('should call the CALL_API_ERROR action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = callAPIGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(callApiError(response)));
  });
});

describe('apiDataSaga Saga', () => {
  const apiDataSaga = apiData();
  const mockedTask = createMockTask();

  it('should start task to watch for CALL_API action', () => {
    const takeLatestDescriptor = apiDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(CALL_API, getEvent));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = apiDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = apiDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
