import React, { useEffect, useState } from 'react';
import { Col, Row, ListGroup, Image, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };
    getProduct();
  }, []);

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
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Price: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
    </>
  );
};

export default Product;