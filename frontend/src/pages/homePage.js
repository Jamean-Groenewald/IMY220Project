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
      searchTerm: '',
      inputError:''
    };
  }

  handleSearch = (input) => 
  {
    
    if (input.trim() === '') 
    {
      this.setState({ inputError: 'Search term cannot be empty' });
    } 
    else 
    {
      this.setState({ searchTerm: input, inputError: '' });
    }
  };

  render() 
  {
    const {searchTerm, inputError} = this.state;

    return (
      <div>
      
        <Header />

        <SearchInput onSearch={this.handleSearch} />
        {inputError}
        <Feed searchTerm={searchTerm} />
        
      </div>
    );
  }
}

export default homePage;
