import React, { useState } from 'react';

import { message } from 'continens';

const BasicMessage = () => {
  // const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          message.info(
            'show info message with title',
            'Default message'
          );
        }}
      >
        default message
      </button>

      <br />

      <button
        onClick={() => {
          message.success(
            'show success message without title',
            'Success message'
          );
        }}
      >
        success message
      </button>

      <br />

      <button
        onClick={() => {
          message.warning(
            'show warning message without title',
            'Warning message'
          );
        }}
      >
        warning message
      </button>

      <br />

      <button
        onClick={() => {
          message.error(
            'show error message without title',
            'Error message'
          );
        }}
      >
        error message
      </button>
    </div>
  );
};

export default BasicMessage;
