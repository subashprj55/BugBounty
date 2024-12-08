import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLoginStack = styled(Stack)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form``;

export const StyledLoginBox = styled(Box)`
  width: fit-content;
  padding: 50px 50px;
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

export const StyledBottomBox = styled(Box)`
  margin-top: 20px;
  display: flex;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0.8em;
  }
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

export const StyledButtonStack = styled(Stack)`
  position: relative;
  padding-bottom: 5px;
`;
