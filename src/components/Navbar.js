import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
        <nav class="navbar navbar-default">

        <div class="container-fluid">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          
            <span class="navbar-brand" id="navName">Kevin Berry</span>
          
          </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    
          <ul class="nav navbar-nav navbar-right">

            <li><a href="/" >About</a></li>

            <li><a href="/portfolio" >Portfolio</a></li>

            <li><a href="/contact" >Contact</a></li>

          </ul>

        </div>

      </div>

    </nav>
);

export default Navbar;