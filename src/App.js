import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Footer from './core/components/layout/Footer';
import Header from './core/components/layout/Header';
import MainRoutes from './core/routes/MainRoutes';
import { Container } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Container>
          <MainRoutes />
        </Container>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
