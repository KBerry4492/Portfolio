import React from "react";
import { Link } from 'react-router-dom';
import "../../css/style.css";

export const ContentLink = (props, children) => (

  <div 
   name={props.name}
   style={{ backgroundImage: `url("${props.image}")` }}
   className="small-card">

	   <div className="label">
      <Link className="cLink" to={props.link}>
        {props.name}
      </Link>
     </div>
  </div>
);
