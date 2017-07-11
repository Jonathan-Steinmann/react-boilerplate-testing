/**
* ExampleJson
*/
import React, { PropTypes } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import JSONTree from 'react-json-tree';

function ExampleJson({ loading, error, response }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (response !== false) {
    return <JSONTree data={response} />;
  }

  return null;
}

ExampleJson.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  response: PropTypes.any,
};

export default ExampleJson;
