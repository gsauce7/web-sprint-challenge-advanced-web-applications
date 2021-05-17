import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { push } = useHistory();

  // useEffect(() => {
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // });

  // const error = '';
  //replace with error state

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', form)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        push('/bubblepage');
      })
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid='loginForm' className='login-form'>
        {/* <h2>Build login form here</h2> */}
        <h2>Log in using the form below...</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              name='username'
              data-testid='username'
              placeholder='username'
              onChange={handleChange}
              value={form.username}
              type='text'
            />
          </label>
          <label>
            Password:
            <input
              name='password'
              data-testid='password'
              placeholder='password'
              onChange={handleChange}
              value={form.password}
              type='password'
            />
          </label>
          <button type='submit'>Login</button>
        </form>
      </div>

      <p data-testid='errorMessage' className='error'>
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
