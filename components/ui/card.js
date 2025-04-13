// components/ui/card.js

import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
