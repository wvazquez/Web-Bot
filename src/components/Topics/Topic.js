import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Course from './Course';


const Topic = (props) =>
<div>
  <Link to={`/courses/${props.topic.title}`} className="thumbnail">
    <img src={props.topic.title + '.png'} alt={props.topic.title} />
    <h3 className="text-center">{props.topic.title}</h3>
    <div className="caption caption-fluid">
      <p>{props.topic.title} {props.topic.description}</p>
    </div>
  </Link>
  


</div>;
export default Topic;
