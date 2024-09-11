import React from 'react';
import Song from './song';
import PlaylistPreview from './playlistPreview';

class feed extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      songs: [
        { title: 'Song A', artist: 'Artist 1', dateAdded: '2023-09-01', link: '#' },
        { title: 'Song B', artist: 'Artist 2', dateAdded: '2023-08-15', link: '#' }
      ],

      playlists: [
        { name: 'Playlist 1', addedBy: 'User1', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
        { name: 'Playlist 2', addedBy: 'User2', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
      ]
    };
  }

  render() 
  {
    const { songs, playlists } = this.state;
   
    return (
      
      <div>

        <h3>Song Feed</h3>

        {songs.map((song, index) => (
          <Song key={index} song={song} />
        ))}

        <h3>Playlist Feed</h3>
        {playlists.map((playlist, index) => (
          <PlaylistPreview key={index} playlist={playlist} />
        ))}

      </div>
    );
  }
}

export default feed;
