// Import library
import React from 'react';
import { TextField as TextFieldArea } from '@mui/material';
// Import components/assets/sections/....
import { CheckIcon } from '../icons/Icons';

export const TextField = ({
  label,
  name,
  icon,
  iconAbsolute = <CheckIcon width={20} height={20} />,
  message,
  // Style
  styleBox,
  styleLabel,
  styleIcon,
  styleMessage,
  styleIconAbsolute,
  // Active
  active,
  ...props
}) => {
  return (
    <div className={styleBox}>
      <div className="flex items-center relative">
        <div className={`${styleIcon}`}>{icon}</div>
        <TextFieldArea label={label} name={name} variant="outlined" {...props} />
        {active && (
          <div className={styleIconAbsolute || 'absolute left-[-6%] top-[40%] animate-bounce'}>
            {iconAbsolute}
          </div>
        )}
      </div>
      <span className={`${styleMessage} text-red-600`}>{message}</span>
    </div>
  );
};
