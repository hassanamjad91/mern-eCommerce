import express from 'express';
import dotenv from 'dotenv';
import products from './utils/constants/products.constant.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
const env = proeess.env.NODE_ENV;

app.listen(port, console.log(`Server running in ${env} mode on port: ${port}`));

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});