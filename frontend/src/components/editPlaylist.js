import React from 'react';
import Song from './song';
import AddSong from './addSong';

class editPlaylist extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      name: props.playlist.name || '',
      genre: props.playlist.genre || '',
      description: props.playlist.description || '',
      hashtag: props.playlist.hashtag || '',
      songs: props.playlist.songs || []
    };
  }

  handleInputChange = (event) => 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSongChange = (index, updatedSong) => 
  {
    const updatedSongs = [...this.state.songs];
    updatedSongs[index] = updatedSong;
    this.setState({ songs: updatedSongs });
  };

  handleAddSong = (newSong) => 
  {
    this.setState({ songs: [...this.state.songs, newSong] });
  };

  handleRemoveSong = (index) => 
  {
    const updatedSongs = [...this.state.songs];
    updatedSongs.splice(index, 1);
    this.setState({ songs: updatedSongs });
  };

  handleSubmit = (event) => 
  {
    event.preventDefault();

    const updatedPlaylist = {
      name: this.state.name,
      genre: this.state.genre,
      description: this.state.description,
      hashtag: this.state.hashtag,
      songs: this.state.songs
    };

    console.log('Updated Playlist:', updatedPlaylist);
  };

  render() 
  {
    const { name, genre, description, hashtag, songs } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        
        <h3 className="text-xl text-white mb-4">Edit Playlist</h3>
        
        <input type="text" name="name" placeholder="Playlist Name" value={name} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <input type="text" name="genre" placeholder="Genre" value={genre} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <textarea name="description" placeholder="Description" value={description} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <input type="text" name="hashtag" placeholder="Hashtag" value={hashtag} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <h4 className="text-lg text-white mb-2">Songs</h4>

        {songs.map((song, index) => (
          <div key={index}  className="mb-4">
            <Song song={song} />
            <button type="button" onClick={() => this.handleRemoveSong(index)} className="mt-2 text-red-500 hover:text-red-700" >Remove Song</button>
          </div>
        ))}

        {/* <AddSong addSong={this.handleAddSong} /> */}

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Changes</button>

      </form>
    );
  }
}

export default editPlaylist;
