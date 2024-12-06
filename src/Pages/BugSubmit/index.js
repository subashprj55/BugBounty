import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import BugNavContainer from "Components/BugNavContainer";
import BugSelectField from "Components/BugSelectFiled";
import BugTextArea from "Components/BugTextArea";
import useBounties from "Hooks/useBounties";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledBugSubmitPage,
  StyledButton,
  StyledButtonBox,
  StyledFileInput,
  StyledFormControlLabel,
  StyledHeaderBox,
  StyledInputBox,
  StyledLabel,
  StyledRadio,
  StyledRadioGroup,
  StyledSubmitForm,
  StyledSubmitFormBox,
  StyledTitleTypography,
  StyledTypography,
  StyledUploadIcon,
} from "./style";

const BugSubmit = () => {
  return (
    <>
      <SubmitBugForm />
    </>
  );
};

export default BugSubmit;

const SubmitBugForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState(id);
  const navigate = useNavigate();

  let BugTitles;
  const { data, error } = useBounties();

  if (data) {
    BugTitles = data.map((item) => ({
      id: item.id,
      title: item.title,
      name: item.created_by.name,
    }));
  }

  return (
    <StyledBugSubmitPage>
      <StyledSubmitForm>
        <BugBox>
          <StyledSubmitFormBox>
            <StyledHeaderBox>
              <StyledTitleTypography variant="h1">
                Submit Form
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
              <StyledTypography variant="h3">Actual Result</StyledTypography>
              <BugTextArea placeholder="Describe the behavior observed when the bug occurs." />
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">
                Steps to Reproduce
              </StyledTypography>
              <StyledTypography variant="h6" className="color">
                1. Navigate to the home page
              </StyledTypography>
              <StyledTypography variant="h6" className="color">
                2. Click on checkout button
              </StyledTypography>
              <StyledTypography variant="h6" className="color">
                3. etc...
              </StyledTypography>
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Attachments</StyledTypography>
              <StyledLabel htmlFor="fileUpload">
                <StyledUploadIcon /> Upload Files
              </StyledLabel>
              <StyledFileInput type="file" id="fileUpload" />
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
              <StyledTypography variant="h3">Related Bounty</StyledTypography>
              <BugSelectField
                options={BugTitles}
                selectValue={title}
                setSelectValue={setTitle}
                label="Select one Bug"
              />
            </StyledInputBox>

            <StyledButtonBox>
              <StyledButton
                onClick={() => navigate(-1)}
                variant="outlined"
                className="cancel-button"
              >
                Cancel
              </StyledButton>
              <StyledButton variant="contained">Submit Bug</StyledButton>
            </StyledButtonBox>
          </StyledSubmitFormBox>
        </BugBox>
      </StyledSubmitForm>
    </StyledBugSubmitPage>
  );
};
