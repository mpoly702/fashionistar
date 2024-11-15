import React from 'react';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  return (
    <div className="flex justify-between items-center py-4 bg-gray-100 border-b-2 border-orange-500">
      <ul className="flex ml-4">
        <li className="mr-6">
          <a
            href="/my-blogs"
            className="text-gray-600 hover:text-orange-500 transition duration-300"
          >
            My Blogs
          </a>
        </li>
        <li className="mr-6">
          <a
            href="/bloglists"
            className="text-gray-600 hover:text-orange-500 transition duration-300"
          >
            Bloglists
          </a>
        </li>
      </ul>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      <Link to="/create-post" className="text-white text-sm">
          Create Post
      </Link>
      </button>
    </div>
  );
};

export default ProfileHeader;