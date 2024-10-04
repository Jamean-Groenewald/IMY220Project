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
      <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">

        <h3 className="text-2xl font-bold">{name}</h3>

        <p className="text-lg">Added by: <span className="font-semibold">{addedBy}</span></p>

        <p className="text-lg">Genre: <span className="font-semibold">{genre}</span></p>

        <p className="text-lg">{description}</p>

        <p className="text-lg">Hashtag: <span className="font-semibold">{hashtag}</span></p>

        <h4 className="text-xl font-semibold mt-4">Songs</h4>
        
        {songs.map((song, index) => (
          <Song key={index} song={song} />
        ))}
        
      </div>
    );
  }
}

export default playlist;
