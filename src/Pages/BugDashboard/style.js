import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Button, Chip, Typography } from "@mui/material";

const { Stack } = require("@mui/system");
const { styled } = require("styled-components");

export const StyledDashboardPage = styled(Stack)`
  background-color: #f1f4f8;
`;

export const StyledBoxSection = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
`;

export const StyledBox = styled(Box)`
  background-color: white;
  border-radius: 8px;
  padding: 30px; 30px;
  margin: 50px;
  width: 370px;
`;

export const StyledFlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const StyledTypography = styled(Typography)`
  &.color {
    color: #6b7280 !important;
  }
`;

export const StyledDollarIcon = styled(AttachMoneyIcon)`
  color: #71717a;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
  margin-top: 3px !important;
  padding: 5px 10px !important;
`;

export const StyledRecentActivity = styled(Stack)`
  margin: 0 50px;
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
  width: 370px;
`;
