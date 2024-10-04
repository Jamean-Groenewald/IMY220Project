import React from 'react';

class addComment extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      username: '',
      commentText: ''
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

        <input type="text" name="username" placeholder="Your name" value={this.state.username} onChange={this.handleInputChange} className="w-full p-2 mb-2 text-gray-900 rounded focus:outline-none focus:ring focus:ring-blue-500" />

        <textarea name="commentText" placeholder="Add a comment" value={this.state.commentText} onChange={this.handleInputChange} className="w-full p-2 mb-2 text-gray-900 rounded focus:outline-none focus:ring focus:ring-blue-500" />

        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none" >Add Comment</button>

      </form>
    );
  }
}

export default addComment;
