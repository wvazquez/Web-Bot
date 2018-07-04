import React, { Component } from 'react';
import './App.css';
import TopicList from './components/Topics/TopicList';
import Jumbotron from './components/Jumbotron';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Track from './components/Track';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Modal from './components/Modal';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <AboutUs />
        <TopicList />
        <Track />
        <Signup />
        <Footer />
        <Modal />
      </div>
    );
  }
}

export default App;
