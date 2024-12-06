import BugBox from "Components/BugBox";
import BugDetailsBox from "Components/BugDetailsBox";
import BugNavContainer from "Components/BugNavContainer";
import BugSkeleton from "Components/BugSkeleton";
import BugSnackbar from "Components/BugSnackbar";
import useBounties from "Hooks/useBounties";
import { useAuth } from "Utils/authProvider";
import {
  StyledActiveBountiesStack,
  StyledBottomBox,
  StyledBox,
  StyledBugListBox,
  StyledButton,
  StyledButtonBox,
  StyledCheckbox,
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
  StyledSlider,
  StyledSliderBox,
  StyledTitleBox,
  StyledTypography,
  StyleFormGroup,
} from "./style";

const BugActiveBounties = () => {
  return (
    <>
      <BugNavContainer>
        <StyledActiveBountiesStack>
          <FilterSection />
          <ActiveBounties />
        </StyledActiveBountiesStack>
      </BugNavContainer>
    </>
  );
};

export default BugActiveBounties;

const FilterSection = () => {
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
                  control={<StyledCheckbox />}
                  label="Critical"
                />
                <StyledFormControlLabel
                  control={<StyledCheckbox />}
                  label="High"
                />
                <StyledFormControlLabel
                  control={<StyledCheckbox />}
                  label="Medium"
                />
                <StyledFormControlLabel
                  control={<StyledCheckbox />}
                  label="Low"
                />
              </StyleFormGroup>
            </StyledBox>

            <StyledBox>
              <StyledTypography variant="h3">Deadline</StyledTypography>
              <StyledFormControl>
                <StyledRadioGroup name="row-radio-buttons-group">
                  <StyledFormControlLabel
                    value="all"
                    control={<StyledRadio />}
                    label="All"
                  />
                  <StyledFormControlLabel
                    value="expiring soon"
                    control={<StyledRadio />}
                    label="Expiring Soon"
                  />
                  <StyledFormControlLabel
                    value="less than 7 days"
                    control={<StyledRadio />}
                    label="Less than 7 Days"
                  />
                  <StyledFormControlLabel
                    value="less than 30 days"
                    control={<StyledRadio />}
                    label="Less than 30 Days"
                  />
                </StyledRadioGroup>
              </StyledFormControl>
            </StyledBox>

            {/* <StyledBox>
              <StyledTypography variant="h3">Reward Range</StyledTypography>
              <StyledSliderBox>
                <StyledSlider aria-label="Default" valueLabelDisplay="auto" />
              </StyledSliderBox>

              <StyledButtonBox>
                <StyledButton variant="outlined">Min</StyledButton>
                <StyledButton variant="outlined">Max</StyledButton>
              </StyledButtonBox>
            </StyledBox> */}

            <StyledBox>
              <StyledTypography variant="h3">Category</StyledTypography>
              <StyleFormGroup>
                <StyledFormControlLabel
                  control={<StyledCheckbox />}
                  label="Web Applications"
                />
                <StyledFormControlLabel
                  control={<StyledCheckbox />}
                  label="Mobile Applications"
                />
                <StyledFormControlLabel
                  control={<StyledCheckbox />}
                  label="API"
                />
              </StyleFormGroup>
            </StyledBox>
          </StyledOptionsBox>
        </StyledFilterStack>
      </BugBox>
    </StyledFilterBox>
  );
};

const ActiveBounties = () => {
  const { data, isLoading, error } = useBounties();
  const {
    state: {
      user: { role },
    },
  } = useAuth();

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
        {role === "client" && (
          <StyledSelectBox>
            <StyledButton variant="contained">Create Bug</StyledButton>
          </StyledSelectBox>
        )}
      </StyledTitleBox>
      <StyledBugListBox>{renderContent()}</StyledBugListBox>
      <StyledBottomBox>
        <StyledButton variant="outlined" className="bg-white ">
          Previous
        </StyledButton>
        <StyledButton variant="outlined" className="bg-white ">
          Next
        </StyledButton>
      </StyledBottomBox>
    </StyledRightBox>
  );
};
