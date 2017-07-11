/*
 * Example
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
// import Button from 'components/Button';
import RaisedButton from 'material-ui/RaisedButton';
import ExampleJson from 'components/ExampleJson';
import H2 from 'components/H2';
import Divider from 'material-ui/Divider';
import Img from './Img';
import Pic from './api.jpg';
import Workflow from './workflow.png';
import Stateman from './devtools.png';
import messages from './messages';
import { callApi } from './actions';
import { makeSelectExampleLoading, makeSelectExampleError, makeSelectExampleResponse } from './selectors';

const style = {
  margin: '40px 32% 40px',
  width: '35%',
};

export class Example extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // if you wanted to make API call on load
  // componentDidMount() {
  //   this.props.makeCall();
  // }

  render() {
    const { loading, error, response } = this.props;
    const responseProps = {
      loading,
      error,
      response,
    };

    let button = <div><RaisedButton label={<FormattedMessage {...messages.buttonText} />} style={style} primary onClick={this.props.makeCall} /></div>;
    let headerText = '';
    let contentReact = '';
    let contentRedux = '';
    let contentState = '';
    if (response !== false) {
      button = <div><RaisedButton label={<FormattedMessage {...messages.buttonTextAgain} />} style={style} primary onClick={this.props.makeCall} /></div>;
      headerText = <H2><FormattedMessage {...messages.textSuccess} /></H2>;
      contentReact = <div><br /><Img src={Pic} alt="pic" /></div>;
      contentRedux = <div><br /><Divider /><H2><FormattedMessage {...messages.textRedux} /></H2><br /><Img src={Workflow} alt="workflow" /></div>;
      contentState = <div><br /><Divider /><H2><FormattedMessage {...messages.textState} /></H2><FormattedMessage {...messages.textDevTools} /><Img src={Stateman} alt="state management" /></div>;
    }

    return (
      <div>
        { button }
        { headerText }
        <ExampleJson {...responseProps} />
        { contentReact }
        { contentRedux }
        { contentState }
        <br />
      </div>
    );
  }
}

Example.propTypes = {
  makeCall: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  response: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectExampleLoading(),
  error: makeSelectExampleError(),
  response: makeSelectExampleResponse(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    makeCall: () => {
      dispatch(callApi());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
