import React from "react";
import { StyledInputField } from "./style";

const BugInputField = ({ type = "text", placeholder = "" }) => {
  return (
    <>
      <StyledInputField type={type} placeholder={placeholder} />
    </>
  );
};

export default BugInputField;
