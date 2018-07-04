import React from 'react';

const Modal = () =>
  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
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
                <label htmlFor="first">First Name:</label>
                <input type="text" className="form-control" id="first" />
              </div>
              <div className="form-group">
                <label htmlFor="last">Last Name:</label>
                <input type="text" className="form-control" id="last" />
              </div>

            <hr className="m-y-2"/>
            <h4 className="m-b-2 text-info">Login Info</h4>
            <div className="form-group">
              <label htmlFor="user">Username:</label>
              <input type="text" className="form-control" id="user" />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email:</label>
              <div className="input-group">
                <span className="input-group-addon">@</span>
                <input type="email" className="form-control" id="mail" />
              </div>

            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
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
  </div>;

  export default Modal;
