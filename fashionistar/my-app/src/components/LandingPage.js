import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const LandingPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  const handleSignupClick = () => {
    if (isSignup) {
      if (formData.username && formData.email && formData.password && formData.phoneNumber) {
        // Submit the form
        const form = document.getElementById('signup-form');
        form.requestSubmit();
      } else {
        alert('Please fill in all fields');
      }
    } else {
      setIsSignup(true);
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 text-center">
        <FaStar className="text-yellow-500 text-3xl" /> {/* Add an icon */}
        <h1 className="text-3xl font-bold">Fashionista</h1>
        <FaStar className="text-yellow-500 text-3xl" /> {/* Add another icon */}
      </header>
      <main className="flex justify-center items-center h-full">
        <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isSignup ? 'Sign Up' : 'Login'}
          </h2>
          <form id="signup-form">
            {isSignup && (
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="block w-full p-2 mb-2 border border-gray-400"
                />
              </div>
            )}
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full p-2 mb-2 border border-gray-400"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full p-2 mb-2 border border-gray-400"
              />
            </div>
            {isSignup && (
              <div>
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full p-2 mb-2 border border-gray-400"
                />
              </div>
            )}
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 All Rights Reserved
      </footer>
    </div>
  );
};

export default LandingPage;