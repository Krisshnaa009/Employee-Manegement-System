import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f172a]">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />

      {/* Floating Blobs */}
      <div className="absolute -top-32 -left-24 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Login Card */}
      <div className="relative z-10 w-[420px] rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02]">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            Welcome Back 👋
          </h1>
          <p className="mt-3 text-gray-300">
            Login to continue to your dashboard
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="space-y-6"
        >

          {/* Email */}
          <div className="group flex items-center rounded-xl border border-white/20 bg-white/5 px-4 transition duration-300 focus-within:border-emerald-400 focus-within:bg-white/10">
            <FiMail className="mr-3 text-xl text-gray-400 group-focus-within:text-emerald-400" />

            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 w-full bg-transparent text-white outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="group flex items-center rounded-xl border border-white/20 bg-white/5 px-4 transition duration-300 focus-within:border-emerald-400 focus-within:bg-white/10">
            <FiLock className="mr-3 text-xl text-gray-400 group-focus-within:text-emerald-400" />

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full bg-transparent text-white outline-none placeholder:text-gray-400"
            />
          </div>

         
          

          {/* Button */}
          <button
            className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

            <span className="relative">
              Login →
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;