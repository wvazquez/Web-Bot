import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CourseList from './components/Courses/CourseList'
import Course from './components/Courses/Course';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/courses' component={CourseList} />
          <Route path='/courses/:course_name' component={Course} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
