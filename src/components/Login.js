import React, { useState, useEffect } from "react";
import Button from "./shared/Button";
import PropTypes from "prop-types";

function Login({ buttonText }) {
  Login.propsType = {
    buttonText: PropTypes.string.isRequired,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  }, []);

  function handleRegister() {
    setIsLoading(true);
  }

  return (
    <div className='w-full max-w-md m-auto pt-5'>
      <div className='p-5'>
        <input
          placeholder='Enter email...'
          className='w-full border px-3 py-3 rounded mb-3'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='Enter password...'
          className='w-full border px-3 py-3 rounded mb-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button children={buttonText} isLoading={isLoading} onClick={handleRegister}/>
      </div>
    </div>
  );
}

export default Login;
