import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "styled-components";

export const StyledTable = styled(Table)``;

export const StyledTableHead = styled(TableHead)``;

export const StyledTableRow = styled(TableRow)``;

export const StyledTableCell = styled(TableCell)`
  border: none !important;
  &.bold {
    font-weight: 600;
  }
`;

export const StyledTableBody = styled(TableBody)`
  height: 100px !important;
  max-height: 100px !important;
  overflow-y: scroll;
`;

export const StyledTableBox = styled(Box)``;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
`;
