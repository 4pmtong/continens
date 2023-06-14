/**
 * title: With validation error
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
        areaDescription="Not a valid name."
      />
    </div>
  );
};
