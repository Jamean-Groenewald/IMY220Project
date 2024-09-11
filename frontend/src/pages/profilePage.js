import React from 'react';
import EditProfile from '../components/editProfile';
import PlaylistPreview from '../components/playlistPreview';

class profilePage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      username: 'User123',
      bio: 'Music lover',
      playlists: [
        { name: 'Chill Vibes', addedBy: 'User123', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
        { name: 'Workout Tunes', addedBy: 'User123', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
      ],
      editing: false
    };
  }

  toggleEdit = () => 
  {
    this.setState({ editing: !this.state.editing });
  };

  render() 
  {
    const { username, bio, playlists, editing } = this.state;

    return (

      <div>
        {editing ? (
          <div>
            <EditProfile username={username} bio={bio} />
            <button onClick={this.toggleEdit}>Cancel</button>
          </div>
        ) 
        : (
          <div>
            <h3>{username}</h3>
            <p>{bio}</p>
            <button onClick={this.toggleEdit}>Edit Profile</button>
            <h4>Your Playlists</h4>

            {playlists.map((playlist, index) => (
              <PlaylistPreview key={index} playlist={playlist} />
            ))}
            
          </div>
        )}
      </div>
    );
  }
}

export default profilePage;
