import React from 'react';
import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider/index';

const preview: Preview = {
  parameters: {
    themes: {
      default: 'light',
      list: [
        { name: Theme.LIGHT, class: 'light', color: '#00aced' },
        { name: Theme.DARK, class: 'dark', color: '#3b5998' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => <Story />,
  ],
};

export default preview;
