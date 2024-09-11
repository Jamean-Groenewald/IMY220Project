import React from 'react';

class song extends React.Component 
{
  render() 
  {
    const { title, artist, dateAdded, link } = this.props.song;
    
    return (
      <div>
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
        <p>Date Added: {dateAdded}</p>
        <a href={link}>Listen</a>
      </div>
    );
  }
}

export default song;
