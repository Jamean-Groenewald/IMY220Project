import React from 'react';

class playlistPreview extends React.Component 
{
  render() 
  {
    const { name, addedBy, genre, category, hashtag, description } = this.props.playlist;
    
    return (
      <div>
        <h4>{name}</h4>
        <p>Added by: {addedBy}</p>
        <p>Genre: {genre}</p>
        <p>Category: {category}</p>
        <p>Hashtag: {hashtag}</p>
        <p>Description: {description}</p>
      </div>
    );
  }
}

export default playlistPreview;
