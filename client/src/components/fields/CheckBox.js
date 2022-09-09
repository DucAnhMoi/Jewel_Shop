// Import library
import React from 'react';
import { Checkbox } from '@mui/material';
// Import components/assets/sections/....

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckBox = ({ className, ...props }) => {
  return (
    <div className={className}>
      <Checkbox {...label} {...props} />
    </div>
  );
};
