import { addDecorator, addParameters,configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);