import React from 'react';
import TopicList from './Topics/TopicList';
import Jumbotron from './Jumbotron';
import AboutUs from './AboutUs';
import Track from './Track';
import Signup from './Signup';
import Modal from './Modal';

const Home = () =>
<div>
  <Jumbotron />
  <AboutUs />
  <TopicList />
  <Track />
  <Signup />
  <Modal />
</div>;

export default Home;
