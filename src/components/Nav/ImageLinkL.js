import React from "react";
import "../../css/style.css";

export const ImageLinkL = (props, children) => (
  
  <a className="iLink" target="_blank" href={props.link}>
    <div 
     name={props.name}
     style={{ backgroundImage: `url("${props.image}")` }}
     className="im-link-l">

  	   <div className="im-lab-l">
          {props.name}
       </div>
    </div>
  </a>
);