import React from 'react';
import ProfilePreview from './profilePreview';

class followerFollowing extends React.Component 
{
  render() 
  {
    const { title, profiles } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        {profiles.map((profile, index) => (
          <ProfilePreview key={index} profile={profile} />
        ))}
      </div>
    );
  }
}

export default followerFollowing;
