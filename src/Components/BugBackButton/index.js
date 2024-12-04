import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackBox, StyledBackButton } from "./style";

const BugBackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <StyledBackBox>
      <StyledBackButton onClick={handleClick} />
    </StyledBackBox>
  );
};

export default BugBackButton;
