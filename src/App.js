import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CourseContainer from './components/Courses/CourseContainer'
import Course from './components/Courses/Course';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

            <Route exact path='/' component={Home} />
            <Route path='/courses' component={CourseContainer} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
