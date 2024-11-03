import React from 'react';
import Feed from '../components/feed';
import SearchInput from '../components/searchInput';
import Header from '../components/header';

class homePage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      //searchTerm: '',
      inputError:'',
      //searchResults: [], 
      allSongs: [],    
      allPlaylists: []
    };
  }

  componentDidMount()
  {
    this.fetchAllSongs();
    this.fetchAllPlaylists();
  }

  fetchAllSongs = async () => 
  {
    try 
    {
      const response = await fetch('/api/songs');
      const songs = await response.json();
      this.setState({ allSongs: songs });
    } 
    catch(error) 
    {
      console.error('Error fetching songs:', error);
    }
  };

  fetchAllPlaylists = async () => 
  {
    try 
    {
      const response = await fetch('/api/playlists');
      const playlists = await response.json();
      this.setState({ allPlaylists: playlists });
    } 
    catch(error) 
    {
      console.error('Error fetching playlists:', error);
    }
  };

  // handleSearchUsers = async () => 
  // {
  //   const { searchTerm } = this.state;

  //   if(searchTerm.trim() === '') 
  //   {
  //     this.setState({ inputError: 'Search term cannot be empty' });
  //   } 
  //   else 
  //   {
  //     this.setState({ inputError: '' });

  //     try 
  //     {
  //       const response = await fetch(`/search/users?q=${searchTerm}`);
  //       const users = await response.json();
  //       this.setState({ searchResults: users }); 
  //     } 
  //     catch(error) 
  //     {
  //       console.error('Error fetching user search results:', error);
  //     }
  //   }
  // };

  // handleSearchPlaylists = async () =>
  // {
  //   const { searchTerm } = this.state;

  //   if(searchTerm.trim() === '') 
  //   {
  //     this.setState({ inputError: 'Search term cannot be empty' });
  //   } 
  //   else 
  //   {
  //     this.setState({ inputError: '' });

  //     try 
  //     {
  //       const response = await fetch(`/search/playlists?q=${searchTerm}`);
  //       const playlists = await response.json();
  //       this.setState({ searchResults: playlists }); 
  //     } 
  //     catch(error) 
  //     {
  //       console.error('Error fetching playlist search results:', error);
  //     }
  //   }
  // };

  // fetchSearchResults = async (input, searchType) => 
  // {
  //   try 
  //   {
  //     const response = await fetch(`/api/search/${searchType}?q=${input}`);
      
  //     if (response.ok) 
  //     {
  //       const results = await response.json();
  //       // Handle results as needed (e.g., store them in state)
  //     } 
  //     else 
  //     {
  //       console.error("Search failed:", response.statusText);
  //     }
  //   } 
  //   catch (error) 
  //   {
  //     console.error("Error fetching search results:", error);
  //   }
  // };

  render() 
  {
    //const { searchTerm, inputError, searchResults, allSongs, allPlaylists } = this.state;
    const { allSongs, allPlaylists } = this.state;

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />

        <div className="container mx-auto p-6">
          {/* <SearchInput 
            value={searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />

          {inputError && (
            <p className="text-red-500 text-sm mt-2">{inputError}</p>
          )}

          <div className="flex space-x-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.handleSearchUsers}
            >
              Search Users
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.handleSearchPlaylists}
            >
              Search Playlists
            </button>
          </div> */}

          <Feed
            allSongs={allSongs}        // Pass all songs to Feed
            allPlaylists={allPlaylists} // Pass all playlists to Feed
            //searchResults={searchResults} // Pass searched results (users or playlists)
          />
        </div>
      </div>
    );
  }
}

export default homePage;
