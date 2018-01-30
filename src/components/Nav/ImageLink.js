import React from "react";
import "../../css/style.css";

export const ImageLink = (props, children) => (
  
  <a className="iLink" target="_blank" href={props.link}>
    <div 
     name={props.name}
     style={{ backgroundImage: `url("${props.image}")` }}
     className="im-link">

  	   <div className="im-lab">
          {props.name}
       </div>
    </div>
  </a>
);