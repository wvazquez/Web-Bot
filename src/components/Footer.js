import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

 let footerList = [
   "HTML5",
   "CSS3",
   "Javascript",
   "Bootstrap",
   "jQuery",
   "Git"
 ];
  return(
  <footer>
      <div className="container">
        <section className="row p-y-1">
          <ul className="nav nav-pills navbar-left">

          { footerList.map((footerItem, index) => {
              return(
              <li key={index} role="presentation">
                <Link to={`/courses/${footerItem}`}>{footerItem}</Link>
              </li>
            )})
          }


          </ul>
          <p className="navbar-text navbar-right hidden-xs">All Rights Reserved 2016</p>
        </section>
      </div>
  </footer>);
};

  export default Footer;
