import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <header>
            <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav text-center">
                    <li className="active" id="this"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#languages">Languages</a></li>
                    <li><a href="#schedule">Track</a></li>

                  </ul>
                  <p className="navbar-text navbar-right hidden-xs">Created by <a href="#" className="navbar-link"><strong>Wils Design</strong></a></p>
                </div>
              </div>
            </nav>
          </header>




          <div className="jumbotron text-center">
            <div className="container">
              <h1><span>Web Developement</span></h1>
              <p>The Robot guidance you need to start a web dev career!</p>
              <div className="btn-group btn-group-lg m-t-2" role="group" aria-label="...">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Register</button>
                <a className="btn btn-info btn-lg" href="#languages" role="button">Learn more</a>
              </div>
            </div>
          </div>


          <div className="container p-y-4">
            <h1 className="display-4 text-center sections-color" id="about">About Us</h1>
            <hr />
            <section className="row section">
              <article className="col-xs-12 p-x-0 col-sm-6">
                <img className="img-responsive" src="305H.jpg" alt="New York City" />
              </article>
              <article className="col-xs-12 col-sm-6 concept">
                <h3 className="m-b-1 text-center" id="concept-about"><strong>Web Bot</strong></h3>
                <p>Located in beautiful but chaotic New York City, we know a little too well the fast paced enviornment of life.</p>
                <p>New technologies are emerging every minute and trying to stay up to date with technology can be overwhelming.</p>
              </article>
              <article className="col-xs-12 p-x-0 col-sm-6 col-sm-push-6" >
                <img className="img-responsive" src="programmer.jpg" alt="Busy Lifestyle in NYC" />
              </article>
              <article className="col-xs-12 col-sm-6 col-sm-pull-6 concept">
                <h3 className="m-b-1 text-center" id="concept-tools"><strong>Tools You Need</strong></h3>
                <p>Trying to learn web development on your own can be a difficult task. The abundance of learning tools can easily overwhelem and discourage anyone.</p>
                <p>That is why we have compiled a small collection of the best tools you can easily use to start on your path to a web development career </p>
              </article>
              <article className="col-xs-12 p-x-0 col-sm-6">
                <img className="img-responsive" src="249H.jpg" alt="Programmer" />
              </article>
              <article className="col-xs-12 col-sm-6 concept">
                <h3 className="m-b-1 text-center" id="concept-articles"><strong>Latest Articles</strong></h3>
                <div className="list-group">
                  <a href="http://www.thesoftwareguild.com/stack-infographic/#intro" target="_blank" className="list-group-item"><strong>Web Stack</strong>: What Is A Web Stack</a>
                  <a href="https://speckyboy.com/50-free-resources-web-designers-october-2016/" target="_blank" className="list-group-item"><strong>Web Designer</strong>: 50 Free Resources</a>
                  <a href="https://davidwalsh.name/14-web-tools-reviewed" target="_blank" className="list-group-item"><strong>Web Tools</strong>: 14 Best Web Tools</a>
                  <a href="https://medium.freecodecamp.com/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329#.mu0erfcl2" target="_blank" className="list-group-item"><strong>Chrome Console</strong>: Things You didn’t know</a>
                  <a href="http://developer.telerik.com/featured/guide-browser-scroll-animations/?utm_source=mybridge&utm_medium=email&utm_campaign=read_more" target="_blank" className="list-group-item"><strong>Scroll Animations</strong>: A guide</a>
                  <a href="https://www.web-savvy-marketing.com/2014/12/creating-ideal-home-page/" target="_blank" className="list-group-item"><strong>Web Dev</strong>: Creating the Ideal Home Page</a>
                </div>
              </article>
            </section>
            <hr />
          </div>


          <div className="languages p-y-4">
            <div className="container">
              <h1 className="display-4 text-center sections-color" id="languages">Languages</h1>
              <hr />
              <section className="row">

                <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                  <article className="thumbnail">
                    <img src="HTML5.png" alt="HTML5" />
                    <h3 className="text-center">HTML5</h3>
                    <div className="caption caption-fluid">
                      <p><strong>HTML5</strong> is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.</p>
                    </div>
                  </article>
                </article>

                <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                  <article className="thumbnail">
                    <img src="CSS3.png" alt="CSS3" />
                    <h3 className="text-center">CSS3</h3>
                    <div className="caption caption-fluid description">
                      <p><strong>CSS3</strong> is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.</p>
                    </div>
                  </article>
                </article>

                <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                  <article className="thumbnail">
                    <img src="js.png" alt="Javascript" />
                    <h3 className="text-center">Javascript</h3>
                    <div className="caption caption-fluid">
                      <p>While HTML is used for structure and CSS for presentation, <strong>JavaScript</strong> is a scripting language used to make web pages interactive with its users. Mouse click, user input, keyboard clicks and more can be used as user events that trigger a interactivity from the web page.</p>
                    </div>
                  </article>
                </article>

                <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                  <article className="thumbnail">
                    <img src="bootstrap.png" alt="Bootstrap" />
                    <h3 className="text-center">BootStrap</h3>
                    <div className="caption caption-fluid">
                      <p><strong>Bootstrap</strong> is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. Its made for folks of all skill levels, devices of all shapes, and projects of all sizes.</p>
                    </div>
                  </article>
                </article>

                <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                  <article className="thumbnail">
                    <img src="jquery.png" alt="jQuery" />
                    <h3 className="text-center">jQuery</h3>
                    <div className="caption caption-fluid">
                      <p><strong>jQuery</strong> is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.</p>
                    </div>
                  </article>
                </article>

                <article className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                  <article className="thumbnail">
                    <img src="git.png" alt="Git" />
                    <h3 className="text-center">Git</h3>
                    <div className="caption caption-fluid">
                      <p><strong>Git</strong> is a version control system that is used for software development and other version control tasks. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.</p>
                    </div>
                  </article>
                </article>
              </section>
              <hr />
            </div>
          </div>

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


          <button type="button" className="btn btn-info btn-lg center-block no-round m-b-4" data-toggle="modal" data-target="#myModal">Register Now For More Info!</button>


        <section className="signup p-y-2">
            <div className="container">
              <section className="row text-muted p-y-2">
                <article className="col-md-5 col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0">
                  <h5 className="text-center"><strong>About Web Bot</strong></h5>
                  <p>Web Bot is committed to bring you latest technologies that suit every level of programmer. We look forward to helping you reach your goals.</p>
                  <p>So here is to all the eager hopefuls looking to start or even advance your career as a web developer.</p>
                </article>
                <article className="col-md-4 col-md-offset-2 col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0">
                  <h5 className="text-center"><strong>Stay up to date with our newsletter!</strong></h5>
                  <article className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your email info" aria-describedby="email" />
                    <a className="input-group-addon btn btn-success" href="#" role="button" id="email">Sign Up</a>
                  </article>
                </article>
              </section>
            </div>
          </section>

      <footer>
          <div className="container">
            <section className="row p-y-1">
              <ul className="nav nav-pills navbar-left">
                <li role="presentation"><a href="#">HTML</a></li>
                <li role="presentation"><a href="#">CSS</a></li>
                <li role="presentation"><a href="#">Javascript</a></li>
                <li role="presentation"><a href="#">Bootstrap</a></li>
                <li role="presentation"><a href="#">jQuery</a></li>
                <li role="presentation"><a href="#">Git</a></li>
              </ul>
              <p className="navbar-text navbar-right hidden-xs">All Rights Reserved 2016</p>
            </section>
          </div>
      </footer>




      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h2 className="modal-title text-center" id="myModalLabel">Register</h2>
            </div>

            <div className="modal-body">
              <form>
                <h4 className="m-b-2 text-info">Basic Info</h4>

                  <div className="form-group">
                    <label for="first">First Name:</label>
                    <input type="text" className="form-control" id="first" />
                  </div>
                  <div className="form-group">
                    <label for="last">Last Name:</label>
                    <input type="text" className="form-control" id="last" />
                  </div>

                <hr className="m-y-2"/>
                <h4 className="m-b-2 text-info">Login Info</h4>
                <div className="form-group">
                  <label for="user">Username:</label>
                  <input type="text" className="form-control" id="user" />
                </div>
                <div className="form-group">
                  <label for="mail">Email:</label>
                  <div className="input-group">
                    <span className="input-group-addon">@</span>
                    <input type="email" className="form-control" id="mail" />
                  </div>

                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>

              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" data-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
