import React from 'react';
import illustration from '../../src/assets/project-img.png';
import "../../src/App.css";

const MobileBankingSection = () => {
  return (
    <div className="container mx-auto py-10 bg-white px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <img src={illustration} alt="Mobile Banking Illustration" className=" md:w-full w-full" />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-base md:text-base font-semibold text-blue-400 mb-1">
            MOBILE BANKING
          </h2>
          <h2 className="h222  mb-1">
            QUICK BUY Business in Nigeria and
          </h2>
          <h2 className="h222 mb-4">
            Data Reselling
          </h2>
          <p className="tes text-gray-600 text-sm md:text-base  mb-6">
            Make money as a cheap data reseller, buy waec scratch card online and resell to earn up to ₦1,000 in profits per sale. Start with little capital and focus on earning while we handle the messy jobs. <br />
            Pay bills, PHED online payment, PHCN, AEDC Abuja online payment and earn commissions or charge clients ₦100 extra.
            Start your own mtn sme website or business like clubkonnect, mobileing.
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBankingSection;
