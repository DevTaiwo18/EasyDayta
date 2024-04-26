import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faTv, faFileInvoiceDollar, faPhoneVolume, faSms, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md py-16 px-5 text-center flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-6">
        <FontAwesomeIcon icon={icon} className="text-3xl" />
      </div>
      <h3 className="text-xl font-semibold text-blue-500 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      icon: faWifi,
      title: 'BUY DATA',
      description: 'Start enjoying this very low rates Data plan for your internet browsing databundle..',
    },
    {
      icon: faTv,
      title: 'CABLE SUBSCRIPTION',
      description: 'Instantly Activate Cable subscription with favourable discount compare to others..',
    },
    {
      icon: faFileInvoiceDollar,
      title: 'PAY UTILITY BILLS',
      description: 'Start Enjoyin this very low rates utility bill payment for your electricity.',
    },
    {
      icon: faPhoneVolume,
      title: 'AIRTIME TOP UP',
      description: 'Making an online recharge has become very easy and safe on QUICKBUY.',
    },
    {
      icon: faSms,
      title: 'BULK SMS',
      description: 'Send BulkSMS to any number for as low as just 2.5kobo per unit.',
    },
    {
      icon: faMoneyBillWave,
      title: 'AIRTIME TO CASH',
      description: 'We offer this service at a very good attractive rate please login to get current conversion rate..',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-base md:text-base font-medium text-blue-400 mb-4 text-center md:text-center">SERVICES</h2>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black-500 mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
