import React from "react";
import { Link } from "react-router-dom";

const BugNavbar = () => {
  return (
    <div>
      <h3> this is nav bar</h3>
      <Link to={"/"}>home</Link>
      <br></br>

      <Link to={"/test"}>test</Link>
    </div>
  );
};

export default BugNavbar;
