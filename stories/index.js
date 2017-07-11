import React from 'react';
import { storiesOf, configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import H1 from '../app/components/H1';
import H2 from '../app/components/H2';
import H3 from '../app/components/H3';

storiesOf('<H1>', module)
  .add('with text', () => (
    <H1>H1 Text</H1>
  ))
  .add('with ID', () => (
    <H1 id="testID">H1 Text</H1>
  ));
storiesOf('<H2>', module)
  .add('with text', () => (
    <H2>H2 Text</H2>
  ))
  .add('with ID', () => (
    <H2 id="testID">H1 Text</H2>
  ));
storiesOf('<H3>', module)
  .add('with text', () => (
    <H3>H3 Text</H3>
  ))
  .add('with ID', () => (
    <H3 id="testID">H1 Text</H3>
  ));
