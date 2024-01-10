import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
  const news = useLoaderData();
  const { image_url, title, details, category_id } = news;
  return (
    <div>
      <Card className='mb-2'>
        <Card.Img
          variant='top'
          src={image_url}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link
            className='text-decoration-none'
            to={`/categories/${category_id}`}>
            <Button
              className='d-flex align-items-center'
              variant='danger'>
              {' '}
              <FaArrowLeft className='me-2' />{' '}
              <span>All news in this category</span>
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights />
    </div>
  );
};

export default News;
