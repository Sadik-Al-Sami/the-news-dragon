import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/categories/0';
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log('logged in');
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <Container className='mx-auto w-25'>
      <h2>Please Login</h2>
      <form onSubmit={handleLogin}>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputPassword1'
            className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'>
          Submit
        </button>
        <div className='text-secondary'>
          Don't have an account <Link to='/register'>Register</Link>
        </div>
        <div className='text-danger'></div>
      </form>
    </Container>
  );
};

export default Login;
