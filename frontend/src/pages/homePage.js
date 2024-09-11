import React from 'react';
import Feed from '../components/feed';
import SearchInput from '../components/searchInput';

class homePage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      searchTerm: ''
    };
  }

  handleSearch = (term) => 
  {
    this.setState({ searchTerm: term });
  };

  render() 
  {
    return (
      <div>
        <SearchInput onSearch={this.handleSearch} />
        <Feed searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default homePage;
