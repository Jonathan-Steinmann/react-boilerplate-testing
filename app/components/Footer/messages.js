/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  newlicenseMessage: {
    id: 'boilerplate.components.Footer.license.message',
    defaultMessage: 'This project is licensed under LOL!',
  },
  authorMessage: {
    id: 'boilerplate.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}
    `,
  },
});
