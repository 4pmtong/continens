/**
 * title: With label
 */

import React from 'react';

import { Input } from 'continens';

export default () => {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Input
        type="text"
        label="Name"
        name="name"
        placeholder="Enter your name"
      />
    </div>
  );
};
