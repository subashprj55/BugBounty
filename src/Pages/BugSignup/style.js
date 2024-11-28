import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "styled-components";

export const StyledSignupStack = styled(Stack)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledSignupBox = styled(Box)`
  width: fit-content;
  padding: 30px 50px 0px 50px;
`;

export const StyledSignupTypography = styled(Typography)`
  &.center {
    text-align: center;
  }
  &.space {
    margin: 5px 0;
  }
`;

export const StyledInputBox = styled(Box)`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const StyledBox = styled(Box)`
  margin-top: 20px;
`;

export const StyledSignupButton = styled(Button)``;

export const StyledCheckBox = styled(Checkbox)`
  &.error {
    color: red !important;
  }
`;

export const StyledBottomBox = styled(Box)`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)``;

export const StyledToggleButton = styled(ToggleButton)`
  padding: 9px 55px !important;
  p {
    font-size: 13px !important;
  }
`;

export const StyledFooterDiv = styled(Box)`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  padding: 5px 0;
`;

export const StyledInputField = styled.input`
  font-size: 14px;
  letter-spacing: 1px;
  padding: 13px 10px;
  width: 93%;
  border-radius: 8px;
  border: 1px solid #e4e4e7;

  &:focus {
    outline: none;
    border: 1px solid #a1a1aa;
  }
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  color: red;
`;

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
`;

export const StyledSelect = styled(Select)``;

export const StyledMenuItem = styled(MenuItem)``;

export const StyledInputLabel = styled(InputLabel)``;
