import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
const req = require.context('../src/components', true, /.story.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

configure(loadStories, module);