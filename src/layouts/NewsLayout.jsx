import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
  return (
  <div>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={9}>
            <h2>The Dragon News</h2>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
