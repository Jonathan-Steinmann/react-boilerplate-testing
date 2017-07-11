/*
 * Example Messages
 *
 * This contains all the text for the Example component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Example.newheader',
    defaultMessage: 'Example Container (console API call)',
  },
  buttonText: {
    id: 'app.containers.Example.buttonText',
    defaultMessage: 'API TEST... JUST CLICK THE BUTTON!',
  },
  buttonTextAgain: {
    id: 'app.containers.Example.buttonTextAgain',
    defaultMessage: 'TEST AGAIN?',
  },
  textSuccess: {
    id: 'app.containers.Example.textSuccess',
    defaultMessage: 'SUCCESS...',
  },
  textRedux: {
    id: 'app.containers.Example.textRedux',
    defaultMessage: 'Understanding Redux...',
  },
  textState: {
    id: 'app.containers.Example.textState',
    defaultMessage: 'Understanding State...',
  },
  textDevTools: {
    id: 'app.containers.Example.textDevTools',
    defaultMessage: 'With Chrome Redux tools, you can monitor and replay state changes!  When you clicked anything during your session, your state changed and was recorded in the Redux store.  You could replay every click you made in this app to watch them happen again.  Pretty cool, right?',
  },
});
