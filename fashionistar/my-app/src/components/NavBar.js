                                                                                                                                                                                                                                                              // Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="text-lg font-bold">Logo</NavLink>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="/Profile"
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-blue-500' : 'text-white'}`
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-blue-500' : 'text-white'}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-blue-500' : 'text-white'}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;                                                                                                    