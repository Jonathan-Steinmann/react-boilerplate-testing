
import { fromJS } from 'immutable';
import exampleReducer from '../reducer';
import {
  callApi,
  callApiSuccess,
  callApiError,
} from '../actions';

describe('exampleReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      response: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(exampleReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the callApi action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['response'], false);

    expect(exampleReducer(state, callApi())).toEqual(expectedResult);
  });

  it('should handle the callApiSuccess action correctly', () => {
    const fixture = [{
      name: 'JSON',
    }];
    const expectedResult = state
      .setIn(['response'], fixture)
      .set('loading', false);

    expect(exampleReducer(state, callApiSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the callApiError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(exampleReducer(state, callApiError(fixture))).toEqual(expectedResult);
  });
});
