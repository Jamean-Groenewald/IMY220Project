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

      username: '',
      bio: '',
      playlists: [],
      followers: [],
      following: [],
      
      editing: false
    };
  }

  componentDidMount()
  {
    const { userID } = this.props;

    //console.log("Fetched userID:", userID);

    this.fetchProfileData(userID);
  }

  fetchProfileData = async (userID) => 
  {
    try 
    {
      //console.log("Fetching data for userID:", userID); //debugging

      const response = await fetch(`/api/users/${userID}`);
      
      if (response.ok) 
      {
        const user = await response.json();
        
        //console.log("Fetched user data:", user);  //debugging

        //console.log(user.username);

        this.setState({ 
          username: user.username,
          bio: user.bio,
          //playlists: user.playlists || [],
          followers: user.followers || [],
          following: user.following || []
        });

        //console.log("user.playlists: " + user.playlists); //debugging

        this.fetchPlaylists(user.playlists || []);
      } 
      else 
      {
        console.error("User not found");
      }
    } 
    catch (error) 
    {
      console.error("Error fetching user data:", error);
    }
  };

  fetchPlaylists = async (playlistIDs) => 
  {
    for(const playlistID of playlistIDs) 
    {
      try 
      {
        const response = await fetch(`/api/playlists/${playlistID}`);
        
        if(response.ok) 
        {
          const playlist = await response.json();

          //console.log("playlists in fetch: " + playlist); //debugging

          // Update playlists array in the state
          this.setState((prevState) => ({
            playlists: [...prevState.playlists, playlist]
          }));
        } 
        else 
        {
          console.error(`Playlist not found: ${playlistID}`);
        }
      } 
      catch(error) 
      {
        console.error(`Error fetching playlist ${playlistID}:`, error);
      }
    }
  };

  toggleEdit = () => 
  {
    this.setState({ editing: !this.state.editing });
  };

  addPlaylist = (newPlaylist) => 
  {
    this.setState({ playlists: [...this.state.playlists, newPlaylist] });
  };

  deleteProfile = async (userID) => 
  {
    //const { userID } = this.props.params; 

    const response = await fetch(`/api/users/${userID}`, {
      method: 'DELETE',
    });

    if(response.ok) 
    {
      alert('Profile deleted successfully');

      window.location.href = '/';
    } 
    else 
    {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  };
  
  handleSave = (updatedData) => 
  {
    this.editProfile(updatedData);
    this.toggleEdit();
  };

  editProfile = async (updatedData) => 
  {
    const { userID } = this.props;

    //const { id } = this.props.params;
  
    // console.log("Updating profile for userID:", userID); //debugging
    // console.log("Updated Data:", updatedData); //debugging

    const response = await fetch(`/api/users/${userID}`, {
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

    } 
    else 
    {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  };

  render() 
  {
    const { username, bio, playlists, editing, followers, following } = this.state;

    //console.log("playlists by render: " + playlists); //debugging
    // console.log("Followers in page:", followers);  //debugging
    // console.log("Following in page:", following);  //debugging

    //const { id } = this.props.params;

    let content;

    if (editing) 
    {
      content = (
        <div className="bg-gray-800 p-6 rounded-lg">
          <EditProfile username={username} bio={bio} onSave={this.handleSave} />
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600" onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    } 
    else 
    {
      content = (
        <div className="min-h-screen bg-gray-900 text-white">
          {/* <h3>{username}</h3>
          <p>{bio}</p>
          <button onClick={this.toggleEdit}>Edit Profile</button>

          <h4>Your Playlists</h4>
          {playlists.map((playlist, index) => (
            <PlaylistPreview key={index} playlist={playlist} />
          ))} */}

          <Header />
          
          <div className="container mx-auto p-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4" onClick={this.toggleEdit}>Edit Profile</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-4 ml-4" onClick={() => this.deleteProfile(this.props.userID)}>Delete Profile</button>

            {playlists.length>0 && (
              <>
                <Profile username={username} bio={bio} playlists={playlists} />
              </>
            )}

            <h4 className="text-lg font-semibold mt-6">Create a New Playlist</h4>
            <CreatePlaylist addPlaylist={this.addPlaylist} ownerID={this.props.userID} />

            {followers.length > 0 && (
              <>
                <h4 className="text-lg font-semibold mt-6">Followers</h4>
                <FollowerFollowing profiles={followers} />
              </>
            )}

            {following.length > 0 && (
              <>
                <h4 className="text-lg font-semibold mt-6">Following</h4>
                <FollowerFollowing profiles={following} />
              </>
            )}

            {/* <h4 className="text-lg font-semibold mt-6">Followers</h4>
            <FollowerFollowing profiles={followers} />

            <h4 className="text-lg font-semibold mt-6">Following</h4>
            <FollowerFollowing profiles={following} /> */}
          </div>
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

export default function ProfilePageParams()//profilePage;
{
  // const params = useParams();

  // return <ProfilePage params={params} />;

  const { userID } = useParams();

  return <ProfilePage userID = {userID} />
}
