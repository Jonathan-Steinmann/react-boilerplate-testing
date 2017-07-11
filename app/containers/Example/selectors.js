import { createSelector } from 'reselect';

/**
 * Direct selector to the example state domain
 */
const selectExampleDomain = () => (exampleState) => exampleState.get('example');

const makeSelectExampleLoading = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.get('loading')
);

const makeSelectExampleError = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.get('error')
);

const makeSelectExampleResponse = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.getIn(['response'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (exampleState) => {
    const routingState = exampleState.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectExampleDomain,
  makeSelectExampleLoading,
  makeSelectExampleError,
  makeSelectExampleResponse,
  makeSelectLocationState,
};
