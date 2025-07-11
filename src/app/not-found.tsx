import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 text-center mb-6 max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
