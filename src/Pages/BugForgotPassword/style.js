import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Modal, TextField } from "@mui/material";

export const StyledLoginStack = styled(Stack)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form``;

export const StyledLoginBox = styled(Box)`
  width: 330px;
  padding: 50px 50px;
`;

export const StyledDescriptionBox = styled(Box)`
  display: flex;
  gap: 5px;
`;

export const StyledLoginTypography = styled(Typography)`
  &.center {
    text-align: center;
  }
  &.space {
    margin: 10px 0;
  }
`;

export const StyledInputBox = styled(Box)`
  margin-top: 45px;
  margin-bottom: 50px;
`;

export const StyledBox = styled(Box)`
  margin-top: 15px;
`;

export const StyledLoginButton = styled(Button)``;

export const StyledLink = styled(Link)``;

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

export const StyledButtonStack = styled(Stack)`
  position: relative;
  padding-bottom: 5px;
`;

//popup window

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

export const StyledTypography = styled(Typography)`
  &.color-gray {
    color: gray;
  }
`;
