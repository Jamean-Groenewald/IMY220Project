import React from 'react';

class comment extends React.Component 
{
  render() 
  {
    const { username, text } = this.props.comment;
    
    return (
      <div>
        <p><strong>{username}</strong>: {text}</p>
      </div>
    );
    
  }
}

export default comment;
