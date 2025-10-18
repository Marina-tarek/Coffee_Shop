"use client";

import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    alert("Logged in successfully!");
  };

  return (
<div className="flex items-center justify-center h-[100vh]">
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-amber-700">
          Welcome Back ☕
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition duration-300"
          >
            Log In
          </button>

          <p className="text-sm text-center text-gray-300 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-amber-400 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
</div>


  );
}
