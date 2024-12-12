import BugBox from "Components/BugBox";
import { Controller, useForm } from "react-hook-form";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

import {
  StyleAmountBox,
  StyledBackButtonBox,
  StyledBugCreatePage,
  StyledButton,
  StyledButtonBox,
  StyledCancelButton,
  StyledDatePicker,
  StyledDatePickerBox,
  StyledErrorMessage,
  StyledFileInput,
  StyledFileName,
  StyledFilePreview,
  StyledFormControlLabel,
  StyledHeaderBox,
  StyledIconButton,
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
  StyleSpan,
} from "./style";
import BugBackButton from "Components/BugBackButton";
import useCreateBounty from "Hooks/useCreateBounty";
import BugLoader from "Components/BugLoader";
import BugSnackbar from "Components/BugSnackbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BugNavContainer from "Components/BugNavContainer";

const BugCreateBounty = () => {
  return (
    <>
      <BugNavContainer>
        <CreateBugForm />
      </BugNavContainer>
    </>
  );
};

export default BugCreateBounty;

const CreateBugForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);

  const { mutate, data, isLoading, error } = useCreateBounty(() => {
    setTimeout(() => {
      reset();
      navigate("/bounties");
    }, 2000);
  });

  const onSubmit = (data) => {
    mutate({ ...data, uploadedFile });
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
    <StyledBugCreatePage>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar
          status="error"
          snackbarMessage="There are some error. Please try again"
        />
      )}
      {data && (
        <BugSnackbar snackbarMessage="New bounty is created successfully" />
      )}
      <StyledSubmitForm onSubmit={handleSubmit(onSubmit)}>
        <BugBox>
          <StyledBackButtonBox>
            <BugBackButton />
          </StyledBackButtonBox>
          <StyledSubmitFormBox>
            <StyledHeaderBox>
              <StyledTitleTypography variant="h1">
                Create a new Bounty
              </StyledTitleTypography>
            </StyledHeaderBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Bounty Title</StyledTypography>
              <StyledInputField
                name="bugTitle"
                placeholder="Enter a concise title for the bounty"
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
              <StyledTypography variant="h3" className="remove-padding">
                Security Level
              </StyledTypography>
              <Controller
                name="security"
                control={control}
                defaultValue="" // Default value for the radio group
                rules={{ required: "security is required" }} // Validation rule
                render={({ field }) => (
                  <StyledRadioGroup
                    {...field} // Connect the Controller to the RadioGroup
                    row
                    name="row-radio-buttons-group"
                  >
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
                )}
              />
              {errors.security && (
                <StyledErrorMessage>
                  {errors.security.message}
                </StyledErrorMessage>
              )}
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Expire Date</StyledTypography>
              <StyledDatePickerBox>
                <Controller
                  name="selectedDate"
                  control={control}
                  rules={{
                    required: "Date and time are required",
                  }}
                  render={({ field }) => (
                    <StyledDatePicker
                      {...field}
                      closeOnScroll={true}
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      showTimeSelect
                      timeFormat="h:mm aa" // Time format (24-hour)
                      timeIntervals={30} // Interval between time options (e.g., 15 minutes)
                      dateFormat="MMMM d, yyyy h:mm aa" // Custom format for date and time
                      placeholderText="Select a date and time"
                      renderCustomHeader={({
                        date,
                        decreaseYear,
                        increaseYear,
                        decreaseMonth,
                        increaseMonth,
                      }) => (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.5rem",
                          }}
                        >
                          {/* Decrease Year Button */}
                          <StyledIconButton onClick={decreaseYear}>
                            <ChevronLeft />
                          </StyledIconButton>

                          {/* Month and Year Display */}
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <StyledIconButton onClick={decreaseMonth}>
                              <ChevronLeft />
                            </StyledIconButton>

                            <span style={{ margin: "0 10px" }}>
                              {date.toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                              })}
                            </span>

                            <StyledIconButton onClick={increaseMonth}>
                              <ChevronRight />
                            </StyledIconButton>
                          </div>

                          {/* Increase Year Button */}
                          <StyledIconButton onClick={increaseYear}>
                            <ChevronRight />
                          </StyledIconButton>
                        </div>
                      )}
                    />
                  )}
                />
                {errors.selectedDate && (
                  <StyledErrorMessage>
                    {errors.selectedDate.message}
                  </StyledErrorMessage>
                )}
              </StyledDatePickerBox>
            </StyledInputBox>

            <StyledInputBox>
              <StyledTypography variant="h3">Expected Result</StyledTypography>
              <StyledTextarea
                placeholder="Describe the behavior observed when the bug occurs."
                rows="4"
                name="expectedResult"
                {...register("expectedResult", {
                  required: "Expected Result name is required",
                })}
              />
              {errors.expectedResult && (
                <StyledErrorMessage>
                  {errors.expectedResult.message}
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
              <StyledTypography variant="h3">Reward Amount</StyledTypography>
              <StyleAmountBox>
                <StyledInputField
                  className="width"
                  type={"number"}
                  name="rewarded_amount"
                  placeholder="Enter reward amount"
                  {...register("rewarded_amount", {
                    required: "Bounty title is required",
                  })}
                />
                {errors.rewarded_amount && (
                  <StyledErrorMessage>
                    {errors.rewarded_amount.message}
                  </StyledErrorMessage>
                )}
                <StyleSpan>$</StyleSpan>
              </StyleAmountBox>
            </StyledInputBox>

            <StyledButtonBox>
              <StyledButton variant="contained" type="submit">
                Submit Bug
              </StyledButton>
            </StyledButtonBox>
          </StyledSubmitFormBox>
        </BugBox>
      </StyledSubmitForm>
    </StyledBugCreatePage>
  );
};
