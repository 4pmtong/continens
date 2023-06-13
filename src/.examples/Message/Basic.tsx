/**
 * title: Basic
 */

import React from 'react';

import { message } from 'continens';

const BasicMessage = () => {
  // const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={() => {
          message.info('show info message without title');
        }}
      >
        default message
      </button>

      <button
        onClick={() => {
          message.success('show success message without title');
        }}
      >
        success message
      </button>

      <button
        onClick={() => {
          message.warning('show warning message without title');
        }}
      >
        warning message
      </button>

      <button
        onClick={() => {
          message.error('show error message without title');
        }}
      >
        error message
      </button>
    </div>
  );
};

export default BasicMessage;
