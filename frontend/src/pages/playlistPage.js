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
      playlist: {
        name: 'Chill Vibes',
        addedBy: 'User123',
        genre: 'Pop',
        description: 'Relaxing tunes',

        hashtag: '#chill #vibey',

        songs: [
          { title: 'Song A', artist: 'Artist 1', dateAdded: '2023-09-01', link: '#' },
          { title: 'Song B', artist: 'Artist 2', dateAdded: '2023-08-15', link: '#' }
        ],
        comments: [
          { username: 'User1', text: 'Great playlist!' },
          { username: 'User2', text: 'Love these songs!' }
        ]
      },

      editing: false

    };
  }

  toggleEdit = () => 
  {
    this.setState({ editing: !this.state.editing });
  };

  handleUpdatePlaylist = (updatedPlaylist) => 
  {
    this.setState({
      playlist: updatedPlaylist,
      editing: false // Exit edit mode after saving
    });
  };

  render() 
  {
    const { name, addedBy, genre, description, hashtag, songs, comments } = this.state.playlist;

    const { editing } = this.state;

    const { id } = this.props.params;

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

    let content;

    if (editing) 
    {
      content = (
        <div>
          <EditPlaylist playlist={this.state.playlist} onSave={this.handleUpdatePlaylist} />
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600" onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    } 
    else 
    {
      content = (
        <div>
          <Playlist playlist={{ name, addedBy, genre, description, hashtag, songs }} />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600" onClick={this.toggleEdit}>Edit Playlist</button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        
        <div className="container mx-auto p-6">
          {content}

          <AddSong />
          <AddToPlaylist />

          <h4 className="mt-6 text-lg font-semibold">Comments</h4>

          <div className="mt-4">
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>

          <AddComment />
        </div>
      </div>
    );
  }
}

//export default playlistPage;

export default function PlaylistPageParams()
{
  const params = useParams();

  return <PlaylistPage params={params} />;
}
