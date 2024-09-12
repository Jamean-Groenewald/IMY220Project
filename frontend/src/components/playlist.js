import React from 'react';
import Song from './song';
import AddSong from './addSong';

class playlist extends React.Component 
{
  constructor(props) 
  {
    super(props);

    // this.state = 
    // {
    //   playlist: {
    //     name: 'Chill Vibes',
    //     addedBy: 'User123',
    //     genre: 'Pop',
    //     songs: [
    //       { title: 'Song A', artist: 'Artist 1', dateAdded: '2023-09-01', link: '#' },
    //       { title: 'Song B', artist: 'Artist 2', dateAdded: '2023-08-15', link: '#' }
    //     ]
    //   }
    // };
  }

  render() 
  {
    const { name, addedBy, genre, description, hashtag, songs } = this.props.playlist; //this.state.playlist;
    
    return (
      <div>
        <h3>{name}</h3>
        <p>Added by: {addedBy}</p>
        <p>Genre: {genre}</p>
        <p>{description}</p>
        <p>{hashtag}</p>
        <h4>Songs</h4>
        
        {songs.map((song, index) => (
          <Song key={index} song={song} />
        ))}

      </div>
    );
  }
}

export default playlist;
