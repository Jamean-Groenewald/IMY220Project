import React from 'react';

class editProfile extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      username: props.username || '',
      bio: props.bio || ''
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
        
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={this.state.username} 
          onChange={this.handleInputChange} 
        />

        <textarea 
          name="bio" 
          placeholder="Bio" 
          value={this.state.bio} 
          onChange={this.handleInputChange}
        />

        <button type="submit">Save Changes</button>
        
      </form>
    );
  }
}

export default editProfile;
