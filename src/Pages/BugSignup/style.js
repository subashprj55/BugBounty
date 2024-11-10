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
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledSignupBox = styled(Box)`
  width: fit-content;
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
