import React from 'react';
import { Col, Row, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Products from '../../utils/static/products.static.json';

const Product = () => {
  const params = useParams();
  const product = Products.find(p => p._id === params.id);
  return (
    <>
      <Link className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.name} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>

            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Product;