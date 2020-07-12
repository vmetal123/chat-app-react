import React, { useState } from "react";
import Button from "./shared/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md m-auto">
      <div className="shadow-lg p-5 rounded">
        <h1 className="font-bold text-2xl mb-3">Login page</h1>
        <input
          placeholder="Enter email..."
          className="w-full border px-3 py-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter password..."
          className="w-full border px-3 py-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button children={"Login"} />
      </div>
    </div>
  );
}

export default Login;
