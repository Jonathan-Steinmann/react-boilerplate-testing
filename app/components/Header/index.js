import React from 'react';
import { FormattedMessage } from 'react-intl';

import RaisedButton from 'material-ui/RaisedButton';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner2.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://github.com/Jonathan-Steinmann/react-boilerplate-testing">
          <Img src={Banner} alt="react-boilerplate-test - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <RaisedButton label={<FormattedMessage {...messages.home} />} />
          </HeaderLink>
          <HeaderLink to="/features">
            <RaisedButton label={<FormattedMessage {...messages.features} />} />
          </HeaderLink>
          <HeaderLink to="/example">
            <RaisedButton label={<FormattedMessage {...messages.example} />} />
          </HeaderLink>
          <HeaderLink to="/jsonform">
            <RaisedButton label={<FormattedMessage {...messages.jsonform} />} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
