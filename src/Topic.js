import React from 'react';


const Topic = (props) =>
  <article className="thumbnail">
    <img src={props.topic.title + '.png'} alt={props.topic.title} />
    <h3 className="text-center">{props.topic.title}</h3>
    <div className="caption caption-fluid">
      <p>{props.topic.title} {props.topic.description}</p>
    </div>
  </article>;

export default Topic;
