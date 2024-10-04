import React from 'react';

class createPlaylist extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      name: '',
      genre: '',
      category: '',
      hashtag: '',
      description: ''
    };
  }

  handleInputChange = (event) => 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => 
  {
    event.preventDefault();

    //console.log("Playlist created:", this.state);
  };

  render() 
  {
    return (
      <form onSubmit={this.handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        
        <input type="text" name="name" placeholder="Playlist Name" value={this.state.name} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <input type="text" name="hashtag" placeholder="Hashtag" value={this.state.hashtag} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <textarea name="description"placeholder="Description"value={this.state.description}onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700" >Create Playlist</button>

      </form>
    );
  }
}

export default createPlaylist;
