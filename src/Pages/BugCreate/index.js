import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import BugNavContainer from "Components/BugNavContainer";
import BugTextArea from "Components/BugTextArea";
import React, { useState } from "react";

import {
  StyledBackButtonBox,
  StyledBugCreatePage,
  StyledButton,
  StyledButtonBox,
  StyledFormControlLabel,
  StyledHeaderBox,
  StyledInputBox,
  StyledRadio,
  StyledRadioGroup,
  StyledSubmitForm,
  StyledSubmitFormBox,
  StyledTitleTypography,
  StyledTypography,
} from "./style";
import BugDatePicker from "Components/BugDatePicker";
import BugBackButton from "Components/BugBackButton";

const BugCreate = () => {
  return (
    <>
      <CreateBugForm />
    </>
  );
};

export default BugCreate;

const CreateBugForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledBugCreatePage>
      <StyledSubmitForm>
        <BugBox>
          <StyledBackButtonBox>
            <BugBackButton />
          </StyledBackButtonBox>
          <StyledSubmitFormBox>
            <StyledHeaderBox>
              <StyledTitleTypography variant="h1">
                Create a new Bug
              </StyledTitleTypography>
            </StyledHeaderBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Bug Title</StyledTypography>
              <BugInputField placeholder="Enter a concise title for the bug" />
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Description</StyledTypography>
              <BugTextArea placeholder="Describe the bug in detail…" />
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3" className="remove-padding">
                Security Level
              </StyledTypography>
              <StyledRadioGroup row name="row-radio-buttons-group">
                <StyledFormControlLabel
                  value="critical"
                  control={<StyledRadio />}
                  label="Critical"
                />
                <StyledFormControlLabel
                  value="medium"
                  control={<StyledRadio />}
                  label="Medium"
                />
                <StyledFormControlLabel
                  value="low"
                  control={<StyledRadio />}
                  label="Low"
                />
              </StyledRadioGroup>
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Expire In</StyledTypography>
              <BugDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Expected Result</StyledTypography>
              <BugTextArea
                rows={4}
                placeholder="Describe the behavior observed when the bug occurs."
              />
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">
                Steps to Reproduce
              </StyledTypography>
              <BugTextArea
                placeholder={`Example:
1. Navigate to the home page
2. Click on checkout button
3. etc...`}
              />
            </StyledInputBox>
            <StyledButtonBox>
              <StyledButton variant="contained">Submit Bug</StyledButton>
            </StyledButtonBox>
          </StyledSubmitFormBox>
        </BugBox>
      </StyledSubmitForm>
    </StyledBugCreatePage>
  );
};
