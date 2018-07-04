import React, { Component } from 'react';
import './App.css';
import TopicList from './TopicList';
import Jumbotron from './Jumbotron';
import Header from './Header';
import AboutUs from './AboutUs';
import Track from './Track';
import Footer from './Footer';
import Signup from './Signup';
import Modal from './Modal';

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
