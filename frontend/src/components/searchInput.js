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
    this.setState({ searchTerm: event.target.value }, () => 
    {
      this.props.onSearch(this.state.searchTerm);
    });
  };

  render() 
  {
    return (
      <input 
        type="text" 
        placeholder="Search..." 
        value={this.state.searchTerm} 
        onChange={this.handleInputChange} 
      />
    );
  }
}

export default searchInput;
