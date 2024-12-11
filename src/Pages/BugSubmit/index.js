import BugBox from "Components/BugBox";
import BugLoader from "Components/BugLoader";
import BugNavContainer from "Components/BugNavContainer";
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
  StyledHeaderBox,
  StyledInputBox,
  StyledInputField,
  StyledLabel,
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
      <BugNavContainer>
        <SubmitBugForm />
      </BugNavContainer>
    </>
  );
};

export default BugSubmit;

const SubmitBugForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [uploadedFile, setUploadedFile] = useState(null);
  const { data, error, isLoading } = useBounties();

  const bounty = data?.find((item) => item.id === id * 1);
  const {
    mutate,
    data: bugData,
    isLoading: bugLoading,
    error: bugError,
  } = useCreateBug(() => {
    setTimeout(() => {
      reset();
      navigate(`/bounty/${id}`);
    }, 2000);
  });

  const onSubmit = (data) => {
    mutate({ ...data, id, uploadedFile });
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
      {isLoading || bugLoading ? <BugLoader /> : ""}
      {bugError || error ? (
        <BugSnackbar
          status="error"
          snackbarMessage="There are some error. Please try again"
        />
      ) : (
        ""
      )}
      {bugData && (
        <BugSnackbar snackbarMessage="New bug is created successfully" />
      )}
      <StyledSubmitForm onSubmit={handleSubmit(onSubmit)}>
        <BugBox>
          <StyledSubmitFormBox>
            <StyledHeaderBox>
              <StyledTitleTypography variant="h1">
                Bug Solution
              </StyledTitleTypography>
            </StyledHeaderBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Bug Title</StyledTypography>
              <StyledInputField
                value={bounty?.title ? bounty.title : ""}
                disabled
                placeholder="Enter a concise title for the bug"
              />
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Solution</StyledTypography>
              <StyledTextarea
                placeholder="Describe the behavior observed when the bug occurs."
                rows="4"
                name="expectedResult"
                {...register("expectedResult", {
                  required: "Solution is required",
                })}
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
