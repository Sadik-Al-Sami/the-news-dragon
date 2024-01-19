import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
  const { createUser, userName } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const location = useLocation();
  const path = location?.state?.from?.pathname || '/caategories/0';
  const navigate = useNavigate();
  const handleAccepted = (event) => {
    // setAccepted(true);
    setAccepted(event.target.checked);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log('registered');
        navigate(path, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <Container className='mx-auto w-25'>
      <h2>Please Register</h2>
      <form onSubmit={handleRegister}>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputName'
            className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='form-control'
            id='exampleInputName'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputURL'
            className='form-label'>
            Photo URL
          </label>
          <input
            type='text'
            name='photo'
            className='form-control'
            id='exampleInputURL'
            aria-describedby='emailHelp'
          />
        </div>
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
        <div className='mb-3 form-check'>
          <input
            onClick={handleAccepted}
            type='checkbox'
            name='accept'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label
            className='form-check-label'
            htmlFor='exampleCheck1'>
            {
              <>
                Accept <Link to='/terms'>Terms and Conditions</Link>{' '}
              </>
            }
          </label>
        </div>
        <button
          type='submit'
          disabled={!accepted}
          className='btn btn-primary'>
          Register
        </button>
        <div className='text-secondary'>
          Already have an account <Link to='/register'>Login</Link>
        </div>
        <div className='text-danger'></div>
      </form>
    </Container>
  );
};

export default Register;
