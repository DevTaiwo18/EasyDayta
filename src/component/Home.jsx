import React from 'react';
import { Link } from 'react-router-dom';
import "../../src/App.css"

const Home = () => {
    return (
        <div className="custom-bg bg-blue-500 h-dvh flex flex-col justify-center text-white pl-5 md:pl-20">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Welcome To</h1>
            <h1 className="text-2xl sm:text-4xl font-bold mb-8">QUICK BUY</h1>
            <p className="mb-8  font-medium">
                Nigeria's topmost enterprise solution to your telecom needs. <br />
                Airtime, DATA, Cable Subscription (DSTV, GOTV, Startime), etc.
            </p>
            <div className="flex gap-4 mb-12">
                <Link to={"/signin"}>
                    <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-9 rounded-3xl">
                        Login
                    </button>
                </Link>
                <Link to={"/signup"}>
                    <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-9 rounded-3xl">
                        Register
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Home;
