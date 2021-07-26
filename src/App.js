import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Footer from './core/components/layout/Footer';
import Header from './core/components/layout/Header';
import MainRoutes from './core/routes/MainRoutes';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />

        <MainRoutes />

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
