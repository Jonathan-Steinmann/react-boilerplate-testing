import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import JSONTree from 'react-json-tree';
import ExampleJson from '../index';

describe('<ExampleJson />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <ExampleJson loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <ExampleJson
          loading={false}
          error={{ message: 'Something went wrong, please try again!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong, please try again!/);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <ExampleJson
        response={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render the api response using JSONTree if loading was successful', () => {
    const response = [{
      example: {
        some: response,
      },
    }];
    const renderedComponent = shallow(
      <ExampleJson
        response={response}
        error={false}
      />
    );

    expect(renderedComponent.contains(<JSONTree data={response} />)).toEqual(true);
  });
});

