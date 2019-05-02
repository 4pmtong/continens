/**
 * 

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from '../components/Task/index';
import notes1 from './notes/task.md';
import sidebar from './notes/task1.md';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .addParameters({
    readme: {
      sidebar: sidebar,
    },
  })
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => 
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  , { notes: notes1, readme: {
    sidebar: notes1,
  } });

*/