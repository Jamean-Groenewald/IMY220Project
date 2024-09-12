import React from 'react';

class splashPage extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      username: '',
      password: '',
      signUpUser: '',
      signUpPass:'',

      errors:
      {
        username:'', 
        password:'',
        signUpUser: '',
        signUpPass:''
      }
    };
  }

  handleInputChange = (event) => 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateLoginForm = () =>
  {
    const { username, password } = this.state;

    let userError = '';
    let passError = '';

    if(username.trim()==='') //check if username is empty
    {
      userError = 'Username is empty';
    }

    if(password.trim()==='') //check if password is empty
    {
      passError = 'password is empty';
    }
    else if(password.length < 8) //check if password length >=8
    {
      passError = "Password must be at least 8 characters";
    }

    this.setState({
      errors:
      {
        ...this.state.errors,

        username: userError,
        password: passError
      }
    });

    if(userError==='' && passError==='')
    {
      return true;
    }
    else
    {
      return false;
    }
  };

  handleLoginSubmit = (event) =>
  {
    event.preventDefault();

    if(this.validateLoginForm())
    {
      console.log('Login form submitted: ', this.state.username, this.state.password);
    }
  };

  validateSignUpForm = () =>
  {
    const { signUpUser, signUpPass } = this.state;

    let signUpUserError = '';
    let signUpPassError = '';

    if(signUpUser.trim()==='') //check if username is empty
    {
      signUpUserError = 'Username is empty';
    }

    if(signUpPass.trim()==='') //check if password is empty
    {
      signUpPassError = 'password is empty';
    }
    else if(signUpPass.length < 8) //check if password length >=8
    {
      signUpPassError = "Password must be at least 8 characters";
    }

    this.setState({
      errors:
      {
        ...this.state.errors,

        signUpUser: signUpUserError,
        signUpPass: signUpPassError
      }
    });

    if(signUpUserError==='' && signUpPassError==='')
    {
      return true;
    }
    else
    {
      return false;
    }
  };
  
  handleSignUpSubmit = (event) =>
  {
    event.preventDefault();

    if(this.validateSignUpForm())
    {
      console.log('sign up form submitted: ', this.state.signUpUser, this.state.signUpPass);
    }
  };

  render() 
  {
    const {username, password, signUpUser, signUpPass, errors} = this.state;

    return (
      
      <div>
        <h2>Login</h2>
        
        <form onSubmit={this.handleLoginSubmit}>
          
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleInputChange} />

          {errors.username}

          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} />

          {errors.password}

          <button type="submit">Login</button>

        </form>
        
        <h2>Sign Up</h2>
        
        <form onSubmit={this.handleSignUpSubmit}>

          <input type="text" name="signUpUser" placeholder="Username" value={signUpUser} onChange={this.handleInputChange} />

          {errors.signUpUser}

          <input type="password" name="signUpPass" placeholder="Password" value={signUpPass} onChange={this.handleInputChange}/>

          {errors.signUpPass}

          <button type="submit">Sign Up</button>
        </form>

      </div>
    );
  }
}

export default splashPage;
