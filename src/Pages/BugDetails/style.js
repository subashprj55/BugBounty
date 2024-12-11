import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "styled-components";

export const StyledBugDetailsPage = styled(Stack)`
  padding: 20px 5% 40px;
`;

//loading

export const StyledLoadingBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledBugBountyPage = styled(Stack)`
  padding: 0 5% 40px;
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

export const StyledAvatar = styled(Avatar)``;

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

//details section

export const StyledStack = styled(Stack)`
  margin-top: 30px;
`;

export const StyledDetailsBox = styled(Box)`
  padding: 30px 30px;
`;

export const StyledBugSummerySection = styled(Box)`
  margin-top: 10px;
`;

export const StyledBugPendingBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledDetailsTypography = styled(Typography)`
  text-transform: capitalize;
`;

export const StyledStatusTypography = styled(Typography)`
  padding: 2px 4px;
  border-radius: 6px;
  text-transform: capitalize;
  color: white;
  &.open {
    background-color: #39d2c0;
  }
  &.pending {
    background-color: #ff4162;
  }
  &.closed {
    background-color: red;
  }
  &.accepted {
    background-color: #39d2c0;
  }
`;

export const StyledBugItemsBox = styled(Box)`
  padding-top: 5px;
  width: fit-content;
`;

//description

export const StyledDescriptionBox = styled(Box)`
  padding: 30px;
`;

export const StyledDescriptionStack = styled(Stack)`
  padding-top: 5px;
`;

export const StyledBox = styled(Box)`
  margin-top: 20px;
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

//button group

export const StyledGroupButtonBox = styled(Box)`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  padding: 5px;
`;

export const StyledButtonGroup = styled(ButtonGroup)``;

export const StyledButton = styled(Button)`
  border-radius: 0px !important;
  width: 140px !important;
  border-right: 1px solid white !important;
`;

export const StyledIconButton = styled(Button)`
  border-radius: 0px !important;
  width: auto !important;
`;

export const StyledMenu = styled(Menu)``;

export const StyledMenuItem = styled(MenuItem)``;

export const StyledMessageBox = styled(Box)`
  display: flex;
  gap: 10px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #e4e4e7;
`;

export const StyledSuccessIcon = styled(CheckCircleIcon)`
  color: #3dc4b4;
`;
//comment section

export const StyledCommentButton = styled(Button)`
  width: auto !important;
  padding: 0 !important;
  border: none !important;
`;

export const StyledCommentBox = styled(Box)`
  padding-top: 20px;
  display: flex;
  gap: 10px;
`;

export const StyledForm = styled.form``;

export const StyledComment = styled(Box)`
  display: flex;
  gap: 16px;
  background-color: white;
  margin-bottom: 15px;
`;

export const StyledCommentContent = styled(Box)`
  flex: 1;
`;

export const StyledCommentInfoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledTimestamp = styled(Typography)`
  font-size: 0.75rem;
  color: #9e9e9e;
`;

export const StyledAuthorName = styled(Typography)`
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 4px;
`;

export const StyledCommentsBox = styled(Box)`
  padding: 0px 30px 20px;
`;

export const StyledPublishIcon = styled(FileUploadIcon)`
  margin-top: 3px;
  color: #39d2c0;
  width: 40px !important;
  height: 40px !important;
  cursor: pointer;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  width: 40px !important;
  height: 40px !important;
  margin: 0 12 px;
`;

//popUp Modal

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
  &.Cancel {
    background-color: #ff4162; !important;
    color: white !important;
    &:hover{
      background-color: red; !important;
    }
  }
`;
