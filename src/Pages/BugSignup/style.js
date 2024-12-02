import ContactMailIcon from "@mui/icons-material/ContactMail";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
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
  &.color-gray {
    color: gray;
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

export const StyledButtonStack = styled(Stack)`
  flex-direction: row !important;
  position: relative;
  padding-bottom: 5px;
`;

// styles for popup models /////////////////////////////////////////////////
export const StyledBoxModel = styled(Box)``;

export const StyledModel = styled(Modal)``;

export const StyledModelBox = styled(Box)`
  position: absolute;
  padding: 20px;
  top: 50%;
  left: 50%;
  width: 400px;
  min-height: 200px;
  background-color: white;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const StyledButton = styled(Button)`
  &.closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  width: auto !important;
`;

export const StyledButtonBox = styled(Box)`
  margin-top: 30px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const StyledContactMailIcon = styled(ContactMailIcon)`
  color: #39d2c0;
  width: 120px !important;
  height: 120px !important;
`;

export const StyledModelBodyBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledOTPInputContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 36px 0;
`;

export const StyledOTPInput = styled(TextField)`
  width: 60px !important;

  .css-quhxjy-MuiInputBase-root-MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline {
    border: 1px gray solid;
  }
  .css-quhxjy-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: 1px gray solid !important;
  }
  input {
    text-align: center;
  }
`;
