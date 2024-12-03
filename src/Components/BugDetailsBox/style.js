import { Box, Button, Typography } from "@mui/material";
import { styled } from "styled-components";

export const StyledBox = styled(Box)`
  padding: 20px;
  width: 280px;
  max-width: 300px;
`;

export const StyledTypography = styled(Typography)`
  &.col-red {
    color: #dc2626;
  }
  &.col-gray {
    color: #6b7280;
  }
`;

export const StyledBodyBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const StyledBottomBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 5px;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
`;
