import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import BugNavContainer from "Components/BugNavContainer";
import BugSnackbar from "Components/BugSnackbar";
import { format } from "date-fns";
import useReward from "Hooks/useReward";
import useWithdrawAmount from "Hooks/useWithdrawAmount";
import { useState } from "react";
import {
  StyledBottom,
  StyledBottomBox,
  StyledBox,
  StyledBoxTop,
  StyledButtonBox,
  StyledCircularProgress,
  StyledHeaderBox,
  StyledInputBox,
  StyledModal,
  StyledModelBox,
  StyledPopUpBox,
  StyledPopUpButton,
  StyledPopUpTypography,
  StyledPriceCheckOutlinedIcon,
  StyledPriceIcon,
  StyledRewardPage,
  StyledSkeletonBox,
  StyledStack,
  StyledTable,
  StyledTableBody,
  StyledTableBox,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  StyledTableSkeleton,
  StyledTransactionBox,
  StyledTransactionHeaderBox,
  StyledTransactionStack,
  StyledTypography,
  StyledUpIcon,
} from "./style";

const BugRewards = () => {
  const { isLoading, error, data } = useReward();
  return (
    <>
      <BugNavContainer>
        <StyledRewardPage>
          <HeadingSection
            isLoading={isLoading}
            error={error}
            current_reward={data?.current_reward}
            total_reward={data?.total_reward}
          />
          <TransactionHistorySection
            isLoading={isLoading}
            error={error}
            transactionsData={data?.transactions}
          />
          <ButtonsSection isLoading={isLoading} error={error} />
        </StyledRewardPage>
      </BugNavContainer>
    </>
  );
};

export default BugRewards;

const HeadingSection = ({ isLoading, error, current_reward, total_reward }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <StyledSkeletonBox />
          <StyledSkeletonBox />
        </>
      );
    }

    if (error) {
      return (
        <>
          <BugSnackbar
            status="error"
            snackbarMessage={"Something going wrong. Please try again"}
          />
          <StyledSkeletonBox animation={false} />
          <StyledSkeletonBox animation={false} />
        </>
      );
    }

    return (
      <>
        <StyledBox>
          <StyledBoxTop>
            <StyledTypography>Current Balance</StyledTypography>
            <StyledPriceCheckOutlinedIcon />
          </StyledBoxTop>
          <StyledTypography variant="h1">
            {Math.floor(current_reward)} xlop tokens
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledBoxTop>
            <StyledTypography>Total Earned</StyledTypography>
            <StyledUpIcon />
          </StyledBoxTop>
          <StyledTypography variant="h1">
            {Math.floor(total_reward)} xlop tokens
          </StyledTypography>
        </StyledBox>
      </>
    );
  };

  return (
    <>
      <StyledHeaderBox>
        <StyledTypography variant="h1">Rewards and Tokens</StyledTypography>
      </StyledHeaderBox>

      <StyledStack>{renderContent()}</StyledStack>
    </>
  );
};

const TransactionHistorySection = ({ transactionsData, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <StyledTableSkeleton />;
    }

    if (error) {
      return <StyledTableSkeleton animation={false} />;
    }

    return (
      <>
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell className="bold">Data</StyledTableCell>
              <StyledTableCell className="bold">Description</StyledTableCell>
              <StyledTableCell className="bold">Amount</StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <StyledTableBody>
            {transactionsData.map(
              ({ id, created_at, note, amount, transaction_type }) => {
                return (
                  <StyledTableRow key={id}>
                    <StyledTableCell>
                      {format(new Date(created_at), "yyyy-MM-dd")}
                    </StyledTableCell>
                    <StyledTableCell>{note}</StyledTableCell>
                    <StyledTableCell
                      className={`${
                        transaction_type === "credit" ? "green" : "red"
                      }`}
                    >
                      {`${transaction_type === "credit" ? "+" : "-"} ${Math.abs(
                        amount
                      )}`}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }
            )}
          </StyledTableBody>
        </StyledTable>
      </>
    );
  };

  return (
    <>
      <StyledTransactionBox>
        <BugBox>
          <StyledTransactionStack>
            <StyledTransactionHeaderBox>
              <StyledTypography variant="h2">
                Transaction History
              </StyledTypography>
            </StyledTransactionHeaderBox>

            <StyledTableBox>{renderContent()}</StyledTableBox>
          </StyledTransactionStack>
        </BugBox>
      </StyledTransactionBox>
    </>
  );
};

const ButtonsSection = ({ isLoading, error }) => {
  const [isPopUpModelOpen, setIsPopUpModelOpen] = useState(false);
  if (isLoading || error) {
    return <></>;
  }

  return (
    <>
      <StyledButtonBox>
        <StyledBottom
          onClick={() => setIsPopUpModelOpen(true)}
          variant="contained"
        >
          <StyledPriceIcon /> Withdraw Tokens
        </StyledBottom>
        <PopUpModal open={isPopUpModelOpen} setOpen={setIsPopUpModelOpen} />
      </StyledButtonBox>
    </>
  );
};

const PopUpModal = ({ open, setOpen }) => {
  const [amount, setAmount] = useState("");

  const { mutate, data, isLoading, error } = useWithdrawAmount(() => {
    setOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    mutate(amount);
  };
  console.log(error);

  return (
    <>
      {error && (
        <BugSnackbar
          status="error"
          snackbarMessage={"Unable to withdraw your token. Please try again"}
        />
      )}
      {data && (
        <BugSnackbar snackbarMessage={"Withdrawal processed successfully"} />
      )}
      <StyledModal open={open}>
        <StyledModelBox>
          <StyledTypography variant="h2">Withdraw XLOP Tokens</StyledTypography>
          <StyledPopUpTypography variant="h6">
            Enter the amount and address to withdraw your tokens
          </StyledPopUpTypography>

          <StyledPopUpBox>
            <StyledTypography variant="footer">Amount (XLOP)</StyledTypography>
            <StyledInputBox>
              <BugInputField
                placeholder="Enter amount"
                type="number"
                value={amount}
                setValue={setAmount}
              />
              {isLoading && <StyledCircularProgress color="success" />}
            </StyledInputBox>
          </StyledPopUpBox>
          <StyledBottomBox>
            <StyledPopUpButton
              disabled={isLoading ? true : false}
              onClick={handleClose}
              variant="outlined"
            >
              Cancel
            </StyledPopUpButton>
            <StyledPopUpButton
              disabled={isLoading ? true : false}
              onClick={handleSubmit}
              variant="contained"
            >
              Withdraw Tokens
            </StyledPopUpButton>
          </StyledBottomBox>
        </StyledModelBox>
      </StyledModal>
    </>
  );
};
