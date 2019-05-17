import React from 'react';
import { Heading } from 'rebass';
import { Link } from 'react-router-dom';

const Info = () => (
  <React.Fragment>
    <Heading as="h1" mb={4}>
      Product
    </Heading>
    <Link to="/products">Back to products</Link>
  </React.Fragment>
);

export default Info;
