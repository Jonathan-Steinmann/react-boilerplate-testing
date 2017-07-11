/**
*
* JsonForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import Form from 'react-jsonschema-form';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type) => console.log.bind(console, type);
const onSubmit = ({ formData }) => console.log(formData);
const onError = (errors) => console.log('I have', errors.length, 'errors to fix');

class JsonForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Form
        schema={schema}
        onChange={log('changed')}
        onSubmit={onSubmit}
        onError={onError}
      />
    );
  }
}

JsonForm.propTypes = {

};

export default JsonForm;
