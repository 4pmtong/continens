import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, value, object, array } from '@storybook/addon-knobs';

import TableScroll from '../components/TableScroll';

import note from './notes/Layout.md';


storiesOf('TableScroll', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const tableBodys = object('tableBodys', [
      [{
        id: 'row1-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row1-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row1-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row1-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row1-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row1-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row1-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row1-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row1-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row2-1',
        value: 11,
        align: 'right',
        
        
      }, {
        id: 'row2-2',
        value: 12,
        align: 'right',
        
        
      }, {
        id: 'row2-3',
        value: 13,
        align: 'right',
        
        
      }, {
        id: 'row2-4',
        value: 14,
        align: 'right',
        
        
      }, {
        id: 'row2-5',
        value: 15,
        align: 'right',
        
        
      }, {
        id: 'row2-6',
        value: 16,
        align: 'right',
        
        
      }, {
        id: 'row2-7',
        value: 17,
        align: 'right',
        
        
      }, {
        id: 'row2-8',
        value: 18,
        align: 'right',
        
        
      }, {
        id: 'row2-9',
        value: 19,
        align: 'right',
        
        
      }],
    ]);
    const selectedEdit = object('selectedEdit', {
      id: 'row1-1',
      value: 1,
      align: 'right',
      
      
    });
    return (
      <div style={{
        padding: '1rem',
        backgroundColor: '#f3f3f3'
      }}>
        <TableScroll 
          tableHeads={[
            {
              value: 'head1',
              key: 'head1',
              
              width: '10rem',
            },
            {
              value: 'head2',
              key: 'head2',
              
              width: '10rem',
            },
            {
              value: 'head3',
              key: 'head3',
              
              width: '10rem',
            },
            {
              value: 'head4',
              key: 'head4',
              
              width: '10rem',
            },
            {
              value: 'head5',
              key: 'head5',
              
              width: '10rem',
            },
            {
              value: 'head6',
              key: 'head6',
              
              width: '10rem',
            },
            {
              value: 'head7',
              key: 'head7',
              
              width: '10rem',
            },
            {
              value: 'head8',
              key: 'head8',
              
              width: '10rem',
            },
            {
              value: 'head9',
              key: 'head9',
              
              width: '10rem',
            }
          ]}
          tableBodys={tableBodys}
          selectedEdit={selectedEdit}
          onInputChange={action('onInputChange')}
          onActiveInput={action('onActiveInput')}
        />
      </div>
    );
  }, { notes: note })
  .add('Left Fixed', () => {
    const tableBodys = array('tableBodys', [
      [{
        id: 'row1-0',
        value: 'cat1',
      },
      {
        id: 'row1-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row1-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row1-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row1-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row1-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row1-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row1-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row1-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row1-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row2-0',
        value: 'cat2',
      },
      {
        id: 'row2-1',
        value: 11,
        align: 'right',
        
        
      }, {
        id: 'row2-2',
        value: 12,
        align: 'right',
        
        
      }, {
        id: 'row2-3',
        value: 13,
        align: 'right',
        
        
      }, {
        id: 'row2-4',
        value: 14,
        align: 'right',
        
        
      }, {
        id: 'row2-5',
        value: 15,
        align: 'right',
        
        
      }, {
        id: 'row2-6',
        value: 16,
        align: 'right',
        
        
      }, {
        id: 'row2-7',
        value: 17,
        align: 'right',
        
        
      }, {
        id: 'row2-8',
        value: 18,
        align: 'right',
        
        
      }, {
        id: 'row2-9',
        value: 19,
        align: 'right',
        
        
      }],
      [{
        id: 'row3-0',
        value: 'cat3',
      },
      {
        id: 'row3-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row3-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row3-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row3-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row3-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row3-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row3-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row3-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row3-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row4-0',
        value: 'cat4',
      },
      {
        id: 'row4-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row4-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row4-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row4-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row4-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row4-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row4-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row4-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row4-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row5-0',
        value: 'cat5',
      },
      {
        id: 'row5-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row5-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row5-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row5-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row5-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row5-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row5-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row5-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row5-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row6-0',
        value: 'cat6',
      },
      {
        id: 'row6-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row6-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row6-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row6-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row6-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row6-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row6-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row6-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row6-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row7-0',
        value: 'cat7',
      },
      {
        id: 'row7-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row7-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row7-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row7-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row7-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row7-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row7-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row7-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row7-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row8-0',
        value: 'cat8',
      },
      {
        id: 'row8-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row8-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row8-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row8-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row8-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row8-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row8-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row8-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row8-9',
        value: 9,
        align: 'right',
        
        
      }],
    ]);
    const selectedEdit = object('selectedEdit', {
      id: 'row1-1',
      value: 1,
      align: 'right',
      
      
    });
    const onInputChange = (newVal, rowKey, cellIndex, cellId) => {
      selectedEdit.value = newVal;
      !!tableBodys[rowKey] && !!tableBodys[rowKey][cellIndex] && (tableBodys[rowKey][cellIndex].id === cellId) &&
      (tableBodys[rowKey][cellIndex].value = newVal);

      console.log(newVal, rowKey, cellIndex, cellId, !!tableBodys[rowKey] && !!tableBodys[rowKey][cellIndex] && (tableBodys[rowKey][cellIndex].id === cellId))
    }
    return (
      <div style={{
        padding: '1rem',
        backgroundColor: '#f3f3f3'
      }}>
        <TableScroll 
          tableHeads={[
            {
              value: 'main cat',
              key: 'main cat',
              
              width: '15rem',
            },
            {
              value: 'head1',
              key: 'head1',
              
              width: '10rem',
            },
            {
              value: 'head2',
              key: 'head2',
              
              width: '10rem',
            },
            {
              value: 'head3',
              key: 'head3',
              
              width: '10rem',
            },
            {
              value: 'head4',
              key: 'head4',
              
              width: '10rem',
            },
            {
              value: 'head5',
              key: 'head5',
              
              width: '10rem',
            },
            {
              value: 'head6',
              key: 'head6',
              
              width: '10rem',
            },
            {
              value: 'head7',
              key: 'head7',
              
              width: '10rem',
            },
            {
              value: 'head8',
              key: 'head8',
              
              width: '10rem',
            },
            {
              value: 'head9',
              key: 'head9',
              
              width: '10rem',
            }
          ]}
          hasLeftFixed={true}
          // hasRightFixed={true}
          tableBodys={tableBodys}
          selectedEdit={selectedEdit}
          onInputChange={action('onInputChange')}
          onActiveInput={action('onActiveInput')}
        />
      </div>
    );
  }, { notes: note })
  .add('Right Fixed', () => {
    const tableBodys = array('tableBodys', [
      [{
        id: 'row1-0',
        value: 'cat1',
      },
      {
        id: 'row1-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row1-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row1-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row1-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row1-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row1-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row1-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row1-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row1-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row2-0',
        value: 'cat2',
      },
      {
        id: 'row2-1',
        value: 11,
        align: 'right',
        
        
      }, {
        id: 'row2-2',
        value: 12,
        align: 'right',
        
        
      }, {
        id: 'row2-3',
        value: 13,
        align: 'right',
        
        
      }, {
        id: 'row2-4',
        value: 14,
        align: 'right',
        
        
      }, {
        id: 'row2-5',
        value: 15,
        align: 'right',
        
        
      }, {
        id: 'row2-6',
        value: 16,
        align: 'right',
        
        
      }, {
        id: 'row2-7',
        value: 17,
        align: 'right',
        
        
      }, {
        id: 'row2-8',
        value: 18,
        align: 'right',
        
        
      }, {
        id: 'row2-9',
        value: 19,
        align: 'right',
        
        
      }],
      [{
        id: 'row3-0',
        value: 'cat3',
      },
      {
        id: 'row3-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row3-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row3-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row3-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row3-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row3-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row3-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row3-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row3-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row4-0',
        value: 'cat4',
      },
      {
        id: 'row4-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row4-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row4-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row4-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row4-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row4-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row4-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row4-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row4-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row5-0',
        value: 'cat5',
      },
      {
        id: 'row5-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row5-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row5-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row5-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row5-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row5-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row5-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row5-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row5-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row6-0',
        value: 'cat6',
      },
      {
        id: 'row6-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row6-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row6-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row6-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row6-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row6-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row6-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row6-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row6-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row7-0',
        value: 'cat7',
      },
      {
        id: 'row7-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row7-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row7-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row7-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row7-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row7-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row7-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row7-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row7-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row8-0',
        value: 'cat8',
      },
      {
        id: 'row8-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row8-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row8-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row8-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row8-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row8-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row8-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row8-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row8-9',
        value: 9,
        align: 'right',
        
        
      }],
    ]);
    const selectedEdit = object('selectedEdit', {
      id: 'row1-1',
      value: 1,
      align: 'right',
      
      
    });
    const onInputChange = (newVal, rowKey, cellIndex, cellId) => {
      selectedEdit.value = newVal;
      !!tableBodys[rowKey] && !!tableBodys[rowKey][cellIndex] && (tableBodys[rowKey][cellIndex].id === cellId) &&
      (tableBodys[rowKey][cellIndex].value = newVal);

      console.log(newVal, rowKey, cellIndex, cellId, !!tableBodys[rowKey] && !!tableBodys[rowKey][cellIndex] && (tableBodys[rowKey][cellIndex].id === cellId))
    }
    return (
      <div style={{
        padding: '1rem',
        backgroundColor: '#f3f3f3'
      }}>
        <TableScroll 
          tableHeads={[
            {
              value: 'main cat',
              key: 'main cat',
              
              width: '15rem',
            },
            {
              value: 'head1',
              key: 'head1',
              
              width: '10rem',
            },
            {
              value: 'head2',
              key: 'head2',
              
              width: '10rem',
            },
            {
              value: 'head3',
              key: 'head3',
              
              width: '10rem',
            },
            {
              value: 'head4',
              key: 'head4',
              
              width: '10rem',
            },
            {
              value: 'head5',
              key: 'head5',
              
              width: '10rem',
            },
            {
              value: 'head6',
              key: 'head6',
              
              width: '10rem',
            },
            {
              value: 'head7',
              key: 'head7',
              
              width: '10rem',
            },
            {
              value: 'head8',
              key: 'head8',
              
              width: '10rem',
            },
            {
              value: 'head9',
              key: 'head9',
              
              width: '10rem',
            }
          ]}
          // hasLeftFixed={true}
          hasRightFixed={true}
          tableBodys={tableBodys}
          selectedEdit={selectedEdit}
          onInputChange={action('onInputChange')}
          onActiveInput={action('onActiveInput')}
        />
      </div>
    );
  }, { notes: note })
  .add('All Fixed', () => {
    const tableBodys = array('tableBodys', [
      [{
        id: 'row1-0',
        value: 'cat1',
      },
      {
        id: 'row1-1',
        value: 1333333333333333,
        align: 'right',
        
        
      }, {
        id: 'row1-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row1-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row1-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row1-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row1-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row1-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row1-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row1-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row2-0',
        value: 'cat2',
      },
      {
        id: 'row2-1',
        value: 11,
        align: 'right',
        
        
      }, {
        id: 'row2-2',
        value: 12,
        align: 'right',
        
        
      }, {
        id: 'row2-3',
        value: 13,
        align: 'right',
        
        
      }, {
        id: 'row2-4',
        value: 14,
        align: 'right',
        
        
      }, {
        id: 'row2-5',
        value: 15,
        align: 'right',
        
        
      }, {
        id: 'row2-6',
        value: 16,
        align: 'right',
        
        
      }, {
        id: 'row2-7',
        value: 17,
        align: 'right',
        
        
      }, {
        id: 'row2-8',
        value: 18,
        align: 'right',
        
        
      }, {
        id: 'row2-9',
        value: 19,
        align: 'right',
        
        
      }],
      [{
        id: 'row3-0',
        value: 'cat3',
      },
      {
        id: 'row3-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row3-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row3-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row3-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row3-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row3-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row3-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row3-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row3-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row4-0',
        value: 'cat4',
      },
      {
        id: 'row4-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row4-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row4-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row4-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row4-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row4-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row4-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row4-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row4-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row5-0',
        value: 'cat5',
      },
      {
        id: 'row5-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row5-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row5-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row5-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row5-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row5-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row5-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row5-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row5-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row6-0',
        value: 'cat6',
      },
      {
        id: 'row6-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row6-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row6-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row6-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row6-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row6-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row6-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row6-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row6-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row7-0',
        value: 'cat7',
      },
      {
        id: 'row7-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row7-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row7-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row7-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row7-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row7-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row7-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row7-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row7-9',
        value: 9,
        align: 'right',
        
        
      }],
      [{
        id: 'row8-0',
        value: 'cat8',
      },
      {
        id: 'row8-1',
        value: 1,
        align: 'right',
        
        
      }, {
        id: 'row8-2',
        value: 2,
        align: 'right',
        
        
      }, {
        id: 'row8-3',
        value: 3,
        align: 'right',
        
        
      }, {
        id: 'row8-4',
        value: 4,
        align: 'right',
        
        
      }, {
        id: 'row8-5',
        value: 5,
        align: 'right',
        
        
      }, {
        id: 'row8-6',
        value: 6,
        align: 'right',
        
        
      }, {
        id: 'row8-7',
        value: 7,
        align: 'right',
        
        
      }, {
        id: 'row8-8',
        value: 8,
        align: 'right',
        
        
      }, {
        id: 'row8-9',
        value: 9,
        align: 'right',
        
        
      }],
    ]);
    const selectedEdit = object('selectedEdit', {
      id: 'row1-1',
      value: 133333333333333333,
      align: 'right',
      
      
    });
    const onInputChange = (newVal, rowKey, cellIndex, cellId) => {
      selectedEdit.value = newVal;
      !!tableBodys[rowKey] && !!tableBodys[rowKey][cellIndex] && (tableBodys[rowKey][cellIndex].id === cellId) &&
      (tableBodys[rowKey][cellIndex].value = newVal);

      console.log(newVal, rowKey, cellIndex, cellId, !!tableBodys[rowKey] && !!tableBodys[rowKey][cellIndex] && (tableBodys[rowKey][cellIndex].id === cellId))
    }
    return (
      <div style={{
        padding: '1rem',
        backgroundColor: '#f3f3f3'
      }}>
        <TableScroll 
          tableHeads={[
            {
              value: 'main cat',
              key: 'main cat',
              
              width: '15rem',
            },
            {
              value: 'heaasdjfjasdlfjlasdjfljaslfjlajflsjdfljasldfjld1',
              key: 'head1',
              
              width: '10rem',
            },
            {
              value: 'head2',
              key: 'head2',
              
              width: '10rem',
            },
            {
              value: 'head3',
              key: 'head3',
              
              width: '10rem',
            },
            {
              value: 'head4',
              key: 'head4',
              
              width: '10rem',
            },
            {
              value: 'head5',
              key: 'head5',
              
              width: '10rem',
            },
            {
              value: 'head6',
              key: 'head6',
              
              width: '10rem',
            },
            {
              value: 'head7',
              key: 'head7',
              
              width: '10rem',
            },
            {
              value: 'head8',
              key: 'head8',
              
              width: '10rem',
            },
            {
              value: 'head9',
              key: 'head9',
              
              width: '10rem',
            }
          ]}
          hasLeftFixed={true}
          hasRightFixed={true}
          tableBodys={tableBodys}
          selectedEdit={selectedEdit}
          onInputChange={action('onInputChange')}
          onActiveInput={action('onActiveInput')}
        />
      </div>
    );
  }, { notes: note });