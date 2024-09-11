import React from 'react';

class profilePreview extends React.Component 
{
  render()
  {
    const { username, bio } = this.props.profile;
    
    return (
      <div>
        <h4>{username}</h4>
        <p>{bio}</p>
      </div>
    );
  }
}

export default profilePreview;
