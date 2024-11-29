import React from "react";
import { StyledInputField } from "./style";

const BugInputField = ({
  type = "text",
  placeholder = "",
  value = "",
  setValue = () => {},
  required = false,
  ...props
}) => {
  return (
    <>
      <StyledInputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required={required}
        {...props}
      />
    </>
  );
};

export default BugInputField;
