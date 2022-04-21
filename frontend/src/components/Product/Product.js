import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './Product.styles.css';

const Product = (props) => {
    const { product } = props;

    return (
        <Card className='product-summary my-3 p3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img sr={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
            <Card.Text as='div'>
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                </div>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                />
            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card>
    );
};

export default Product;