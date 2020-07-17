import { render } from "@testing-library/react";
import React from "react";

function Button({ children, isLoading = false, onClick }) {
  return (
    <button
      className={`w-full bg-purple-900 rounded py-2 text-white font-bold ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
