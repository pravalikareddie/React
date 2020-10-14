import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {" "}
        <i className={props.icon} /> {props.title}
      </h1>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "Github Finder",
};
export default Navbar;
