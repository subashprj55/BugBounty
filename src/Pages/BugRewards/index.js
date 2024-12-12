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
  StyledForm,
  StyledHeaderBox,
  StyledInputBox,
  StyledModal,
  StyledModelBox,
  StyledNoDataBox,
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
          <StyledSkeletonBox variant="rounded" />
          <StyledSkeletonBox variant="rounded" />
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
          <StyledSkeletonBox variant="rounded" animation={false} />
          <StyledSkeletonBox variant="rounded" animation={false} />
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
  if (transactionsData?.length === 0) {
    return (
      <StyledTransactionBox>
        <BugBox>
          <StyledTransactionStack>
            <StyledNoDataBox>
              <StyledTypography variant="h2">
                No transaction records available yet
              </StyledTypography>
            </StyledNoDataBox>
          </StyledTransactionStack>
        </BugBox>
      </StyledTransactionBox>
    );
  }

  const renderContent = () => {
    if (isLoading) {
      return <StyledTableSkeleton height={200} variant="rounded" />;
    }

    if (error) {
      return (
        <StyledTableSkeleton animation={false} height={200} variant="rounded" />
      );
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
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate, data, isLoading, error } = useWithdrawAmount(() => {
    setOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      setErrorMessage("Please enter a amount");
      return;
    }
    if (amount < 0) {
      setErrorMessage("Amount must be positive number");
      return;
    }
    mutate(amount);
  };

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
        <StyledForm onSubmit={handleSubmit}>
          <StyledModelBox>
            <StyledTypography variant="h2">
              Withdraw XLOP Tokens
            </StyledTypography>
            <StyledPopUpTypography variant="h6">
              Enter the amount and address to withdraw your tokens
            </StyledPopUpTypography>

            <StyledPopUpBox>
              <StyledTypography variant="footer">
                Amount (XLOP)
              </StyledTypography>
              <StyledInputBox>
                <BugInputField
                  placeholder="Enter amount"
                  type="number"
                  value={amount}
                  setValue={setAmount}
                />
                <br />
                <StyledTypography className="error" variant="footer">
                  {errorMessage}
                </StyledTypography>
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
                variant="contained"
                className="submit-button"
                type="submit"
              >
                {isLoading ? (
                  <StyledCircularProgress color="success" />
                ) : (
                  "Withdraw Tokens"
                )}
              </StyledPopUpButton>
            </StyledBottomBox>
          </StyledModelBox>
        </StyledForm>
      </StyledModal>
    </>
  );
};
