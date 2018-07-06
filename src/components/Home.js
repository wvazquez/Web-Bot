import React from 'react';
import CourseList from './Courses/CourseList';
import Jumbotron from './Jumbotron';
import AboutUs from './AboutUs';
import Track from './Track';
import Signup from './Signup';
import Modal from './Modal';

const Home = () =>
<div>
  <Jumbotron />
  <AboutUs />
  <CourseList />
  <Track />
  <Signup />
  <Modal />
</div>;

export default Home;
