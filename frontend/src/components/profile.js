import React from 'react';
import PlaylistPreview from './playlistPreview';

class profile extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      username: 'User123',
      bio: 'Music lover',
      playlists: [
        { name: 'Chill Vibes', addedBy: 'User123', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
        { name: 'Workout Tunes', addedBy: 'User123', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
      ]
    };
  }

  render() 
  {
    return (
      <div>
        <h3>{this.state.username}</h3>
        <p>{this.state.bio}</p>
        <h4>Your Playlists</h4>
        
        {this.state.playlists.map((playlist, index) => (
          <PlaylistPreview key={index} playlist={playlist} />
        ))}
      </div>
    );
  }
}

export default profile;
