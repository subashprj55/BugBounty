import BugBox from "Components/BugBox";
import BugDetailsBox from "Components/BugDetailsBox";
import BugNavContainer from "Components/BugNavContainer";
import BugSelectField from "Components/BugSelectFiled";
import React from "react";
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

            <StyledBox>
              <StyledTypography variant="h3">Reward Range</StyledTypography>
              <StyledSliderBox>
                <StyledSlider aria-label="Default" valueLabelDisplay="auto" />
              </StyledSliderBox>

              <StyledButtonBox>
                <StyledButton variant="outlined">Min</StyledButton>
                <StyledButton variant="outlined">Max</StyledButton>
              </StyledButtonBox>
            </StyledBox>

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
  return (
    <StyledRightBox>
      <StyledTitleBox>
        <StyledTypography variant="h1">Active Bounties </StyledTypography>
        <StyledSelectBox>
          <BugSelectField label={"Sort by"} />
        </StyledSelectBox>
      </StyledTitleBox>

      <StyledBugListBox>
        <BugDetailsBox />
        <BugDetailsBox />
        <BugDetailsBox />
        <BugDetailsBox />
        <BugDetailsBox />
        <BugDetailsBox />
      </StyledBugListBox>

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
