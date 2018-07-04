import React from 'react';


const Jumbotron = () =>
  <div className="jumbotron text-center">
    <div className="container">
      <h1><span>Web Developement</span></h1>
      <p>The Robot guidance you need to start a web dev career!</p>
      <div className="btn-group btn-group-lg m-t-2" role="group" aria-label="...">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Register</button>
        <a className="btn btn-info btn-lg" href="#languages" role="button">Learn more</a>
      </div>
    </div>
  </div>;

  export default Jumbotron;
