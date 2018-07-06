import React from 'react';
import Jumbotron from '../Jumbotron'

const Course = (props) =>
<div>
  <h1>{props.data.title}</h1>
  <p>{props.data.description}</p>
</div>
export default Course;
