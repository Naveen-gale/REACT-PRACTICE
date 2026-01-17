import React, { useState } from "react";

const Login = ({ handleLogin }) => {   // correct name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);   // correct function call
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-red-100 to-black-200">
      <div className="w-full max-w-sm rounded-2xl border-green-300 shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-lg"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="border p-3 rounded-lg"
          />

          <button className="bg-red-400 text-white py-3 rounded-lg font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
