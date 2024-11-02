import React from 'react';
import ProfilePreview from './profilePreview';

class followerFollowing extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = {
      profiles: [],
      loading: true,
    };
  }

  fetchProfileData = async (userID) => 
  {
    try 
    {
      //console.log(`Fetching profile for user ID: ${userID}`); //debugging

      const response = await fetch(`/api/users/${userID}`);
      
      if(response.ok) 
      {
        const user = await response.json();

        //console.log(`Fetched data for user ID ${userID}:`, user); //debugging

        return {
          username: user.username,
          bio: user.bio,
          playlists: user.playlists || [],
          followers: user.followers || [],
          following: user.following || []
        };

      } 
      else 
      {
        console.error("User not found");
        return null;
      }
    } 
    catch(error) 
    {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  async componentDidMount() 
  {
    const { profiles } = this.props;

    //console.log("Initial user IDs:", profiles); //debugging

    const fetchedProfiles = [];

    for(const userId of profiles) 
    {
      const profileData = await this.fetchProfileData(userId);

      if (profileData) 
      {
        // this.setState((prevState) => ({
        //   profiles: [...prevState.profiles, profileData],
        // }));
        fetchedProfiles.push(profileData);

      }
    }

    //this.setState({ loading: false });
    this.setState({ profiles: fetchedProfiles, loading: false });

  }
  render() 
  {
    //const { title, profiles } = this.props;

    const { title } = this.props;
    const { profiles, loading } = this.state;

    //console.log("Rendering profiles in FollowerFollowing:", profiles);  //debugging

    if(loading) 
    {
      return <div>Loading...</div>;
    }

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
