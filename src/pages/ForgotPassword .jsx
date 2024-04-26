import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from "../../src/assets/logoA. removebg-preview (1).png"


const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 px-5 md:px-0">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <NavLink className="flex justify-center items-center" to="/">
                        <img src={image} alt="EasyDayta Logo" className="w-32 h-32" />
                    </NavLink>
                    <h2 className=" text-center text-3xl font-extrabold text-white">
                        Forgot your password?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Enter your email below to receive your password reset instructions.
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send password reset email
                        </button>
                    </div>
                </form>
                <div className="text-sm">
                    <Link to="/signin" className="font-medium text-blue-500 hover:text-blue-400">
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
