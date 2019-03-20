import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nva className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nva>
  );
};

export default NavBar;
