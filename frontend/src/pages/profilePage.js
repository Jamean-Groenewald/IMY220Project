import React from 'react';
import EditProfile from '../components/editProfile';
import PlaylistPreview from '../components/playlistPreview';
import FollowerFollowing from '../components/followerFollowing';
import CreatePlaylist from '../components/createPlaylist';
import { useParams } from 'react-router-dom';
import Profile from '../components/profile';
import Header from '../components/header';

class ProfilePage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      // username: 'User123',
      // bio: 'Music lover',
      // playlists: [
      //   { name: 'Chill Vibes', addedBy: 'User123', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
      //   { name: 'Workout Tunes', addedBy: 'User123', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
      // ],
      // followers: [
      //   { username: 'Follower1', bio: 'Fan of jazz' },
      //   { username: 'Follower2', bio: 'Loves classical music' }
      // ],
      // following: [
      //   { username: 'Following1', bio: 'Rock and roll enthusiast' },
      //   { username: 'Following2', bio: 'Hip-hop fan' }
      // ],

      username: null,
      bio: null,
      playlists: [],
      followers: [],
      following: [],
      
      editing: false
    };
  }

  toggleEdit = () => 
  {
    this.setState({ editing: !this.state.editing });
  };

  addPlaylist = (newPlaylist) => 
  {
    this.setState({ playlists: [...this.state.playlists, newPlaylist] });
  };

  deleteProfile = async () => 
  {
    const { id } = this.props.params; 

    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    });

    if(response.ok) 
    {
      alert('Profile deleted successfully');
    } 
    else 
    {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  };
  
  editProfile = async (updatedData) => 
  {
    const { id } = this.props.params;
  
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
  
    if(response.ok) 
    {
      const result = await response.json();
      alert(result.message);

      this.setState({ 
        username: updatedData.username,
        bio: updatedData.bio,
        editing: false 
      });

    } else 
    {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  };

  render() 
  {
    const { username, bio, playlists, editing, followers, following } = this.state;

    const { id } = this.props.params;

    let content;

    if (editing) 
    {
      content = (
        <div>
          <EditProfile username={username} bio={bio} />
          <button onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    } 
    else 
    {
      content = (
        <div>
          {/* <h3>{username}</h3>
          <p>{bio}</p>
          <button onClick={this.toggleEdit}>Edit Profile</button>

          <h4>Your Playlists</h4>
          {playlists.map((playlist, index) => (
            <PlaylistPreview key={index} playlist={playlist} />
          ))} */}

          <Header />
          
          <button onClick={this.toggleEdit}>Edit Profile</button>

          <button onClick={this.deleteProfile}>Delete Profile</button>

          <Profile username={username} bio = {bio} playlists = {playlists} />
          
          <h4>Create a New Playlist</h4>
          <CreatePlaylist addPlaylist={this.addPlaylist} />

          <h4>Followers</h4>
          <FollowerFollowing profiles={followers} />

          <h4>Following</h4>
          <FollowerFollowing profiles={following} />
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

export default function ProfilePageParams()//profilePage;
{
  const params = useParams();

  return <ProfilePage params={params} />;
}
