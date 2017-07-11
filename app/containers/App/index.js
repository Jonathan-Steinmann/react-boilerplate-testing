/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// default sample app

// import React from 'react';
// import Helmet from 'react-helmet';
// import styled from 'styled-components';
//
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import withProgressBar from 'components/ProgressBar';
//
// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;
//
// export function App(props) {
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - React-Boilerplate-Test"
//         defaultTitle="React-Boilerplate-Test"
//         meta={[
//           { name: 'description', content: 'React-Boilerplate-Test' },
//         ]}
//       />
//       <Header />
//       {React.Children.toArray(props.children)}
//       <Footer />
//     </AppWrapper>
//   );
// }
//
// App.propTypes = {
//   children: React.PropTypes.node,
// };
//
// export default withProgressBar(App);


import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Img from 'components/Img';
import Hotdog from './hotdog.jpg';
import ReactRedux from './reactredux.png';

injectTapEventPlugin();
export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  // Using Material UI library
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        // primary1Color: '#fafafa',
        // primary2Color: '#000',
        // primary3Color: '#FFF',
        // accent1Color: '#ED1C24',
        // accent2Color: '#000',
        // accent3Color: '#FFF',
        textColor: '#000',
      },
      tabs: {
        textColor: 'rgba(0, 0, 0, 0.5)',
        selectedTextColor: 'rgba(0, 0, 0, 1)',
      },
      refreshIndicator: {
        strokeColor: '#ED1C24',
        loadingStrokeColor: '#ED1C24',
      },
      datePicker: {
        textColor: '#FFF',
        calendarTextColor: '#ED1C24',
        selectColor: '#ED1C24',
        selectTextColor: '#FFF',
      },
      flatButton: {
        primaryTextColor: '#ED1C24', // Whatever color you want.
      },
      toggle: {
        thumbOnColor: '#ED1C24',
        thumbRequiredColor: '#ED1C24',
        trackOnColor: fade('#ED1C24', 0.5),
      },
      appBar: {
        paddingTop: 0,
        backgroundColor: '#ED1C24',
      },
    });
    const styles = {
      background: {
        background: '#fafafa',
        height: '100%',
        bottom: '0',
        position: 'relative',
        margin: 'auto',
        width: 'calc(940px + 16px * 2)',
      },
    };
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.background}>
          <Helmet
            titleTemplate="%s - React-Boilerplate-Testing"
            defaultTitle="React-Boilerplate-Testing"
            meta={[{ name: 'description', content: 'React-Boilerplate-Testing' },
            ]}
          />
          <AppBar
            title="React-Boilerplate-Testing"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<Img src={ReactRedux} alt="React Redux" />}
          />
          <Drawer width={470} openSecondary open={this.state.open}>
            <Img src={Hotdog} alt="Hotdog" />
          </Drawer>
          <Header />
          <div>
            {React.Children.toArray(this.props.children)}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
