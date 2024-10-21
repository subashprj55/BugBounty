import { InputLabel } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyledFormControl,
  StyledMenuItem,
  StyledSelect,
} from "./style";

const BugSelectField = ({ label }) => {
  const [selectValue, setSelectValue] = React.useState("");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <StyledBox>
      <StyledFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label={label}
          onChange={handleChange}
        >
          <StyledMenuItem value={10}>Demo1</StyledMenuItem>
          <StyledMenuItem value={20}>Demo2</StyledMenuItem>
          <StyledMenuItem value={30}>Demo3</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>
    </StyledBox>
  );
};

export default BugSelectField;
