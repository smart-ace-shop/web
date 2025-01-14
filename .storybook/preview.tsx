import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import cn from 'classnames';

import { MAIN_FONT } from '../app/constants';
import '../app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    Story => (
      <div className={cn(MAIN_FONT.className)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
