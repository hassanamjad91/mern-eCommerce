import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {
          products.map((product) =>
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        }
      </Row>
    </>
  );
};

export default Home;