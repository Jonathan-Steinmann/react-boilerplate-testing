import { fromJS } from 'immutable';
import {
  makeSelectExampleLoading,
  makeSelectExampleError,
  makeSelectExampleResponse,
  makeSelectLocationState,
} from '../selectors';

describe('makeSelectExampleLoading', () => {
  const loadingSelector = makeSelectExampleLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      example: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectExampleError', () => {
  const errorSelector = makeSelectExampleError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      example: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectExampleResponse', () => {
  const reposSelector = makeSelectExampleResponse();
  it('should select the repos', () => {
    const response = fromJS([]);
    const mockedState = fromJS({
      example: {
        response,
      },
    });
    expect(reposSelector(mockedState)).toEqual(response);
  });
});

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});

