import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiBookmark } from 'react-icons/ci';
import { GoShareAndroid } from 'react-icons/go';
import { FaRegEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { CiStar } from 'react-icons/ci';
import { IoStarOutline } from 'react-icons/io5';
import { IoStarSharp } from 'react-icons/io5';

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className='mb-4'>
      <Card.Header className='d-flex align-items-center'>
        <div>
          <Image
            style={{ height: '40px' }}
            src={author?.img}
            roundedCircle
          />
        </div>
        <div className='ps-2 flex-grow-1'>
          <p className='mb-0'>{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format('yyyy-MM-D')}</small>
          </p>
        </div>
        <div>
          <CiBookmark />
          <GoShareAndroid />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img
          variant='top'
          src={image_url}
        />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted d-flex'>
        <div className='flex-grow-1 d-flex align-items-center'>
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className='text-warning' />}
            fullSymbol={<FaStar />}
            className='me-1'
          />
          <span>{rating?.number}</span>
        </div>
        <div className='d-flex align-items-center'>
          <FaRegEye className='me-2' />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
