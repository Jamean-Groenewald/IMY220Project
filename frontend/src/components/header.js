import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component 
{
  render() 
  {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/playlists">Playlists</Link></li>
        </ul>
      </nav>
    );
  }
}

export default header;
