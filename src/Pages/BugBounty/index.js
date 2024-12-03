import React from "react";
import { useParams } from "react-router-dom";

const BugBounty = () => {
  const { id } = useParams();
  console.log(id);

  return <div>this page is not completed yet</div>;
};

export default BugBounty;
