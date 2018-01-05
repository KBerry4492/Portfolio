// import React
import React from 'react';

// create stateless (functional) component called About
const Contact = () => (
  <div>

    <div className="row">

      <div className="col-md-8 col-xs-12 left-column panel panel-default mainPanel" >


        <div className="page-header">
          <h1>Contact <small> I can be reached at kmb23@comcast.net. <br/>  Please leave comments below.</small></h1>
        </div>


        <div className="row">

          <div className="col-md-12">

            <form>

              <div className="form-group">
                <label for="nameInput">Name:</label>
                <input type="password" className="form-control" id="nameInput" placeholder="Your Name Here" />
              </div>

              <div className="form-group">
                <label for="emailInput">Email address:</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Email address here" />
              </div>

              <div className="form-group">
                <label for="commentField">Comments:</label>
                <textarea rows="3" cols="40" placeholder="Leave us a comment" id="commentField"> </textarea>
              </div>
               
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

          </div>
          
        </div>
      </div>  
    </div>
  </div>
);

export default Contact;
