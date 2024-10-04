import React from 'react';
import ProfilePreview from './profilePreview';

class followerFollowing extends React.Component 
{
  render() 
  {
    const { title, profiles } = this.props;

    return (

      <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <div className="flex flex-col">
          {profiles.map((profile, index) => (
            <ProfilePreview key={index} profile={profile} />
          ))}
        </div>
        
      </div>
    );
  }
}

export default followerFollowing;
