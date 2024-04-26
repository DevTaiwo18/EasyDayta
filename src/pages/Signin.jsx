import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../src/assets/logoA. removebg-preview (1).png';

const Signin = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-md">
        <form className="bg-gray-700 shadow-lg rounded px-8  pb-8 mb-4">

          <NavLink className="flex justify-center items-center" to="/">
            <img src={logoImage} alt="EasyDayta Logo" className="w-32 h-32" />
          </NavLink>
          <h2 className="mb-4 text-3xl font-bold text-center text-white">Login</h2>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="password"
              type="password"
              placeholder="******************"
            />
            <Link to={"/forgotPassword"}>
              <p className="text-xs italic text-gray-400 mt-3">Forgot your password?</p>
            </Link>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-white text-xs">
          Don’t have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-300">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
