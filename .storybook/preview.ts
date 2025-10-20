import type { Preview } from '@storybook/sveltekit';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
	parameters: {
		html: {
      removeEmptyComments: true,
    },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		options: {
      storySort: {
        method: "alphabetical",
        order: [],
      },
    },
		viewport: {
      options: INITIAL_VIEWPORTS,
    },
	},
	decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
