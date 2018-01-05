// import React
import React from 'react';
import geo from "../images/geoloc/home.png";
import tron from "../images/Hangman/start.png";
import hana from "../images/Hanafuda_b2.jpg";
import stock from "../images/stock_pic_bulb.jpg";

// create stateless (functional) component called About
const About = () => (
<div className="row">

      <div className="col-md-8 col-xs-12 left-column panel panel-default mainPanel" >

        <div className="page-header">
          <h1>Portfolio <small> Click  tumbnails for further content.</small></h1>
        </div>

        <div className="row">

          <div className="col-md-12">
            
            <div className="row">
              
              
              <div className="col-md-4 col-sm-6 col-xs-10">
                <div className="linkLabel"> Geomon </div>
                <img src={geo} className="img img-responsive img-thumbnail PphBg" alt="Geomon" />
              </div>

              <div className="col-md-4 col-sm-6 col-xs-10">
                <div className="linkLabel"> Hangtron </div>
                <img src={tron} className="img img-responsive img-thumbnail PphBg" alt="Hangtron" />
              </div>

              <div className="col-md-4 col-sm-6 col-xs-10">
                <div className="linkLabel"> Hanafuda </div>
                <img src={hana} className="img img-responsive img-thumbnail PphBg" alt="Hanafuda" />
              </div>

              <div className="col-md-4 col-sm-6 col-xs-10">
                <div className="linkLabel"> Past Content </div>
                <img src={stock} className="img img-responsive img-thumbnail PphBg" alt="Past content" />
              </div>


            </div>
          </div>
          
        </div>

      </div>
    </div>
);

export default About;
