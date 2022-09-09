// Import library
import React from 'react';
// Import components/assets/sections/....

export const FormProvider = ({ onSubmit, className, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
