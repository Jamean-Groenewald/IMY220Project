import React from 'react';
import Playlist from '../components/playlist';
import AddSong from '../components/addSong';
import AddToPlaylist from '../components/addToPlaylist';
import Comment from '../components/comment';
import AddComment from '../components/addComment';
import Song from '../components/song';
import { useParams } from 'react-router-dom';
//import { withRouter } from 'react-router-dom'; // Import withRouter
import Header from '../components/header';
import EditPlaylist from '../components/editPlaylist';

class PlaylistPage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    //const { id } = this.props.match.params; // Use this.props.match.params for route params

    this.state = 
    {
      // playlist: {
      //   name: 'Chill Vibes',
      //   addedBy: 'User123',
      //   genre: 'Pop',
      //   description: 'Relaxing tunes',

      //   hashtag: '#chill #vibey',

      //   songs: [
      //     { title: 'Song A', artist: 'Artist 1', dateAdded: '2023-09-01', link: '#' },
      //     { title: 'Song B', artist: 'Artist 2', dateAdded: '2023-08-15', link: '#' }
      //   ],
      //   comments: [
      //     { username: 'User1', text: 'Great playlist!' },
      //     { username: 'User2', text: 'Love these songs!' }
      //   ]
        // },

      playlist: null,
      songs: [], 
      comments: [],
      editing: false

    };
  }

  componentDidMount() 
  {
    const { playlistID } = this.props;
    this.fetchPlaylistData(playlistID);
  }

  fetchPlaylistData = async (playlistID) => 
  {
    try 
    {
      const response = await fetch(`/api/playlists/${playlistID}`);

      if(response.ok) 
      {
        const playlist = await response.json();
        this.setState({ playlist, comments: playlist.comments || [] });
        
        this.fetchSongsData(playlist.songs);
      } 
      else 
      {
        console.error(`Playlist not found: ${playlistID}`);
      }
    } 
    catch(error) 
    {
      console.error("Error fetching playlist data:", error);
    }
  };

  fetchSongsData = async (songIDs) => 
  {
    const songs = [];

    for(const songID of songIDs) 
    {
      try 
      {
        const response = await fetch(`/api/songs/${songID}`);

        if(response.ok) 
        {
          const song = await response.json();
          songs.push(song);
        }
      } 
      catch(error) 
      {
        console.error(`Error fetching song ${songID}:`, error);
      }
    }

    this.setState({ songs });
  };

  handleDeletePlaylist = async () => 
  {
      const { playlist } = this.state;

      if(!playlist) return;
  
      const playlistID = playlist.playlistID;
  
      try 
      {
          const response = await fetch(`/api/playlists/${playlistID}`, {
              method: 'DELETE',
          });
  
          if (response.ok) 
          {
              window.location.href = `/home`;
          } 
          else 
          {
              console.error(`Error deleting playlist: ${response.statusText}`);
          }
      } 
      catch (error) 
      {
          console.error("Error deleting playlist:", error);
      }
  };
    

  toggleEdit = () => 
  {
    this.setState({ editing: !this.state.editing });
  };

  handleUpdatePlaylist = (updatedPlaylist) => 
  {
    this.setState({
      playlist: updatedPlaylist,
      editing: false
    });
  };

  addSong = (newSong) => 
  {
      this.setState({ songs: [...this.state.songs, newSong] });
  };

  render() 
  {
    const { playlist, songs, comments, editing } = this.state;

    let content;

    if (!playlist) 
    {
      return <div>Loading...</div>;
    }

    if (editing) 
      {
        content = (
          <div>
            <EditPlaylist playlist={playlist} onSave={this.handleUpdatePlaylist} />
            <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600" onClick={this.toggleEdit}>Cancel</button>
          </div>
        );
      } 
      else 
      {
        content = (
          <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            
            <div className="container mx-auto p-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4" onClick={this.toggleEdit}>Edit Playlist</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-4" onClick={this.handleDeletePlaylist}>Delete Playlist</button>

              <Playlist playlist={playlist} />
  
              <h4 className="text-lg font-semibold mt-6">Songs</h4>
              
              {songs && songs.length > 0 ? (
                songs.map((song, index) => (
                  <Song key={index} song={song} />
                ))
              ) : (
                <h4 className="text-gray-400 mt-2">No songs yet.</h4>
              )}
  
              <AddSong addSong={this.addSong} playlistID={playlist.playlistID} />
              {/* <AddToPlaylist playlistID={playlist.playlistID} /> */}
              
              <h4 className="text-lg font-semibold mt-6">Comments</h4>
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
              <AddComment playlistID={playlist.playlistID} />
            </div>
          </div>
        );
      }
  
      return <div>{content}</div>;
    }
  }

  //   if(editing) 
  //   {
  //     content = (
  //       <div>
  //         <EditPlaylist playlist={this.state.playlist} onSave={this.handleUpdatePlaylist} />
  //         <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600" onClick={this.toggleEdit}>Cancel</button>
  //       </div>
  //     );
  //   } 
  //   else 
  //   {
  //     content = (
  //       <div>
  //         <Playlist playlist={{ name, addedBy, genre, description, hashtag, songs }} />
  //         <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600" onClick={this.toggleEdit}>Edit Playlist</button>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className="min-h-screen bg-gray-900 text-white">
  //       <Header />
        
  //       <div className="container mx-auto p-6">
  //         {content}

  //         <AddSong />
  //         <AddToPlaylist />

  //         <h4 className="mt-6 text-lg font-semibold">Comments</h4>

  //         <div className="mt-4">
  //           {comments.map((comment, index) => (
  //             <Comment key={index} comment={comment} />
  //           ))}
  //         </div>

  //         <AddComment />
  //       </div>
  //     </div>
  //   );
  // }

  //const { name, addedBy, genre, description, hashtag, songs, comments } = this.state.playlist;

    //const { editing } = this.state;

    //const { id } = this.props.params;

    // let content;

    // if(editing)
    // {
    //   content = <EditPlaylist playlist={this.state.playlist} onSave={this.handleUpdatePlaylist} />,

    //   <button onClick={this.toggleEdit}>Cancel</button>
    // }
    // else
    // {
    //   content = (
    //     <div>
    //       <Playlist playlist={{ name, addedBy, genre, description, hashtag, songs }} />
          
    //       <button onClick={this.toggleEdit}>Edit Playlist</button>
    //     </div>
    //   );
    // }

    // return (
      
    //   <div>
    //     {/* <h3>{name}</h3>
    //     <p>Added by: {addedBy}</p>
    //     <p>Genre: {genre}</p>
    //     <p>{description}</p>
    //     <h4>Songs</h4>

    //     {songs.map((song, index) => (
    //       <Song key={index} song={song} />
    //     ))} */}
        
    //     <Header />

    //     {/* <Playlist playlist={{ name, addedBy, genre, description, hashtag, songs }} /> */}

    //     {/* {content}

    //     <AddSong />
    //     <AddToPlaylist />

    //     <h4>Comments</h4>

    //     {comments.map((comment, index) => (
    //       <Comment key={index} comment={comment} />
    //     ))}

    //     <AddComment /> */}

      
    //   </div>
    // );
//}

//export default playlistPage;

export default function PlaylistPageParams()
{
  const { playlistID } = useParams();

  return <PlaylistPage playlistID = {playlistID} />;
}
