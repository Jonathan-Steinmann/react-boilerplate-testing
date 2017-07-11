import {
  callApi,
  callApiSuccess,
  callApiError,
} from '../actions';
import {
  CALL_API,
  CALL_API_SUCCESS,
  CALL_API_ERROR,
} from '../constants';

describe('App Actions', () => {
  describe('callApi', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CALL_API,
      };

      expect(callApi()).toEqual(expectedResult);
    });
  });

  describe('callApiSuccess', () => {
    it('should return the correct type and the passed response', () => {
      const response = ['response'];
      const expectedResult = {
        type: CALL_API_SUCCESS,
        response,
      };

      expect(callApiSuccess(response)).toEqual(expectedResult);
    });
  });

  describe('callApiError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: CALL_API_ERROR,
        error: fixture,
      };

      expect(callApiError(fixture)).toEqual(expectedResult);
    });
  });
});
