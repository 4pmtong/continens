import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';

import Header from '../components/Header';

import SelectCountry from '../extra/Select';


storiesOf('Header', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: {
      panelPosition: 'bottom'
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
      <Header
        style={style}
        title={title}
        user={user}
        avatarMenus={avatarMenus}
        onClickAvatarItem={action('onClickAvatarItem')}
        onClickMenuIcon={action('onClickMenuIcon')}
      />
    );
  }).add('with select', () => {
    const user = object('user', {
      userName: 'tong.chen'
    });
    const title = text('title', 'Insight Portal');
    const selectCountry = text('selectCountry', 'ID');
    const countries = array('countries', ['ID', 'TW']);
    const avatarMenus = object('avatarMenus', [
      { name: 'Logout', id: 'logout' }
    ]);
    const style = object('style', {});

    return (
      <Header
        style={style}
        title={title}
        user={user}
        avatarMenus={avatarMenus}
        onClickAvatarItem={action('onClickAvatarItem')}
        onClickMenuIcon={action('onClickMenuIcon')}
      >
        <SelectCountry 
          countries={countries}
          selectCountry={selectCountry}
          onChange={action('onChange')}
        />
      </Header>
    );
  });