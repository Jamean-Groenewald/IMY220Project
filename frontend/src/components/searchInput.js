import React from 'react';

class searchInput extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      input: '',
      searchType: 'users'
    };
  }

  handleChange = (event) => 
  {
    this.setState({ input: event.target.value });
  };

  handleTypeChange = (event) => 
  {
    this.setState({ searchType: event.target.value });
  };

  handleSearch = () => 
  {
    const { input, searchType } = this.state;
    this.props.onSearch(input, searchType);
  };

  render() 
  {
    const {input, searchType} = this.state;

    return (
      <div>
        <input type="text" placeholder="Search..." value={input} onChange={this.handleChange} className="bg-gray-700 text-white placeholder-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        
        <select value={searchType} onChange={this.handleTypeChange}>
          <option value="users">Users</option>
          <option value="songs">Songs</option>
          <option value="playlists">Playlists</option>
        </select>
        <button onClick={this.handleSearch}>Search</button>
        
      </div>
    );
  }
}

export default searchInput;
