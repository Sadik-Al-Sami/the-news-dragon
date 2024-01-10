import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import userLogo from '../../../assets/user.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
  return (
    <Container>
      <div className='text-center'>
        <img
          src={logo}
          alt=''
        />
        <p className='text-secondary'>
          <small>Journalism without fear or favor</small>
        </p>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
      <div className='d-flex'>
        <Button variant='danger'>Latest</Button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.... I can be a React component, multiple React components, or
          just some text.... I can be a React component, multiple React
          components, or just some text....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
