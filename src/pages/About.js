// import React
import React from 'react';
import Connect from "../components/Connect";
import Port from "../images/PF_2.png";

// create stateless (functional) component called About
const About = () => (
  <div>


    <div class="col-md-8 col-xs-12 left-column panel panel-default mainPanel" >


      <div class="page-header">
        <h1>Kevin Berry <small> Nice to meet you</small></h1>
      </div>


      <div class="row">

        <div class="col-md-12">

          <img  class="img img-responsive img-thumbnail pull-left" id="pPic" src={Port} alt="My handsome self."/>

          <p> 
            Hello! My name is Kevin Berry, and I am an aspiring  artist and programmer. I am from Neshanic Station, a small semi-rural area half-way between Flemington and Bridgewater.  I graduted from Champlain College in Burlington VT in 2014 with a BSA in Game Art and Animation.
            
            <br/>
            <br/>
            
            I am currently working at the Flemington Kohls, as a Sales Associate.  I just recently started attending the Rutgers Coding Bootcamp to expand my skill set, and have enjoyed both learning and working with my fellow students and the instructors.
          </p>
        </div>

      </div>    
    </div>

    <Connect/>
    
  </div>
);

export default About;


