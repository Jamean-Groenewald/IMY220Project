import React from 'react';

class profilePreview extends React.Component 
{
  render()
  {
    const { username, bio } = this.props.profile;
    
    return (
      <div className="bg-gray-700 p-4 rounded-lg shadow-md text-white mb-4">
        <h4 className="text-xl font-semibold">{username}</h4>
        <p className="mt-2 text-gray-300">{bio}</p>
      </div>
    );
  }
}

export default profilePreview;
