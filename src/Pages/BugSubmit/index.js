import BugBox from "Components/BugBox";
import BugLoader from "Components/BugLoader";
import BugSelectField from "Components/BugSelectFiled";
import BugSnackbar from "Components/BugSnackbar";
import useBounties from "Hooks/useBounties";
import useCreateBug from "Hooks/useCreateBug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledBugSubmitPage,
  StyledButton,
  StyledButtonBox,
  StyledCancelButton,
  StyledErrorMessage,
  StyledFileInput,
  StyledFileName,
  StyledFilePreview,
  StyledFormControlLabel,
  StyledHeaderBox,
  StyledInputBox,
  StyledInputField,
  StyledLabel,
  StyledRadio,
  StyledRadioGroup,
  StyledSubmitForm,
  StyledSubmitFormBox,
  StyledTextarea,
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [uploadedFile, setUploadedFile] = useState(null);
  let BugTitles;
  const { data, error } = useBounties();

  if (data) {
    BugTitles = data.map((item) => ({
      id: item.id,
      title: item.title,
      name: item.created_by.name,
    }));
  }

  const {
    mutate,
    data: bugData,
    isLoading,
    error: bugError,
  } = useCreateBug(() => {
    setTimeout(() => {
      reset();
      navigate(`/bounty/details/${title}`);
    }, 2000);
  });

  const onSubmit = (data) => {
    mutate({ ...data, title, uploadedFile });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleCancelFile = () => {
    setUploadedFile(null);
  };

  return (
    <StyledBugSubmitPage>
      {isLoading && <BugLoader />}
      {bugError && (
        <BugSnackbar
          status="error"
          snackbarMessage="There are some error. Please try again"
        />
      )}
      {bugData && (
        <BugSnackbar snackbarMessage="New bug is created successfully" />
      )}
      <StyledSubmitForm onSubmit={handleSubmit(onSubmit)}>
        <BugBox>
          <StyledSubmitFormBox>
            <StyledHeaderBox>
              <StyledTitleTypography variant="h1">
                Create Bug
              </StyledTitleTypography>
            </StyledHeaderBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Bug Title</StyledTypography>
              <StyledInputField
                name="bugTitle"
                placeholder="Enter a concise title for the bug"
                {...register("bugTitle", {
                  required: "Bounty title is required",
                })}
              />
              {errors.bugTitle && (
                <StyledErrorMessage>
                  {errors.bugTitle.message}
                </StyledErrorMessage>
              )}
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Description</StyledTypography>
              <StyledTextarea
                placeholder="Describe the bug in detail…"
                rows="5"
                name="description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <StyledErrorMessage>
                  {errors.description.message}
                </StyledErrorMessage>
              )}
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Actual Result</StyledTypography>
              <StyledTextarea
                placeholder="Describe the behavior observed when the bug occurs."
                rows="4"
                name="expectedResult"
                {...register("expectedResult")}
              />
              {errors.expectedResult && (
                <StyledErrorMessage>
                  {errors.expectedResult.message}
                </StyledErrorMessage>
              )}
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">
                Steps to Reproduce
              </StyledTypography>
              <StyledTextarea
                placeholder={`Example:
1. Navigate to the home page
2. Click on checkout button
3. etc...`}
                rows="5"
                name="reproduceSteps"
                {...register("reproduceSteps", {
                  required: "Reproduce Steps is required",
                })}
              />
              {errors.reproduceSteps && (
                <StyledErrorMessage>
                  {errors.reproduceSteps.message}
                </StyledErrorMessage>
              )}
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Attachments</StyledTypography>
              <StyledFilePreview>
                <StyledLabel htmlFor="fileUpload">
                  <StyledUploadIcon /> Upload Files
                </StyledLabel>
                <StyledFileInput
                  type="file"
                  id="fileUpload"
                  onChange={handleFileChange}
                />
                {uploadedFile && (
                  <>
                    <StyledFileName>{uploadedFile.name}</StyledFileName>
                    <StyledCancelButton onClick={handleCancelFile}>
                      ✖
                    </StyledCancelButton>
                  </>
                )}
              </StyledFilePreview>
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
              <StyledButton type="submit" variant="contained">
                Submit Bug
              </StyledButton>
            </StyledButtonBox>
          </StyledSubmitFormBox>
        </BugBox>
      </StyledSubmitForm>
    </StyledBugSubmitPage>
  );
};
