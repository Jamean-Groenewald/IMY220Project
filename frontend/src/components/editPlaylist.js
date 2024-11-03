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
      songs: []
    };
  }

  // formatSongs = (songs) => 
  // {
  //   return songs.map(song => ({
  //     title: song.title || 'Unknown Title',
  //     artist: song.artist || 'Unknown Artist',
  //     dateAdded: song.dateAdded || 'Unknown Date',
  //     link: song.link || '#'
  //   }));
  // };

  componentDidMount() 
  {
    this.fetchSongsData(this.props.playlist.songs);
  }

  componentDidUpdate(prevProps) 
  {
    if(prevProps.playlist !== this.props.playlist) 
    {
      this.setState({
        name: this.props.playlist.name || '',
        genre: this.props.playlist.genre || '',
        description: this.props.playlist.description || '',
        hashtag: this.props.playlist.hashtag || '',
        songs: this.props.playlist.songs || []
      });

      this.fetchSongsData(this.props.playlist.songs);
    }
  }

  fetchSongsData = async (songIDs) => 
  {
    const songs = [];

    for(const songID of songIDs) 
    {
      try 
      {
        const response = await fetch(`/api/songs/${songID}`);
        if(response.ok) 
        {
          const song = await response.json();
          songs.push(song);
        }
      } 
      catch(error) 
      {
        console.error(`Error fetching song ${songID}:`, error);
      }
    }

    this.setState({ songs });
  };

  handleInputChange = (event) => 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRemoveSong = (index) => 
  {
    const updatedSongs = [...this.state.songs];
    updatedSongs.splice(index, 1);
    this.setState({ songs: updatedSongs });
  };

  handleSubmit = async (event) => 
  {
    event.preventDefault();

    const updatedPlaylist = {
      ...this.state,
      playlistID: this.props.playlist.playlistID
    };

    try 
    {
      const response = await fetch(`/api/playlists/${updatedPlaylist.playlistID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPlaylist),
      });

      if(response.ok) 
      {
        const data = await response.json();

        //console.log(data.message);

        this.props.onSave(updatedPlaylist);
      } 
      else 
      {
        const error = await response.json();
        alert(`Error updating playlist: ${error.message}`);
      }
    } 
    catch (error) 
    {
      console.error("Error updating playlist:", error);
    }
  };

  render() 
  {
    const { name, genre, description, hashtag, songs } = this.state;

    //console.log("song:", songs);

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

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Changes</button>

      </form>
    );
  }
}

export default editPlaylist;
