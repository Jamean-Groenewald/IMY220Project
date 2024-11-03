import React from 'react';
import Song from './song';
import PlaylistPreview from './playlistPreview';

class feed extends React.Component 
{
  constructor(props) 
  {
    super(props);

    // this.state = 
    // {
      // songs: [
      //   { title: 'Song A', artist: 'Artist 1', dateAdded: '2023-09-01', link: '#' },
      //   { title: 'Song B', artist: 'Artist 2', dateAdded: '2023-08-15', link: '#' }
      // ],

      // playlists: [
      //   { name: 'Playlist 1', addedBy: 'User1', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
      //   { name: 'Playlist 2', addedBy: 'User2', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
      // ]
    //};
  }

  render() 
  {
    // const { allSongs, allPlaylists, searchResults } = this.props;
    const { allSongs, allPlaylists } = this.props;
   
    return (
      
      <div className="p-6 bg-gray-800 text-white">

        <div className="flex justify-between"> {/* to have columns */}

          <div className="w-1/2 pr-4">

            <h3 className="text-xl font-bold mb-4">Song Feed</h3>

            {allSongs.map((song, index) => (
              <Song key={index} song={song} />
            ))}

          </div>

          <div className="w-1/2 pl-4">

            <h3 className="text-xl font-bold mb-4">Playlist Feed</h3>

            {allPlaylists.map((playlist, index) => (
              <PlaylistPreview key={index} playlist={playlist} />
            ))}
            
          </div>
        </div>

        {/* {searchResults.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Search Results</h3>
            {searchResults.map((result, index) => (
              result.hasOwnProperty('name') ? ( 
                <User key={index} user={result} />
              ) : (
                <PlaylistPreview key={index} playlist={result} /> 
              )
            ))}
          </div>
        )} */}
      </div>
    );
  }
}

export default feed;
