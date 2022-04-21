import React from 'react';
import Product from '../../components/Product/Product';
import products from '../../utils/static/products.static.json';

const Home = () => {
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