import React from "react";
import "./Header.css";

export const Header = (props, children) => (
  <header className="header">
    <h1>{props.title}</h1>
    <h4>{props.text}</h4>     
  </header>
);
