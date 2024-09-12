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
      <form>

        <input type="text" name="username" placeholder="Your name" value={this.state.username} onChange={this.handleInputChange} />

        <textarea name="commentText" placeholder="Add a comment" value={this.state.commentText} onChange={this.handleInputChange} />

        <button type="submit">Add Comment</button>

      </form>
    );
  }
}

export default addComment;
