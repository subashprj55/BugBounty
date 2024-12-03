import { Box, Button, Typography } from "@mui/material";
import { styled } from "styled-components";

export const StyledBox = styled(Box)`
  padding: 20px;
  width: 280px;
  @media (max-width: 1037px) {
    width: 250px;
  }
  @media (max-width: 971px) {
    width: 280px;
  }
`;

export const StyledTypography = styled(Typography)`
  &.text {
    text-transform: capitalize;
  }
  &.critical {
    color: #dc2626;
  }
  &.medium {
    color: #c4c10c;
  }
  &.low {
    color: blue;
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
