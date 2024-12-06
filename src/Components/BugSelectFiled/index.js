import { InputLabel } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyledFormControl,
  StyledMenuItem,
  StyledSelect,
} from "./style";

const BugSelectField = ({
  label = "",
  options = [],
  selectValue = "",
  setSelectValue = () => {},
}) => {
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
          {options?.map(({ id, title, name }) => {
            return (
              <StyledMenuItem key={id} value={id}>
                {`${title} (${name})`}
              </StyledMenuItem>
            );
          })}
        </StyledSelect>
      </StyledFormControl>
    </StyledBox>
  );
};

export default BugSelectField;
