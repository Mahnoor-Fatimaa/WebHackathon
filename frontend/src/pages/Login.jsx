import React, { useState } from "react";
import "./../styles/Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background-light dark:bg-background-dark text-text-dark dark:text-white font-display">
      <div className="flex w-full max-w-6xl bg-white dark:bg-background-dark rounded-2xl shadow-xl overflow-hidden">
        {/* Left Panel */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524592751225-324bd4eb9b19?auto=format&fit=crop&w=900&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 p-12 flex flex-col justify-end text-white">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-10 h-10 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.46 9.53a4.002 4.002 0 0 1-4.88-5.72A7.99 7.99 0 0 0 3 10c0 1.63.49 3.14 1.34 4.41A4.012 4.012 0 0 1 3 13a4 4 0 0 1 4-4c.48 0 .95.09 1.39.24a4.01 4.01 0 0 1 5.48-1.57 4.008 4.008 0 0 1 3.59 1.86Z"></path>
              </svg>
              <h2 className="text-2xl font-bold">
                Smart Agriculture Market Tracker
              </h2>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-2">
              Empowering Pakistan’s Farmers
            </h1>
            <p className="text-lg text-gray-200">
              Transparent market rates, weather insights, and smart farming advice.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-12 lg:p-16">
          <div className="max-w-md w-full mx-auto space-y-8">
            {/* Logo for small screens */}
            <div className="lg:hidden flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.46 9.53a4.002 4.002 0 0 1-4.88-5.72A7.99 7.99 0 0 0 3 10c0 1.63.49 3.14 1.34 4.41A4.012 4.012 0 0 1 3 13a4 4 0 0 1 4-4c.48 0 .95.09 1.39.24a4.01 4.01 0 0 1 5.48-1.57 4.008 4.008 0 0 1 3.59 1.86Z"></path>
              </svg>
              <span className="text-xl font-bold">AgriPlatform</span>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">Welcome Back</h2>
              <p className="text-text-light dark:text-gray-400">
                Log in to access your dashboard
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-base font-medium mb-2">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your email or phone"
                  className="input-field"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-base font-medium">Password</label>
                  <a
                    href="#"
                    className="text-sm font-medium text-brand-green hover:text-brand-accent"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input-field pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">I am a:</p>
                <div className="grid grid-cols-2 gap-3">
                  <label className="role-option">
                    <input
                      type="radio"
                      name="role"
                      defaultChecked
                      className="form-radio text-brand-green"
                    />
                    <span>Farmer</span>
                  </label>
                  <label className="role-option">
                    <input
                      type="radio"
                      name="role"
                      className="form-radio text-brand-green"
                    />
                    <span>Admin</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="login-btn">
                Log In
              </button>
            </form>

            <p className="text-center text-sm text-text-light dark:text-gray-400">
              Don’t have an account?
              <a
                href="#"
                className="text-brand-green hover:text-brand-accent font-medium ml-1"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}