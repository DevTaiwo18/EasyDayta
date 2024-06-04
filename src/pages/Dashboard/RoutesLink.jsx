import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import VerticalNavbar from './VarticalNavbar';
import Dashboard from './Dashboard';

const RoutesLink = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div className="flex flex-1 overflow-hidden">
        <VerticalNavbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        <div className={`flex-grow overflow-auto ${isNavbarOpen ? 'w-10/12' : 'w-full'}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Other routes go here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RoutesLink;
