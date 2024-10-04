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
    event.preventDefault();
     
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() 
  {
    return (
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
        
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <textarea name="bio" placeholder="Bio" value={this.state.bio} onChange={this.handleInputChange} className="block w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400" />

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700" >Save Changes</button>
        
      </form>
    );
  }
}

export default editProfile;
