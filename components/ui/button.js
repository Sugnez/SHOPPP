// components/ui/button.js

import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-blue-500 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
