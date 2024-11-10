import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLoginStack = styled(Stack)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

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
  margin-top: 70px;
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
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0.8em;
  }
`;
