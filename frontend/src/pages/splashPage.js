import React from 'react';

class splashPage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() 
  {
    return (
      
      <div>
        <h2>Login</h2>
        <form>
          
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={this.state.username} 
            onChange={this.handleInputChange} 
          />

          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleInputChange} 
          />

          <button type="submit">Login</button>

        </form>
        
        <h2>Sign Up</h2>
        
        <form>
          <input type="text" name="signupUsername" placeholder="Username" />
          <input type="password" name="signupPassword" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default splashPage;
