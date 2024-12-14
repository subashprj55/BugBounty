import BugBox from "Components/BugBox";
import BugDetailsBox from "Components/BugDetailsBox";
import BugNavContainer from "Components/BugNavContainer";
import BugSkeleton from "Components/BugSkeleton";
import BugSnackbar from "Components/BugSnackbar";
import useBounties from "Hooks/useBounties";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Utils/authProvider";
import { filterData } from "Utils/filterData";
import {
  StyledActiveBountiesStack,
  StyledBox,
  StyledBugListBox,
  StyledButton,
  StyledCheckbox,
  StyledErrorBox,
  StyledFilterAltIcon,
  StyledFilterBox,
  StyledFilterHeaderBox,
  StyledFilterStack,
  StyledFormControl,
  StyledFormControlLabel,
  StyledOptionsBox,
  StyledRadio,
  StyledRadioGroup,
  StyledRightBox,
  StyledSelectBox,
  StyledSkeleton,
  StyledTitleBox,
  StyledTypography,
  StyleFormGroup,
} from "./style";

const BugActiveBounties = () => {
  const [deadlineValue, setDeadlineValue] = useState("All");
  const [selectedSeverities, setSelectedSeverities] = useState([]);
  const { data, isLoading, error } = useBounties();
  let filteredData;
  if (data) {
    filteredData = filterData(data, deadlineValue, selectedSeverities);
  }
  return (
    <>
      <BugNavContainer>
        <StyledActiveBountiesStack>
          <FilterSection
            deadlineValue={deadlineValue}
            setDeadlineValue={setDeadlineValue}
            selectedValues={selectedSeverities}
            setSelectedValues={setSelectedSeverities}
            isLoading={isLoading}
            error={error}
          />
          <ActiveBounties
            data={filteredData}
            isLoading={isLoading}
            error={error}
          />
        </StyledActiveBountiesStack>
      </BugNavContainer>
    </>
  );
};

export default BugActiveBounties;

const FilterSection = ({
  deadlineValue,
  setDeadlineValue,
  selectedValues,
  setSelectedValues,
  isLoading,
  error,
}) => {
  const handleChange = (event) => {
    setDeadlineValue(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedValues((prev) => [...prev, name]);
    } else {
      setSelectedValues((prev) => prev.filter((value) => value !== name));
    }
  };

  if (isLoading) {
    return (
      <StyledFilterBox>
        <StyledSkeleton variant="rounded" height={300} />
      </StyledFilterBox>
    );
  }

  if (error) {
    return (
      <StyledFilterBox>
        <StyledSkeleton animation={false} variant="rounded" height={300} />
      </StyledFilterBox>
    );
  }

  return (
    <StyledFilterBox>
      <BugBox>
        <StyledFilterStack>
          <StyledFilterHeaderBox>
            <StyledFilterAltIcon />
            <StyledTypography variant="h2">Filters</StyledTypography>
          </StyledFilterHeaderBox>

          <StyledOptionsBox>
            <StyledBox>
              <StyledTypography variant="h3">Severity</StyledTypography>
              <StyleFormGroup>
                <StyledFormControlLabel
                  control={
                    <StyledCheckbox
                      name="critical"
                      checked={selectedValues.includes("critical")}
                      onChange={handleCheckBoxChange}
                    />
                  }
                  label="Critical"
                />
                <StyledFormControlLabel
                  control={
                    <StyledCheckbox
                      name="medium"
                      checked={selectedValues.includes("medium")}
                      onChange={handleCheckBoxChange}
                    />
                  }
                  label="Medium"
                />
                <StyledFormControlLabel
                  control={
                    <StyledCheckbox
                      name="low"
                      checked={selectedValues.includes("low")}
                      onChange={handleCheckBoxChange}
                    />
                  }
                  label="Low"
                />
              </StyleFormGroup>
            </StyledBox>

            <StyledBox>
              <StyledTypography variant="h3">Deadline</StyledTypography>
              <StyledFormControl>
                <StyledRadioGroup
                  value={deadlineValue}
                  onChange={handleChange}
                  name="row-radio-buttons-group"
                >
                  <StyledFormControlLabel
                    value="All"
                    control={<StyledRadio />}
                    label="All"
                  />
                  <StyledFormControlLabel
                    value="Expiring Soon"
                    control={<StyledRadio />}
                    label="Expiring Soon"
                  />
                  <StyledFormControlLabel
                    value="Less than 7 Days"
                    control={<StyledRadio />}
                    label="Less than 7 Days"
                  />
                  <StyledFormControlLabel
                    value="Less than 30 Days"
                    control={<StyledRadio />}
                    label="Less than 30 Days"
                  />
                </StyledRadioGroup>
              </StyledFormControl>
            </StyledBox>
          </StyledOptionsBox>
        </StyledFilterStack>
      </BugBox>
    </StyledFilterBox>
  );
};

const ActiveBounties = ({ data, isLoading, error }) => {
  const { state } = useAuth();
  const navigate = useNavigate();

  const renderContent = () => {
    if (isLoading) {
      return <>{Array(6).fill(<BugSkeleton />)}</>;
    }

    if (error) {
      return (
        <>
          <BugSnackbar
            status="error"
            snackbarMessage={"Something went wrong. Please try again"}
          />
          {Array(6).fill(<BugSkeleton loading={false} />)}
        </>
      );
    }

    if (!data) {
      return (
        <StyledErrorBox>
          <StyledTypography variant="h1">
            No any Bounty found. Please try again....
          </StyledTypography>
        </StyledErrorBox>
      );
    }

    return (
      <>
        {data?.map(
          ({
            id,
            title,
            description,
            expiry_date,
            rewarded_amount,
            severity,
          }) => {
            return (
              <BugDetailsBox
                key={id}
                id={id}
                title={title}
                description={description}
                expiry_date={expiry_date}
                rewarded_amount={rewarded_amount}
                severity={severity}
              />
            );
          }
        )}
      </>
    );
  };

  return (
    <StyledRightBox>
      <StyledTitleBox>
        <StyledTypography variant="h1">Active Bounties </StyledTypography>
        {state?.user?.role === "client" && (
          <StyledSelectBox>
            <StyledButton
              variant="contained"
              onClick={() => navigate("/bounty/create")}
            >
              Create Bounty
            </StyledButton>
          </StyledSelectBox>
        )}
      </StyledTitleBox>
      <StyledBugListBox>{renderContent()}</StyledBugListBox>
    </StyledRightBox>
  );
};
