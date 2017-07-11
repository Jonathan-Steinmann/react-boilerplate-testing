
import { fromJS } from 'immutable';
import jsonformReducer from '../reducer';

describe('jsonformReducer', () => {
  it('returns the initial state', () => {
    expect(jsonformReducer(undefined, {})).toEqual(fromJS({}));
  });
});
