import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "0",
          padding: "1rem 0",
          color: "white",
          backgroundColor: "rgb(142 142 142",
        }}
      >
        Todo List
      </h2>
      <div style={{ textAlign: "center" }}>
        <Link to="/">Home</Link>| <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
