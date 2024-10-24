import React from "react";
import { StyledTextarea } from "./style";

const BugTextArea = ({ placeholder = "", rows = 5, disabled = false }) => {
  return (
    <>
      <StyledTextarea
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
      />
    </>
  );
};

export default BugTextArea;
