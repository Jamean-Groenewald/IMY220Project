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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() 
  {
    return (
      <form>
        
        <select name="playlistId" value={this.state.playlistId} onChange={this.handleInputChange}>
          <option value="">Select Playlist</option>
          <option value="1">Playlist 1</option>
          <option value="2">Playlist 2</option>
        </select>

        <select name="songId" value={this.state.songId} onChange={this.handleInputChange}>
          <option value="">Select Song</option>
          <option value="1">Song A</option>
          <option value="2">Song B</option>
        </select>

        <button type="submit">Add to Playlist</button>

      </form>
    );
  }
}

export default addToPlaylist;
