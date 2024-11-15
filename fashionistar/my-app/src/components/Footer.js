// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-4">
      <div className="container mx-auto p-4 flex justify-between">
        <div className="flex items-center">
          <span className="text-lg font-bold">&copy; 2024 Company Name</span>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <a
              href="/terms"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <span className="text-lg">Follow us:</span>
          <div className="flex space-x-4 ml-4">
            <a
              href="https://facebook.com/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="(link unavailable)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://instagram.com/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              href="(link unavailable)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-800 transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;