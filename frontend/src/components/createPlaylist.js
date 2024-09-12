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
      <form onSubmit={this.handleSubmit}>
        
        <input type="text" name="name" placeholder="Playlist Name" value={this.state.name} onChange={this.handleInputChange} />

        <input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleInputChange} />

        <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleInputChange} />

        <input type="text" name="hashtag" placeholder="Hashtag" value={this.state.hashtag} onChange={this.handleInputChange} />

        <textarea name="description"placeholder="Description"value={this.state.description}onChange={this.handleInputChange} />

        <button type="submit">Create Playlist</button>

      </form>
    );
  }
}

export default createPlaylist;
