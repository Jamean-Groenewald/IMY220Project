import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component 
{
  render() 
  {
    const playlistID = 123;
    const profileID = 456;

    return (
      <nav>
        <ul>
          <li><Link to="/">SplashPage</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to= {`/profile/${profileID}`}>Profile</Link></li>
          <li><Link to= {`/playlist/${playlistID}`}>Playlist</Link></li>
        </ul>
      </nav>
    );
  }
}

export default header;
