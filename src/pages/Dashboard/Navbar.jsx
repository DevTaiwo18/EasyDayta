import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../../src/assets/logoA. removebg-preview (1).png';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (
    <div className="flex justify-between items-center px-2 md:px-4  shadow-2xl w-full" style={{ backgroundColor: 'rgb(19,38,151)' }}>
      <div className="flex items-center gap-20">
        <NavLink className="flex justify-center items-center h-20 w-2\]" to="/dashboard/">
          <img src={logoImage} alt="EasyDayta Logo" className="w-32 h-32" />
        </NavLink>
        <button onClick={toggleNavbar} className="text-gray-300 focus:outline-none">
          <FontAwesomeIcon icon={faBars} className="h-5 w-5 mt-2" />
        </button>
      </div>
      <button onClick={() => {/* handle logout */ }} className="text-sm text-gray-300 px-2 py-1 rounded hover:bg-gray-700 flex items-center">
        <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5 mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
