import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';
import ProductDetail from '../ProductDetail/ProductDetail';
import Home from '../Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
