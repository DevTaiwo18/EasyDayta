import React from 'react';
import image from "../../src/assets/logoA-removebg-preview.png"
import { NavLink } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-md">
        <form className="bg-gray-700 shadow-lg rounded px-8  pb-8 mb-4 mt-10">

          <NavLink className="flex justify-center items-center" to="/">
            <div className="w-32 h-32 flex justify-center items-center">
              <img src={image} alt="description" className="w-full h-auto" />
            </div>
          </NavLink>

          <h2 className="mb-6 mt-0 text-2xl font-bold text-center text-white">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fullname">
              Fullname*
            </label>
            <input
              className="appearance-none bg-gray-800 border border-gray-600 text-white text-sm rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="fullname"
              type="fullname"
              placeholder="Adeyemi Taiwo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username*
            </label>
            <input
              className="appearance-none text-sm bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="username"
              type="username"
              placeholder="Taiwo24434"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email*
            </label>
            <input
              className="appearance-none bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
              Phone*
            </label>
            <input
              className="appearance-none text-sm bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="phone"
              type="phone"
              placeholder="08026151366"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="referral">
              Referral username [optional]
            </label>
            <input
              className="appearance-none text-sm bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="referral"
              type="referral"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password*
            </label>
            <input
              className="appearance-none text-sm bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="block text-gray-800 text-xs font-bold mt-1">min_lenght-8 mix characters [i.e musa1234]</p>
          </div>
          <div className="mb-5">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password*
            </label>
            <input
              className="appearance-none text-sm bg-gray-800 border border-gray-600 text-white rounded w-full py-3 px-4  leading-tight focus:outline-none focus:bg-gray-600"
              id="confirmPassword"
              type="confirmPassword"
              placeholder="******************"
            />
            <p className="block text-gray-800 text-xs font-bold mt-1">min_lenght-8 mix characters [i.e musa1234]</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create an account
            </button>
          </div>
        </form>
        <p className="text-center text-white text-xs mb-10">
          Already have an account? <a href="/signin" className="text-blue-500 hover:text-blue-300">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
