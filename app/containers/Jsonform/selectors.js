import { createSelector } from 'reselect';

/**
 * Direct selector to the jsonform state domain
 */
const selectJsonformDomain = () => (state) => state.get('jsonform');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Jsonform
 */

const makeSelectJsonform = () => createSelector(
  selectJsonformDomain(),
  (substate) => substate.toJS()
);

export default makeSelectJsonform;
export {
  selectJsonformDomain,
};
