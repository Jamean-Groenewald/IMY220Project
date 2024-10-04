import React from 'react';

class searchInput extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      searchTerm: ''
    };
  }

  handleInputChange = (event) => 
  {
    event.preventDefault();
    
    this.setState({ searchTerm: event.target.value }, () => 
    {
      this.props.onSearch(this.state.searchTerm);
    });
  };

  render() 
  {
    return (
      <input type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleInputChange} className="bg-gray-700 text-white placeholder-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
    );
  }
}

export default searchInput;
