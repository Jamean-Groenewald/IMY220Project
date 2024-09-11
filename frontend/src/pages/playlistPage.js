import React from 'react';
import Playlist from '../components/playlist';
import AddSong from '../components/addSong';
import AddToPlaylist from '../components/addToPlaylist';
import Comment from '../components/comment';
import AddComment from '../components/addComment';
import Song from '../components/song';

class playlistPage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      playlist: {
        name: 'Chill Vibes',
        addedBy: 'User123',
        genre: 'Pop',
        description: 'Relaxing tunes',
        songs: [
          { title: 'Song A', artist: 'Artist 1', dateAdded: '2023-09-01', link: '#' },
          { title: 'Song B', artist: 'Artist 2', dateAdded: '2023-08-15', link: '#' }
        ],
        comments: [
          { username: 'User1', text: 'Great playlist!' },
          { username: 'User2', text: 'Love these songs!' }
        ]
      }
    };
  }

  render() 
  {
    const { name, addedBy, genre, description, songs, comments } = this.state.playlist;
    
    return (
      <div>
        <h3>{name}</h3>
        <p>Added by: {addedBy}</p>
        <p>Genre: {genre}</p>
        <p>{description}</p>
        <h4>Songs</h4>

        {songs.map((song, index) => (
          <Song key={index} song={song} />
        ))}

        <AddSong />
        <AddToPlaylist />

        <h4>Comments</h4>

        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}

        <AddComment />

      </div>
    );
  }
}

export default playlistPage;
