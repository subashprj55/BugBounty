import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PestControlIcon from "@mui/icons-material/PestControl";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import { Box, Button, Chip, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const { Stack } = require("@mui/system");
const { styled } = require("styled-components");

export const StyledBoxSection = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
  gap: 3%;
  margin: 50px 4%;
  @media (max-width: 1095px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const StyledBox = styled(Box)`
  background-color: white;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  padding: 30px 30px 15px;
  width: 370px;
  @media (max-width: 955px) {
    width: 350px;
  }
  @media (max-width: 913px) {
    width: 300px;
  }
  @media (max-width: 803px) {
    width: 100%;
  }
`;

export const StyledFlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.space {
    margin-top: 40px;
    padding-bottom: 5px;
  }
`;

export const StyledTypography = styled(Typography)`
  &.color {
    color: #6b7280 !important;
  }
`;

export const StyledDollarIcon = styled(AttachMoneyIcon)`
  color: red;
`;

export const StyledBugIcon = styled(PestControlIcon)`
  color: #3dc4b4;
`;

export const StyledRepeatOneIcon = styled(RepeatOneIcon)`
  color: blue;
  width: 25px !important;
  height: 25px !important;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
  margin-top: 3px !important;
  padding: 5px 10px !important;
`;

//recent activity section

export const StyledRecentActivity = styled(Stack)`
  margin: 0 4%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 50px;
`;

export const StyledActivityBox = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export const StyledDiv = styled.div``;

export const StyledChip = styled(Chip)`
  background-color: #fef9c3 !important;
  &.proved {
    background-color: #dcfce7 !important;
  }
`;

export const StylePerformanceBox = styled(Box)`
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 20px 30px;
  width: 340px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  width: 100%;
`;
