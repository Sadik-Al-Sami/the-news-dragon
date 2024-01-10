import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand='lg'
        className='bg-body-tertiary d-flex '
        variant='light'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
              {/* <Nav.Link href='#features'> */}
                <Link className='me-2 text-decoration-none' to='/categories/0'>Home</Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href='#pricing'> */}
                <Link className='me-2 text-decoration-none' to='/about'>About</Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href='#career'> */}
            <Link className='text-decoration-none' to='/career'>Career</Link>
              {/* </Nav.Link> */}
            </Nav>
            <Nav>
              {user && (
                <Nav.Link
                  eventKey={2}
                  href='#memes'>
                  <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                </Nav.Link>
              )}
              {user ? (
                <Button onClick={logOut} variant='secondary'>Log out</Button>
              ) : (
                // <Nav.Link href='#deets'>
                  <Link to='/login'>
                    <Button variant='secondary'>Login</Button>
                  </Link>
                // </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
