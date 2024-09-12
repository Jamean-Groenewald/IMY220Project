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
      username: 'User123',
      bio: 'Music lover',
      playlists: [
        { name: 'Chill Vibes', addedBy: 'User123', genre: 'Pop', category: 'Chill', hashtag: '#vibes', description: 'Relaxing tunes' },
        { name: 'Workout Tunes', addedBy: 'User123', genre: 'Rock', category: 'Workout', hashtag: '#fitness', description: 'High-energy tracks' }
      ],
      followers: [
        { username: 'Follower1', bio: 'Fan of jazz' },
        { username: 'Follower2', bio: 'Loves classical music' }
      ],
      following: [
        { username: 'Following1', bio: 'Rock and roll enthusiast' },
        { username: 'Following2', bio: 'Hip-hop fan' }
      ],
      
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
