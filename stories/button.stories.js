import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import StateFulReactButton from '../lib/StateFulReactButton';
import StatelessReactButton from '../lib/StatelessReactButton';

storiesOf('Button', module)
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
  );