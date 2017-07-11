/*
 *
 * Jsonform
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import JsonForm from 'components/JsonForm';
import makeSelectJsonform from './selectors';
import messages from './messages';

export class Jsonform extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p><FormattedMessage {...messages.header} /></p>
        <JsonForm />
      </div>
    );
  }
}

Jsonform.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  JSONForm: makeSelectJsonform(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jsonform);
