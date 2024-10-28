import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import {
  Button,
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
  padding: 50px;
  background-color: #f1f4f8;
`;

export const StyledHeaderBox = styled(Box)`
  margin-bottom: 30px;
`;

export const StyledTypography = styled(Typography)``;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  gap: 40px;
`;

export const StyledBox = styled(Box)`
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  background-color: white;
  width: -webkit-fill-available;
  padding: 15px;
`;

export const StyledBoxTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const StyledPriceIcon = styled(PriceChangeOutlinedIcon)``;

export const StyledDownIcon = styled(ArrowDownwardOutlinedIcon)``;

export const StyledUpIcon = styled(ArrowUpwardOutlinedIcon)`
  width: 20px !important;
  height: 20px !important;
`;

export const StyledPriceCheckOutlinedIcon = styled(PaidOutlinedIcon)`
  width: 20px !important;
  height: 20px !important;
`;

export const StyledTransactionBox = styled(Box)`
  margin-top: 40px;
`;

export const StyledTransactionHeaderBox = styled(Box)`
  margin-bottom: 10px;
`;

export const StyledFilterStack = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
`;

export const StyledHeaderFieldsBox = styled(Box)`
  width: 180px;
  .css-sc8y68-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    background-color: white;
  }

  .css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10px 5px;
  }
`;

export const StyledTableBox = styled(Box)`
  margin-top: 40px;
  padding-bottom: 30px;
`;

export const StyledTable = styled(Table)``;

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
