import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';

import Sidebar from '../components/Sidebar/index.tsx';


storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: {
      panelPosition: 'right'
    },
  })
  .add('basic', () => {
    const user = object('user', {
      userName: 'tong.chen'
    });
    const title = text('title', 'Insight Portal');
    const avatarMenus = object('avatarMenus', [
      { name: 'Logout', id: 'logout' }
    ]);
    const style = object('style', {});

    return (
      <Sidebar
        // style={style}
        // title={title}
        // user={user}
        // avatarMenus={avatarMenus}
        // onClickAvatarItem={action('onClickAvatarItem')}
        // onClickMenuIcon={action('onClickMenuIcon')}
      />
    );
  });