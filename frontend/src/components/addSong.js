import React from 'react';

class addSong extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      title: '',
      artist: ''
    };
  }

  handleInputChange = (event) => 
  {    
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => 
  {
    event.preventDefault();

    const { title, artist } = this.state;
    const { playlistID, addSong } = this.props;

    const newSong = { title, artist };

    try 
    {
      const response = await fetch(`/api/songs/${playlistID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSong),
      });

      if (response.ok) 
      {
        const createdSong = await response.json();

        addSong(createdSong);

        this.setState({ title: '', artist: '' });
      } 
      else 
      {
        const error = await response.json();
        alert(`Error adding song: ${error.message}`);
      }
    } 
    catch (error) 
    {
      console.error("Error adding song:", error);
    }
  };

  render() 
  {
    return (
      <form onSubmit={this.handleSubmit} className="bg-gray-800 p-4 rounded shadow-md">
        
        <input className="w-full p-2 mb-4 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="title" placeholder="Song Title" value={this.state.title} onChange={this.handleInputChange} />

        <input className="w-full p-2 mb-4 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="artist" placeholder="Artist" value={this.state.artist} onChange={this.handleInputChange} />

        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" >Add Song</button>
        
      </form>
    );
  }
}

export default addSong;
