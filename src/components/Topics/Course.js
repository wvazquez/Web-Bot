import React from 'react';
import Jumbotron from '../Jumbotron'

const Course = ({match}) =>
<div>
  <h1>{match.params.course_name}</h1>
</div>
export default Course;
