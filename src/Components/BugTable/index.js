import React from "react";
import { transactionHistoryData } from "./data";
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
} from "./style";

const BugTable = () => {
  return (
    <>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell className="bold">Data</StyledTableCell>
            <StyledTableCell className="bold">Amount</StyledTableCell>
            <StyledTableCell className="bold">Status</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {transactionHistoryData.map(({ id, data, amount, status }) => {
            return (
              <StyledTableRow key={id}>
                <StyledTableCell>{data}</StyledTableCell>
                <StyledTableCell>{amount}</StyledTableCell>
                <StyledTableCell>{status}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </StyledTableBody>
      </StyledTable>
    </>
  );
};

export default BugTable;
