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
    event.preventDefault();
    
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() 
  {
    return (
      <form>
        
        <input type="text" name="title" placeholder="Song Title" value={this.state.title} onChange={this.handleInputChange} />

        <input type="text" name="artist" placeholder="Artist" value={this.state.artist} onChange={this.handleInputChange} />

        <button type="submit">Add Song</button>
        
      </form>
    );
  }
}

export default addSong;
