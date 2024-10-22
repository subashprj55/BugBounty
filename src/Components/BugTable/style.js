import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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

export const StyledTableBody = styled(TableBody)``;
