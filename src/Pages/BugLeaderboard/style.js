import { Avatar, Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "styled-components";

export const StyledLeaderboardPage = styled(Stack)`
  background-color: #f1f4f8;
  padding: 50px;
`;

export const StyledHeaderSection = styled(Stack)``;

export const StyledTypography = styled(Typography)``;

export const StyledHeaderBox = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
`;

export const StyledHeaderFieldsBox = styled(Box)`
  width: 180px;
  .css-sc8y68-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    background-color: white;
  }
`;

export const StyledTopHunterSectionBox = styled(Box)`
  margin-top: 50px;
  background-color: white;
  border-radius: 6px;
  padding: 24px;
`;

export const StyledProfileBox = styled(Box)`
  margin-top: 30px;
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  width: 80px !important;
  height: 80px !important;
`;

export const StyledProfileInfoBox = styled(Box)``;

export const StyledProfileTypography = styled(Typography)`
  line-height: 23px !important;
  &.title {
    font-family: inherit !important;
    font-weight: 600 !important;
    line-height: 20px !important;
  }
  &.number {
    font-family: inherit !important;
    font-weight: 500 !important;
  }
  &.color {
    color: #6b7280;
  }
`;

export const StyledDashboardSection = styled(Stack)`
  margin-top: 50px;
  background-color: white;
  border-radius: 6px;
  padding: 24px;
`;

export const StyledDashboardHeaderBox = styled(Box)``;

export const StyledLeaderboardItems = styled(Box)`
  margin-top: 30px;
`;

export const StyledItem = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
  padding: 5px 15px;
  margin-bottom: 30px;
  border-radius: 6px;
  box-shadow: 1px 5px 5px #f1f1f1;
`;

export const StyledLeftBox = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 30px;
`;

export const StyledRightBox = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 20px;
  padding-bottom: 5px;
`;

export const StyledBoardAvatar = styled(Avatar)`
  width: 40px !important;
  height: 40px !important;
`;

export const StyledBoardProfileBox = styled(Box)`
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
  padding: 7px 10px !important;
`;
