import React, { useState } from 'react';

import { Message } from 'continens';

const BasicMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowMessage(!showMessage);
        }}
      >
        show message
      </button>

      {!!showMessage && <Message title="Hello Message" />}
    </div>
  );
};

export default BasicMessage;
