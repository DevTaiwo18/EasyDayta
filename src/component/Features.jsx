import React from 'react';
import "../../src/App.css";
import { Link } from 'react-router-dom';

const FeatureCard = ({ image, title, description }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md pt-16 pb-16 px-6 text-center w-full md:w-64 overflow-hidden transition duration-300 transform hover:-translate-y-2">
            <img src={image} alt={title} className="mx-auto mb-4 w-full" />
            <h3 className="font-bold text-lg mb-4 text-blue-500">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>


    );
};

const Features = () => {
    const featureData = [
        {
            image: '/src/assets/data.jpg',
            title: 'Buy cheap Data Online',
            description: 'Buy cheap mobile data at an affordable rate.',
        },
        {
            image: '/src/assets/airtime.jpg',
            title: 'Buy Airtime',
            description: 'Get up to 5% discount instantly when you purchase airtime.',
        },
        {
            image: '/src/assets/bulksms.jpg',
            title: 'Send Bulk SMS',
            description: 'Send BulkSMS to any DND number. Fast and instant delivery.',
        },
        {
            image: '/src/assets/paybills.jpg',
            title: 'Cable TV,  Subscriptions',
            description: 'Pay Cable TV bills at home and make commission.',
        }

    ];

    return (
        <div className="py-16 md:px-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="col text-4xl font-lg text-center mb-2">Virtual Top Up</h2>
                <p className="col text-md font-medium text-center mb-16">Electronic vending of Airtime and data</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0">
                    {featureData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link to="/signin">
                        <button className="text-gray-600 hover:bg-gray-200 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center">
                            Other great features await you - login to view.
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Features;
