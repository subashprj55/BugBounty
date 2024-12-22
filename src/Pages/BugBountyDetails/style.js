import {
  Avatar,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const { Box, Stack } = require("@mui/system");
const { styled } = require("styled-components");

//loading
export const StyledLoadingBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledBugBountyPage = styled(Stack)`
  padding: 20px 5% 40px;
`;

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
  &.capitalize {
    text-transform: capitalize;
  }
`;

export const StyledStack = styled(Stack)`
  margin-top: 30px;
`;

// details section
export const StyledDetailsBox = styled(Box)`
  padding: 30px 30px;
`;

export const StyledContainerBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledDetailsItems = styled(Box)`
  width: 350px;
  min-width: 200px;
  @media (max-width: 870px) {
    width: 250px;
  }
  @media (max-width: 650px) {
    width: 200px;
  }
  @media (max-width: 532px) {
    width: 350px;
  }
`;

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
  text-transform: capitalize;
  border-radius: 6px;
  color: white;
  &.open {
    background-color: #978fdc;
  }
  &.pending {
    background-color: #ff4162;
  }
  &.accepted {
    background-color: #39d2c0;
  }
  &.rejected {
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

export const StyledButtons = styled(Button)`
  border-radius: 0px !important;
  width: 140px !important;
  border-right: 1px solid white !important;
`;

export const StyledButtonGroup = styled(ButtonGroup)``;

export const StyledIconButton = styled(Button)`
  border-radius: 1px !important;
  width: auto !important;
`;

export const StyledMenu = styled(Menu)``;

export const StyledMenuItem = styled(MenuItem)``;

//bug section

export const StyledBugStack = styled(Stack)`
  margin-top: 20px;
  padding: 20px;
  padding-bottom: 20px;
  box-shadow: 1px 5px 10px #d7d9db;
  border-radius: 5px;
`;

export const StyledBugSection = styled(Box)`
  background-color: white;
  padding: 30px;
`;

export const StyledBugTitleSection = styled(Box)`
  display: flex;
  gap: 10px;
  align-item: center;
  svg {
    width: 50px;
    height: 50px;
    color: #3dc4b4;
  }
`;

export const StyledAvatar = styled(Avatar)``;

export const StyledBugBox = styled(Box)`
  margin-top: 10px;
`;

export const StyledBugSummerySection = styled(Box)`
  margin-top: 10px;
`;

export const StyledBugItemsBox = styled(Box)`
  padding-top: 5px;
  width: fit-content;
`;

export const StyledBugPendingBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  &.end {
    justify-content: end;
  }
`;

export const StyledBugTypography = styled(Typography)`
  color: black !important;
`;

export const StyledLink = styled(Link)``;

//popup

export const StyledModal = styled(Modal)``;

export const StyledModelBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  width: 600px;
  background-color: white;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const StyledPopUpBox = styled(Box)`
  margin: 15px 0;
`;

export const StyledBottomBox = styled(Box)`
  padding: 5px 0;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledPopUpTypography = styled(Typography)`
  font-weight: 500 !important;
  text-transform: capitalize;
`;

export const StyledPopUpButton = styled(Button)`
  width: auto !important;
  &.delete {
    background-color: #ff4162; !important;
    color: white !important;
    &:hover{
      background-color: red; !important;
    }
  }
`;
