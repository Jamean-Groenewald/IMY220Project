import React from 'react';

class comment extends React.Component 
{
  render() 
  {
    const { username, text } = this.props.comment;
    
    return (
      <div className="bg-gray-700 p-4 mb-2 rounded shadow-sm">
        {/* <p>{username} : {text}</p> */}
        <p className="text-white">
          <span className="font-semibold">{username}:</span> {text}
        </p>
      </div>
    );
    
  }
}

export default comment;
