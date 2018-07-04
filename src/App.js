import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
