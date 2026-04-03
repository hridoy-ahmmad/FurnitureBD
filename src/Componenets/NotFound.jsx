import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-5">

            {/* 404 Text */}
            <h1 className="text-7xl font-extrabold text-yellow-900">404</h1>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 text-center max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            {/* Button */}
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-yellow-900 text-white rounded-xl hover:bg-yellow-800 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;