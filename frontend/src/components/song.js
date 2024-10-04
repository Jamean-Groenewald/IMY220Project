import React from 'react';

class song extends React.Component 
{
  render() 
  {
    const { title, artist, dateAdded, link } = this.props.song;
    
    return (
      <div className="bg-gray-800 p-4 rounded-lg mb-4 text-white shadow-md">
        <h4 className="text-lg font-semibold text-blue-400">{title}</h4>
        <p className="text-sm">Artist: {artist}</p>
        <p className="text-sm">Date Added: {dateAdded}</p>
        <a href={link} className="text-blue-500 hover:text-blue-300 underline" >Listen</a>
      </div>
    );
  }
}

export default song;
