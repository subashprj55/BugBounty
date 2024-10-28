import BugNavContainer from "Components/BugNavContainer";
import BugSelectField from "Components/BugSelectFiled";
import React from "react";
import { transactionHistoryData } from "./data";
import {
  StyledBottom,
  StyledBox,
  StyledBoxTop,
  StyledButtonBox,
  StyledDownIcon,
  StyledFilterStack,
  StyledHeaderBox,
  StyledHeaderFieldsBox,
  StyledPriceCheckOutlinedIcon,
  StyledPriceIcon,
  StyledRewardPage,
  StyledStack,
  StyledTable,
  StyledTableBody,
  StyledTableBox,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  StyledTransactionBox,
  StyledTransactionHeaderBox,
  StyledTypography,
  StyledUpIcon,
} from "./style";

const BugRewards = () => {
  return (
    <>
      <BugNavContainer>
        <StyledRewardPage>
          <HeadingSection />
          <TransactionHistorySection />
          <ButtonsSection />
        </StyledRewardPage>
      </BugNavContainer>
    </>
  );
};

export default BugRewards;

const HeadingSection = () => {
  return (
    <>
      <StyledHeaderBox>
        <StyledTypography variant="h1">Rewards and Tokens</StyledTypography>
      </StyledHeaderBox>

      <StyledStack>
        <StyledBox>
          <StyledBoxTop>
            <StyledTypography>Current Balance</StyledTypography>
            <StyledPriceCheckOutlinedIcon />
          </StyledBoxTop>
          <StyledTypography variant="h1">5,000 xlop tokens</StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledBoxTop>
            <StyledTypography>Current Balance</StyledTypography>
            <StyledUpIcon />
          </StyledBoxTop>
          <StyledTypography variant="h1">7,500 xlop tokens</StyledTypography>
        </StyledBox>
      </StyledStack>
    </>
  );
};

const TransactionHistorySection = () => {
  return (
    <>
      <StyledTransactionBox>
        <StyledBox>
          <StyledTransactionHeaderBox>
            <StyledTypography variant="h2">
              Transaction History
            </StyledTypography>
          </StyledTransactionHeaderBox>
          <StyledFilterStack>
            <StyledHeaderFieldsBox>
              <BugSelectField label={"Filter by type"} />
            </StyledHeaderFieldsBox>

            <StyledHeaderFieldsBox>
              <BugSelectField label="Sort by" />
            </StyledHeaderFieldsBox>
          </StyledFilterStack>

          <StyledTableBox>
            <StyledTable>
              <StyledTableHead>
                <StyledTableRow>
                  <StyledTableCell className="bold">Data</StyledTableCell>
                  <StyledTableCell className="bold">
                    Description
                  </StyledTableCell>
                  <StyledTableCell className="bold">Amount</StyledTableCell>
                  <StyledTableCell className="bold">
                    Balance After
                  </StyledTableCell>
                </StyledTableRow>
              </StyledTableHead>
              <StyledTableBody>
                {transactionHistoryData.map(
                  ({ id, date, description, amount, balanceAfter }) => {
                    return (
                      <StyledTableRow key={id}>
                        <StyledTableCell>{date}</StyledTableCell>
                        <StyledTableCell>{description}</StyledTableCell>
                        <StyledTableCell
                          className={`${amount > 0 ? "green" : "red"}`}
                        >
                          {`${amount > 0 ? "+" : "-"} ${Math.abs(amount)}`}
                        </StyledTableCell>
                        <StyledTableCell>{balanceAfter}</StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                )}
              </StyledTableBody>
            </StyledTable>
          </StyledTableBox>
        </StyledBox>
      </StyledTransactionBox>
    </>
  );
};

const ButtonsSection = () => {
  return (
    <>
      <StyledButtonBox>
        <StyledBottom variant="contained">
          <StyledPriceIcon /> Withdraw Tokens
        </StyledBottom>
        <StyledBottom variant="outlined">
          <StyledDownIcon /> Convert Tokens
        </StyledBottom>
      </StyledButtonBox>
    </>
  );
};
