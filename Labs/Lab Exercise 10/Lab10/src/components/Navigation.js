import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/student/Patrick Parreno">Student: Patrick Parreno</Link>
      </li>
      <li>
        <Link to="/student/Patrick Parreno/101085299">
          Student: Patrick Parreno, Student No: 101085299
        </Link>
      </li>
      <li>
        <Link to="/redirect">Redirect</Link>
      </li>
    </div>
  );
};

export default Navigation;
