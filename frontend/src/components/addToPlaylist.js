import React from 'react';

class addToPlaylist extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      playlistId: '',
      songId: ''
    };
  }

  handleInputChange = (event) => 
  {
    event.preventDefault();
    
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() 
  {
    return (
      <form className="bg-gray-800 p-4 rounded shadow-md">

        <h2 className="text-white text-lg mb-4">Add to Playlist</h2>
        
        <select name="playlistId" value={this.state.playlistId} onChange={this.handleInputChange} className="w-full p-2 mb-4 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" >
          <option value="">Select Playlist</option>
          <option value="1">Playlist 1</option>
          <option value="2">Playlist 2</option>
        </select>

        <select name="songId" value={this.state.songId} onChange={this.handleInputChange} className="w-full p-2 mb-4 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" >
          <option value="">Select Song</option>
          <option value="1">Song A</option>
          <option value="2">Song B</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" >Add to Playlist</button>

      </form>
    );
  }
}

export default addToPlaylist;
