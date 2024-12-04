import { Button, Grid, Typography } from "@mui/material";

const { Box, Stack } = require("@mui/system");
const { styled } = require("styled-components");

export const StyledBugBountyPage = styled(Stack)`
  padding: 0 5% 40px;
`;

//back button section

//title section

export const StyledTitleSection = styled(Box)`
  padding-top: 30px;
  display: flex;
  gap: 10px;
  align-item: center;
  svg {
    width: 50px;
    height: 50px;
    color: #3dc4b4;
  }
`;

export const StyledTitleBox = styled(Box)``;

export const StyledTypography = styled(Typography)`
  span {
    color: gray;
    font-style: italic;
    padding-right: 1px;
  }
`;

export const StyledStack = styled(Stack)`
  margin-top: 50px;
`;

// details section
export const StyledDetailsBox = styled(Box)`
  padding: 30px 30px;
`;

export const StyledGrid = styled(Grid)``;

export const StyledDetailRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StyledBox = styled(Box)`
  margin-top: 20px;
`;

export const StyledDetailsTypography = styled(Typography)`
  text-transform: capitalize;
`;

export const StyledPriorityTypography = styled(Typography)`
  text-transform: capitalize;
  &.critical {
    color: #dc2626;
  }
  &.medium {
    color: #42c0d6;
  }
  &.low {
    color: #4287d6;
  }
`;

export const StyledStatusTypography = styled(Typography)`
  padding: 2px 4px;
  border-radius: 6px;
  color: white;
  &.open {
    background-color: #39d2c0;
  }
  &.closed {
    background-color: red;
  }
`;

//description

export const StyledDescriptionBox = styled(Box)`
  padding: 30px 30px;
`;

export const StyledDescriptionStack = styled(Stack)`
  padding-top: 5px;
`;

//reproduce section

export const StyledReproduceBox = styled(Box)`
  padding: 30px 30px;
`;

export const StyledItemsBox = styled(Box)`
  padding-top: 10px;
`;

export const StyledReproduceStack = styled(Stack)`
  span {
    line-height: 23px;
  }
`;

//button section

export const StyledButtonSection = styled(Box)`
  padding: 5px;
  display: flex;
  justify-content: end;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
`;
