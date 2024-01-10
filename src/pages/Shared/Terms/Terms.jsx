import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Our terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, optio?
        Voluptas corporis doloremque molestias facere ipsam distinctio! Autem
        iusto, sunt illo sed assumenda sit nobis.
      </p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;
