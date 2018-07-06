import React, {Component} from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import CourseList from './CourseList'
import Course from './Course';

class CourseContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      topics: [
        {
          title: 'HTML5',
          description: 'is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.'
        },
        {
          title: 'CSS3',
          description: 'is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.'
        },
        {
          title: 'Javascript',
          description: 'is a scripting language used to make web pages interactive with its users. Mouse click, user input, keyboard clicks and more can be used as user events that trigger a interactivity from the web page.'
        },
        {
          title: 'Bootstrap',
          description: 'is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. Its made for folks of all skill levels, devices of all shapes, and projects of all sizes.'
        },
        {
          title: 'jQuery',
          description: 'is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.'
        },
        {
          title: 'Git',
          description: 'is a version control system that is used for software development and other version control tasks. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.'
        }
      ]
    }
  }

  render(){
    return(
      <div>

      <Switch>
        <Route exact path={this.props.match.path}
                     render={ () => <Redirect to={`${this.props.match.path}/all`} /> } />
        <Route exact path={`${this.props.match.path}/all`}
               render={ () => <CourseList data={this.state}/> } />
        <Route exact path={`${this.props.match.path}/:course_name`} render={ ({match}) => <Course data={this.state.topics.find(({title}) => title === match.params.course_name)} /> } />
        </Switch>
      </div>
    );
  }

}

export default CourseContainer;
