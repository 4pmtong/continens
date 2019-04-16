import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import {muiTheme} from 'storybook-addon-material-ui';

import { Button } from '@storybook/react/demo';
import StateFulReactButton from '../lib/StateFulReactButton';
import StatelessReactButton from '../lib/StatelessReactButton';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('StateFulReactButton', () => 
    <StateFulReactButton handleOnclick={action('clicked')} /> 
  )
  .add('StatelessReactButton', () => 
    <StatelessReactButton handleOnclick={action('clicked')} /> 
  ).add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);
    const shopee = boolean('Shopee', true)
  
    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}<br/>Shopee: {shopee ? 'yes' : 'no'}</div>);
  });