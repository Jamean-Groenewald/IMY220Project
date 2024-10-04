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

  handleLoginSubmit = async (event) =>
  {
    event.preventDefault();

    if(this.validateLoginForm())
    {
      //console.log('Login form submitted: ', this.state.username, this.state.password);
      const { username, password } = this.state;
    
      try 
      {
        const response = await fetch('/api/login',
        { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        if(response.ok) 
        {
          const data = await response.json();
          //console.log('Login successful', data);

          localStorage.setItem('userId', data.userId); // Save userId to local storage

          window.location.href = '/home'; // Redirect to home page
        } 
        else 
        {
          const errorData = await response.json();
          console.error('Login failed:', errorData);

          //console.log("username:", username, "password:", password);
        }
      } 
      catch (error) 
      {
        console.error('Error during login request:', error);
      }
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
  
  handleSignUpSubmit = async (event) =>
  {
    event.preventDefault();

    if(this.validateSignUpForm())
    {
      //console.log('sign up form submitted: ', this.state.signUpUser, this.state.signUpPass);

      const { signUpUser, signUpPass } = this.state;

      try 
      {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: signUpUser, password: signUpPass })
        });

        if(response.ok) 
        {
          const data = await response.json();
          //console.log('Sign up successful', data);

          localStorage.setItem('userId', data.userId); // Save userId to local storage

          window.location.href = '/home'; // Redirect to home page
        } 
        else 
        {
          const errorData = await response.json();
          console.error('Sign up failed:', errorData);
        }
      } 
      catch (error) 
      {
        console.error('Error during sign up request:', error);
      }
    }
  };

  render() 
  {
    const {username, password, signUpUser, signUpPass, errors} = this.state;

    return (
      
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>

          <form onSubmit={this.handleLoginSubmit} className="space-y-4">
            <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleInputChange} className="w-full px-4 py-2 bg-gray-700 rounded text-white" />

            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

            <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} className="w-full px-4 py-2 bg-gray-700 rounded text-white" />

            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >Login</button>
          </form>          
        </div>  

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 mt-8">
          <h2 className="text-2xl mb-4 font-bold text-center">Sign Up</h2>

          <form onSubmit={this.handleSignUpSubmit} className="space-y-4">

            <input type="text" name="signUpUser" placeholder="Username" value={signUpUser} onChange={this.handleInputChange} className="w-full px-4 py-2 bg-gray-700 rounded text-white" />

            {errors.signUpUser && <p className="text-red-500 text-sm">{errors.signUpUser}</p>}

            <input type="password" name="signUpPass" placeholder="Password" value={signUpPass} onChange={this.handleInputChange} className="w-full px-4 py-2 bg-gray-700 rounded text-white" />

            {errors.signUpPass && <p className="text-red-500 text-sm">{errors.signUpPass}</p>}

            <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" >Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default splashPage;
