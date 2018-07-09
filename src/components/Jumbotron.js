import React from 'react';
import {Link} from 'react-router-dom';


const Jumbotron = () =>
  <div className="jumbotron text-center">
    <div className="container">
      <h1><span>Web Developement</span></h1>
      <p>A complete guide to go learn web development.</p>
      <div className="btn-group btn-group-lg m-t-2" role="group" aria-label="...">
        <Link className="btn btn-info btn-lg" to={'/courses/all'} role="button">Learn more</Link>
      </div>
    </div>
  </div>;

  export default Jumbotron;
