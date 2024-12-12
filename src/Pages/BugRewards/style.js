import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import {
  Button,
  CircularProgress,
  Modal,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "styled-components";

export const StyledRewardPage = styled(Stack)`
  padding: 5%;
  background-color: #f1f4f8;
`;

export const StyledHeaderBox = styled(Box)`
  margin-bottom: 30px;
`;

export const StyledTypography = styled(Typography)``;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 585px) {
    justify-content: center;
  }
`;

export const StyledBox = styled(Box)`
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  background-color: white;
  width: 45%;
  min-width: 200px;
  padding: 15px;
  @media (max-width: 585px) {
    width: 100%;
  }
`;

export const StyledBoxTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledPriceIcon = styled(PriceChangeOutlinedIcon)``;

export const StyledUpIcon = styled(ArrowUpwardOutlinedIcon)`
  width: 25px !important;
  height: 25px !important;
  color: #3dc4b4;
`;

export const StyledPriceCheckOutlinedIcon = styled(PaidOutlinedIcon)`
  width: 25px !important;
  height: 25px !important;
  color: #ff4162;
`;

export const StyledSkeletonBox = styled(Skeleton)`
  width: 45%;
  height: 150px !important;
  padding: 15px;
  @media (max-width: 585px) {
    width: 100%;
  }
`;

// transaction section

export const StyledTransactionBox = styled(Box)`
  margin-top: 40px;
`;

export const StyledTransactionStack = styled(Stack)`
  background-color: white;
`;

export const StyledTransactionHeaderBox = styled(Box)`
  padding-top: 15px;
  padding-left: 30px;
`;

export const StyledTableBox = styled(Box)`
  padding: 15px;
  @media (max-width: 418px) {
    padding: 0;
    padding-top: 5px;
  }
`;

export const StyledTable = styled(Table)`
  margin-bottom: 20px;
`;

export const StyledTableHead = styled(TableHead)``;

export const StyledTableRow = styled(TableRow)``;

export const StyledTableCell = styled(TableCell)`
  &.green {
    color: #16a34a;
  }
  &.red {
    color: #dc2626;
  }
`;

export const StyledTableBody = styled(TableBody)``;

export const StyledButtonBox = styled(Box)`
  margin-top: 40px;
  padding-bottom: 5px;
  display: flex;
  gap: 30px;
`;

export const StyledBottom = styled(Button)`
  width: auto !important;
  display: flex;
  gap: 10px;
`;

export const StyledTableSkeleton = styled(Skeleton)`
  width: 100%;
  height: 300px !important;
`;

export const StyledNoDataBox = styled(Box)`
  padding: 40px;
  text-align: center;
`;

//popUp section

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

export const StyledBottomBox = styled(Box)`
  padding: 5px 0;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledPopUpButton = styled(Button)`
  width: auto !important;
`;

export const StyledPopUpTypography = styled(Typography)`
  color: #898494;
`;

export const StyledPopUpBox = styled(Box)`
  margin-top: 30px;
  padding-bottom: 20px;
`;

export const StyledInputBox = styled(Box)`
  display: flex;
  margin-top: 5px;
`;

export const StyledCircularProgress = styled(CircularProgress)``;
