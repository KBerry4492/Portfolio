import React from 'react';
import gh from '../images/GitHub-Mark.png';
import stack from "../images/stackoverflow_logo_2.png";
import link from "../images/LinkedIn-Logo.png";
import face from "../images/facebook_logo_2.png";

const Connect = props => (
  <div className="panel panel-info">

    <div className="panel-heading">
      <h1 className="panel-title">Connect with me</h1>
    </div>

    <div className="panel-body">

      <a href="https://github.com/KBerry4492" target="_blank" rel="noopener noreferrer">
       <img className="Connect col-md-3 col-xs-3 img img-responsive img-rounded" src={gh} alt="github">
       </img>
      </a>

      <a href="https://stackoverflow.com/users/8308772/k-berry" target="_blank" rel="noopener noreferrer">
       <img className="Connect col-md-3 col-xs-3 img img-responsive img-rounded" src={stack} alt="stackoverflow">
       </img>
      </a>

      <a href="https://www.linkedin.com/in/kevinmichaelberry/" target="_blank" rel="noopener noreferrer">
       <img className="Connect col-md-3 col-xs-3 img img-responsive img-rounded" src={link} alt="linkedin">
       </img>
      </a>

      <a href="https://www.facebook.com/kevin.berry.7967" target="_blank" rel="noopener noreferrer">
       <img className="Connect col-md-3 col-xs-3 img img-responsive img-rounded" src={face} alt="facebook">
       </img>
      </a> 

    </div>

  </div>
)

export default Connect;


