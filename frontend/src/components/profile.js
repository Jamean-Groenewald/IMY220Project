import React from 'react';
import PlaylistPreview from './playlistPreview';

class profile extends React.Component 
{
  constructor(props) 
  {
    super(props);

    // this.state = 
    // {
    //   username: 'User123',
    //   bio: 'Music lover',
    //   playlists: [
    //     { name: 'Chill Vibes', addedBy: 'User123', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
    //     { name: 'Workout Tunes', addedBy: 'User123', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
    //   ]
    // };
  }

  render() 
  {
    const {username, bio, playlists} = this.props;

    return (
      <div>
        {/* <h3>{this.state.username}</h3>
        <p>{this.state.bio}</p>
        <h4>Your Playlists</h4>
        
        {this.state.playlists.map((playlist, index) => (
          <PlaylistPreview key={index} playlist={playlist} />
        ))} */}

        <h3 className="text-2xl font-bold">{username}</h3>
        
        <p className="mt-2 text-gray-300">{bio}</p>
        
        <h4 className="mt-4 text-xl font-semibold">Your Playlists</h4>
        
        {playlists.length > 0 ? (
          playlists.map((playlist, index) => (
            <PlaylistPreview key={index} playlist={playlist} />
          ))
        ) : (
          <p className="mt-2 text-gray-400">No playlists available.</p>
        )}
        
      </div>
    );
  }
}

export default profile;
