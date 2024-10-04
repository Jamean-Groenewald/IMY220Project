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
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />

        <div className="container mx-auto p-6">
          <SearchInput onSearch={this.handleSearch} />

          {inputError && (
            <p className="text-red-500 text-sm mt-2">{inputError}</p>
          )}

          <Feed searchTerm={searchTerm} />
        </div>
      </div>
    );
  }
}

export default homePage;
