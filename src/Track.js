import React from 'react';

const Track = () =>
  <div>
    <div className="container p-y-4">
      <h1 className="display-4 text-center sections-color" id="schedule">Track</h1>
      <div className="list-group text-muted">
        <a href="#" className="list-group-item list-group-item-info">
          <h4 className="list-group-item-heading">Intro to HTML<span className="label label-default label-info">2 Hours</span></h4>
          <p className="list-group-item-text">Learn the basics of HyperText Markup Language better known as HTML. It provides the structure of any website by using markup tags known as elements.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">Intro to CSS<span className="label label-default label-info">2 Hours</span></h4>
          <p className="list-group-item-text">Learn the basics of Cascading Style Sheets better known as CSS. It provides the styles and layout to any website using rules that target HTML elements.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-info">
          <h4 className="list-group-item-heading">HTML5 New Features<span className="label label-default label-info">30 Mins</span></h4>
          <p className="list-group-item-text">HTML5 is the latest evolution of the standard that defines HTML. New elements, attributes, and behaviors, with a larger set of technologies allows more diverse and powerful Web sites and applications.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">CSS Selectors<span className="label label-default label-info">30 Min</span></h4>
          <p className="list-group-item-text">CSS selectors are patterns used to select the elements which to apply the appropriate styles to.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-info">
          <h4 className="list-group-item-heading">Build A Website<span className="label label-default label-info">3 Hours</span></h4>
          <p className="list-group-item-text">Learn how to put HTML and CSS together to create a beautiful masterpiece you can your first website.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">Intro to Javascript<span className="label label-default label-info">8 Hours</span></h4>
          <p className="list-group-item-text">While HTML adds structure, and CSS adds styling, Javascript adds user interactivity. Web pages are able to respond to user interactions.</p>
        </a>
      </div>
    </div>
    <button type="button" className="btn btn-info btn-lg center-block no-round m-b-4" data-toggle="modal" data-target="#myModal">Register Now For More Info</button>;
  </div>
  export default Track;
