import { render } from "@testing-library/react";
import React from 'react';

function Button({ children }) {
  return (
    <button className="w-full bg-purple-600 rounded py-2 text-white font-bold">
      {children}
    </button>
  );
}

export default Button;
