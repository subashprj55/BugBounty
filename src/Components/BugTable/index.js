import React from "react";
import {
  StyledBox,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  StyledTypography,
} from "./style";
import { format } from "date-fns";

const BugTable = ({ data }) => {
  if (!data || data?.length < 1) {
    return (
      <StyledBox>
        <StyledTypography variant="h2">No any data found</StyledTypography>
      </StyledBox>
    );
  }

  return (
    <>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell className="bold">Data</StyledTableCell>
            <StyledTableCell className="bold">Action</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {data?.map(({ date, reward, action }) => {
            return (
              <StyledTableRow key={date}>
                <StyledTableCell>
                  {format(new Date(date), "yyyy-MM-dd")}
                </StyledTableCell>
                <StyledTableCell>{action}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </StyledTableBody>
      </StyledTable>
    </>
  );
};

export default BugTable;
