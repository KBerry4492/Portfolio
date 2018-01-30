import React from "react";
import "../../css/style.css";

export const Embed = (props) => (

  <div 
   name={props.name}
   className="embed-vid">
    <iframe 
      title='Embeded Video'
      width="500" height="350" 
      src={props.vidSrc}
      frameBorder="0" allow="autoplay; encrypted-media" 
      allowFullScreen/>

	   <div className="em-label">
      {props.name}
     </div>
  </div>
);
