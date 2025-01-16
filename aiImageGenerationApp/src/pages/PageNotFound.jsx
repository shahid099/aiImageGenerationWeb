import React from 'react';
import { Link } from 'react-router-dom'; // For navigation back to the home page

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
