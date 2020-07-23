import React, { useState, useEffect } from "react";
import Button from "./shared/Button";
import { register, login } from "../services/AuthService";
import PropTypes from "prop-types";
import AUTH from '../config/Constants';
import useLocalStorage from '../hooks/useLocalStorage';

function Login({ buttonText }) {
  Login.propsType = {
    buttonText: PropTypes.string.isRequired,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useLocalStorage('token','');
  const [username, setUsername] = useLocalStorage('username', '');

  function handleRegister() {
    setIsLoading(true);

    register({ email, password })
      .then((res) => console.log(res))
      .then((error) => console.log(error));

    setIsLoading(false);
  }

  function cleanInputs() {
    setEmail("");
    setPassword("");
  }

  function handleLogin() {
    setIsLoading(true);

    login({ email, password })
      .then((res) => {
        const { email, token, success } = res;
        if (success) {
          setToken(token);
          setUsername(email);
        }
      })
      .then((error) => console.log(error));

    setIsLoading(false);
  }

  return (
    <div className='w-full max-w-md m-auto pt-5'>
      <div className='p-5'>
        <input
          type='email'
          placeholder='Enter email...'
          className='w-full border px-3 py-3 rounded mb-3'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter password...'
          className='w-full border px-3 py-3 rounded mb-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {buttonText === AUTH.LOGIN ? (
          <Button
            children={buttonText}
            isLoading={isLoading}
            onClick={handleLogin}
          />
        ) : (
          <Button
            children={buttonText}
            isLoading={isLoading}
            onClick={handleRegister}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
