import React from 'react';
import PropTypes from 'prop-types';

const TopicList = props =>
  <div className="languages p-y-4">
    <div className="container">
      <h1 className="display-4 text-center sections-color" id="languages">Languages</h1>
      <hr />
      <section className="row">

        <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
          {props.topics.map((topic, index) =>
            <article key={index} className="thumbnail">
              <img src={topic.title + '.png'} alt={topic.title} />
              <h3 className="text-center">{topic.title}</h3>
              <div className="caption caption-fluid">
                <p>{topic.title} {topic.description}</p>
              </div>
            </article>
          )}
        </article>

      </section>
      <hr />
    </div>
  </div>;

TopicList.PropTypes = {
  topics: PropTypes.array.isRequired
}
export default TopicList;
