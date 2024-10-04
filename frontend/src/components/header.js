import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component 
{
  render() 
  {
    const playlistID = 123;
    const profileID = 456;

    return (
      <nav className="bg-gray-800 py-4">

        <ul className="flex justify-center space-x-6">

          <li>
            <Link to="/" className="text-white hover:text-blue-400 transition duration-200">SplashPage</Link>
          </li>

          <li>
            <Link to="/home" className="text-white hover:text-blue-400 transition duration-200">Home</Link>
          </li>

          <li>
            <Link to={`/profile/${profileID}`} className="text-white hover:text-blue-400 transition duration-200">Profile</Link>
          </li>
          
          <li>
            <Link to={`/playlist/${playlistID}`} className="text-white hover:text-blue-400 transition duration-200">Playlist</Link>
          </li>
        </ul>

      </nav>
    );
  }
}

export default header;
