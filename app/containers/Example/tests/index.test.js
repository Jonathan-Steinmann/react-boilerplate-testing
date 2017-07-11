import React from 'react';
import { shallow } from 'enzyme';
import ExampleJson from '../../../components/ExampleJson';
import { Example, mapDispatchToProps } from '../index';
import { callApi } from '../actions';

describe('<Example />', () => {
  it('should render the api json component', () => {
    const renderedComponent = shallow(
      <Example loading error={false} response />
    );
    expect(renderedComponent.contains(<ExampleJson loading error={false} response />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('makeCall', () => {
      it('should dispatch makeCall when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.makeCall({});
        expect(dispatch).toHaveBeenCalledWith(callApi());
      });
    });
  });
});
