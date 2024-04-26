import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../src/App.css";
import image from "../../src/assets/logoA. removebg-preview (1).png";

const Header = ({ scrollToSection }) => {
    const links = [
        { name: "Home", ref: "home" },
        { name: "Features", ref: "features" },
        { name: "Make Money", ref: "makeMoney" },
        { name: "About Us", ref: "aboutUs" },
        { name: "Service", ref: "service" }
    ];

    const [isShow, setisShow] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    return (
        <>
            <div className="bg-blue-500">
                <nav className="relative px-4 sm:px-20 flex justify-between items-center bg-blue">
                    <NavLink className="text-3xl font-bold leading-none" to="/">
                        <img src={image} alt="" className="w-32 h-32" />
                    </NavLink>
                    <div className="lg:hidden">
                        <button onClick={() => setisShow(!isShow)} className="navbar-burger flex items-center text-white p-3">
                            <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 gap-4">
                        {links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    scrollToSection(link.ref);
                                    setActiveLink(link.name);
                                }}
                                className="text-sm font-semibold text-white"
                            >
                                {link.name}
                            </button>
                        ))}
                    </ul>
                    <Link to="/signup" className="hidden lg:inline-block lg:ml-auto">
                        <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-9 rounded-3xl">
                            My Account
                        </button>
                    </Link>
                </nav>
            </div>

            <div className={`navbar-menu relative z-50 ${isShow ? "block" : "hidden"}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8 justify-between">
                        <NavLink className="text-3xl font-bold leading-none" to="/">
                            <img src={image} alt="" className="w-20 h-20" />
                        </NavLink>
                        <button onClick={() => setisShow(false)} className="navbar-close" aria-label="Close Menu">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul>
                        {links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    scrollToSection(link.ref);
                                    setActiveLink(link.name);
                                    setisShow(false);
                                }}
                                className={`block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded ${activeLink === link.name ? "text-blue-600" : ""}`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </ul>
                    <div className="mt-auto">
                        <Link to="/signup" className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-500 hover:bg-green-600 shadow-lg rounded-xl">
                            My Account
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
