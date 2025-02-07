const { Box, FormControl, Select, MenuItem } = require("@mui/material");
const { styled } = require("styled-components");

export const StyledBox = styled(Box)``;

export const StyledFormControl = styled(FormControl)`
  padding-top: 5px !important;
  padding: 13px 10px;
  .css-113d811-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    margin-top: 6px;
    color: gray !important;
  }
  .css-sc8y68-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: 1px solid #a1a1aa;
  }
  .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
    margin-top: 6px;
  }
  .css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 12px 10px;
  }
  label {
    margin-top: 5px;
`;

export const StyledSelect = styled(Select)``;

export const StyledMenuItem = styled(MenuItem)``;
