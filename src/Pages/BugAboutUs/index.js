import BugInputField from "Components/BugInputField";
import BugNavContainer from "Components/BugNavContainer";
import React from "react";
import { transactionHistoryData } from "./data";
import {
  StyledAboutUsPage,
  StyledBox,
  StyledButton,
  StyledForm,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  StyledTypography,
  StyledWithdrawBox,
  StyledWithdrawSection,
} from "./style";

const BugAboutUs = () => {
  return (
    <>
      <BugNavContainer>
        <StyledAboutUsPage>
          <WithdrawTokenSection />
          <TransactionHistorySection />
        </StyledAboutUsPage>
      </BugNavContainer>
    </>
  );
};

export default BugAboutUs;

const WithdrawTokenSection = () => {
  return (
    <StyledWithdrawSection>
      <StyledTypography variant="h1">Withdraw Tokens</StyledTypography>
      <StyledWithdrawBox>
        <StyledTypography variant="h2">Withdraw XLOP Tokens</StyledTypography>
        <StyledTypography variant="h6" className="color">
          Enter the amount and address to withdraw your tokens
        </StyledTypography>

        <StyledBox>
          <StyledTypography variant="h6" className="bold space">
            Amount (XLOP)
          </StyledTypography>
          <BugInputField type="number" placeholder="Enter Amount" />

          <StyledForm>
            <StyledTypography variant="h6" className="bold space">
              Wallet Address
            </StyledTypography>
            <BugInputField type="email" placeholder="Enter wallet address" />
          </StyledForm>

          <div>
            <StyledButton variant="contained">Withdraw Tokens</StyledButton>
          </div>
        </StyledBox>
      </StyledWithdrawBox>
    </StyledWithdrawSection>
  );
};

const TransactionHistorySection = () => {
  return (
    <StyledWithdrawSection className="space">
      <StyledWithdrawBox>
        <StyledTypography variant="h2">Transaction History</StyledTypography>
        <StyledTypography variant="h6" className="color">
          Recent token withdrawals
        </StyledTypography>

        <StyledBox>
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
        </StyledBox>
      </StyledWithdrawBox>
    </StyledWithdrawSection>
  );
};
