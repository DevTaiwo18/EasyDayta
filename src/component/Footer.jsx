import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from "../../src/assets/logoA-removebg-preview.png"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center">
                <NavLink className="text-3xl font-bold leading-none" to="/">
                    <div className="w-32 h-32 m-0">
                        <img src={image} alt="" className="w-full" />
                    </div>
                </NavLink>
                <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                    <Link to="/signin" className="hover:text-gray-300">Login</Link>
                    <Link to="/signup" className="hover:text-gray-300">Register</Link>
                </div>
                <div className="text-sm mb-2">
                    Designed and Developed by DevTaiwo.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
