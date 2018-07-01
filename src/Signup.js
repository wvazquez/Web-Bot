import React from 'react';

const Signup = () =>
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
    </section>;

export default Signup;
