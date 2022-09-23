import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 py-6 font-poppins bg-blue-gradient font-medium text-primary outline-none ${styles}
`}
    >
      Get Started
    </button>
  );
};

export default Button;
