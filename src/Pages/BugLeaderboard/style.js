import { Avatar, Box, Button, Skeleton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "styled-components";

export const StyledLeaderboardPage = styled(Stack)`
  padding: 4%;
`;

export const StyledHeaderSection = styled(Stack)``;

export const StyledTypography = styled(Typography)``;

export const StyledHeaderBox = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
`;

export const StyledRankBox = styled(Box)`
  @media (max-width: 615px) {
    display: none;
  }
`;

export const StyledHeaderFieldsBox = styled(Box)`
  width: 180px;
  .css-sc8y68-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    background-color: white;
  }
`;

export const StyledTopHunterSectionBox = styled(Box)`
  margin-top: 50px;
`;

export const StyledTopHunterBox = styled(Box)`
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
  text-transform: capitalize;
  &.number {
    font-family: inherit !important;
    font-weight: 500 !important;
  }
  &.color {
    color: #6b7280;
  }
`;

export const StyledTopHunterSkeleton = styled(Skeleton)`
  margin-top: 10px;
  width: 100%;
`;

////////////////////////////////

export const StyledDashboardSection = styled(Stack)`
  margin-top: 50px;
  background-color: white;
  border-radius: 6px;
  padding: 24px;
  @media (max-width: 615px) {
    margin-right: -4%;
    margin-left: -4%;
    padding: 0;
  }
`;

export const StyledDashboardHeaderBox = styled(Box)``;

export const StyledLeaderboardItems = styled(Box)`
  margin-top: 30px;
  max-height: 500px;
  overflow-y: auto;
`;

export const StyledItem = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
  padding: 5px 15px;
  margin-bottom: 30px;
  border-radius: 6px;
  box-shadow: 1px 5px 5px #f1f1f1;
  &:hover {
    box-shadow: 1px 10px 5px #f1f1f1;
    cursor: pointer;
  }
`;

export const StyledLeftBox = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 30px;
`;

export const StyledRightBox = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 40px;
  padding-bottom: 5px;
  @media (max-width: 615px) {
    gap: 5px;
  }
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
