import React from 'react';

class playlistPreview extends React.Component 
{
  render() 
  {
    const { name, addedBy, genre, category, hashtag, description } = this.props.playlist;
    
    return (
      <div className="bg-gray-700 p-4 rounded-lg shadow-md text-white mb-4">
        <h4 className="text-xl font-bold">{name}</h4>
        <p>Added by: <span className="font-semibold">{addedBy}</span></p>
        <p>Genre: <span className="font-semibold">{genre}</span></p>
        <p>Category: <span className="font-semibold">{category}</span></p>
        <p>Hashtag: <span className="font-semibold">{hashtag}</span></p>
        <p>Description: <span className="font-semibold">{description}</span></p>
      </div>
    );
  }
}

export default playlistPreview;
