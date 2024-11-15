import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {
  // Define isOpen state and toggleSidebar function
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the isOpen state
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  return (
    <header className="header">
      <div className="relative">
      {/* Hamburger icon */}
      <button onClick={toggleSidebar} className="text-2xl p-2">
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="p-4 text-right text-2xl font-bold"
        >
          &times;
        </button>
        <nav className="flex flex-col items-start p-4">
        <li><Link to="/profile" activeClassName="active" className="nav-link">Profile</Link></li>
          <a href="#about" className="my-2">About</a>
          <a href="#services" className="my-2">Services</a>
          <a href="#contact" className="my-2">Contact</a>
        </nav>
      </div>
    </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" activeClassName="active" className="nav-link">Home</Link></li>
          <li><Link to="/Blog" activeClassName="active" className="nav-link">Blog</Link></li>
          <li><Link to="/News" activeClassName="active" className="nav-link">News</Link></li>
          <li><Link to="/Chat" activeClassName="active" className="nav-link">Chat</Link></li>
          <li><Link to="/Team" activeClassName="active" className="nav-link">Team</Link></li>
        </ul>
      </nav>
      <h1>The Ankara Post</h1>
      <p>Tagline goes here</p>
    </header>
  );
}

export default Header;


