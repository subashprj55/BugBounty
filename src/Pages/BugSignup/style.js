import {
  Box,
  Button,
  Checkbox,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "styled-components";

export const StyledSignupStack = styled(Stack)`
  background-color: #f1f1f1;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledSignupBox = styled(Box)`
  background-color: white;
  width: fit-content;
  border: 2px solid #e4e4e7;
  border-radius: 10px;
  padding: 30px 50px;
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
  margin-top: 15px;
`;

export const StyledSignupButton = styled(Button)``;

export const StyledCheckBox = styled(Checkbox)``;

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
