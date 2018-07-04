import React from 'react';

const AboutUs = () =>
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
  </div>;

  export default AboutUs;
