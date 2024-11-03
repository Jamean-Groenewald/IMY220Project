import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component 
{
  render() 
  {
     //const playlistID = 123;
     const profileID = parseInt(localStorage.getItem('userId'));

     //console.log(profileID);
     
    return (
      <nav className="bg-gray-800 py-4">

        <div className="text-white text-3xl font-bold ml-4">SoundSphere</div>
        
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/home" className="text-white hover:text-blue-400 transition duration-200">Home</Link>
          </li>

          <li>
            <Link to={`/profile/${profileID}`} className="text-white hover:text-blue-400 transition duration-200">Profile</Link>
          </li>
          
          <li>
            <Link to={`/playlists/:playlistID`} className="text-white hover:text-blue-400 transition duration-200">Playlist</Link>
          </li>

          <li>
            <Link to="/" className="text-white hover:text-blue-400 transition duration-200">Logout</Link>
          </li>
        </ul>

      </nav>
    );
  }
}

export default header;
