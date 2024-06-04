import React from 'react';
import serviceImage from '../../src/assets/about.jpg';
import "../../src/App.css";
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-2 md:p-20">
      <div className="md:w-1/2 w-full p-4 text-center md:text-left">
        <h2 className="text-base md:text-base font-semibold text-blue-400 mb-2 text-center md:text-left">WHY CHOOSE US</h2>
        <h3 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">We Provide Awesome</h3>
        <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">Services</h3>
        <p className="tes text-gray-600 text-sm md:text-base  mb-6">
          We provide our services base values that continues to grow rapidly, offering
          dispensal of services that span various categories including Data
          subscription, cable sub, electric bill, Airtime top up and much more. Our
          range of services are designed to ensure optimum levels of convenience
          and customer satisfaction with the reseller options, other optimum
          services include Our Affordable price guarantee, Automated, Reliability,
          dedicated customer service support and many other premium services.
          As we continue to expand the Platform, our scope of offerings will
          increase in variety, simplicity and convenience, join us today and enjoy
          the increasing benefits...
        </p>

        <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
          <Link to={"/signin"}>
            Get Started
          </Link>
        </button>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <img src={serviceImage} alt="Services" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Aboutus;
