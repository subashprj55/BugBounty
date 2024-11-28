import { Controller, useForm } from "react-hook-form";
import BugBox from "Components/BugBox";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Industries, primarySkills } from "./data";
import {
  StyledBottomBox,
  StyledBox,
  StyledCheckBox,
  StyledErrorMessage,
  StyledFooterDiv,
  StyledForm,
  StyledFormControl,
  StyledInputBox,
  StyledInputField,
  StyledInputLabel,
  StyledMenuItem,
  StyledSelect,
  StyledSignupBox,
  StyledSignupButton,
  StyledSignupStack,
  StyledSignupTypography,
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "./style";

const BugSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [checked, setChecked] = React.useState(false);
  const [error, setError] = useState(false);
  const [alignment, setAlignment] = useState("Hunter");
  const navigate = useNavigate();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setChecked(false);
    setError(false);
    reset();
  };

  const onSubmit = (data) => {
    if (!checked) {
      setError(true);
    } else {
      setError(false);
      console.log("Form Data:", data);
    }
  };

  const renderInputFields = (alignmentValue) => {
    if (alignmentValue === "Hunter") {
      return (
        <>
          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Full Name
            </StyledSignupTypography>
            <StyledInputField
              id="name"
              name="hunterName"
              placeholder="Enter your Full Name"
              {...register("hunterName", {
                required: "Hunter name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.hunterName && (
              <StyledErrorMessage>
                {errors.hunterName.message}
              </StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Email
            </StyledSignupTypography>
            <StyledInputField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Password
            </StyledSignupTypography>
            <StyledInputField
              id="password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Primary Skills
            </StyledSignupTypography>

            <StyledFormControl fullWidth>
              <StyledInputLabel id="demo-simple-select-label">
                Select your primary skill
              </StyledInputLabel>
              <Controller
                name="primarySkill"
                control={control}
                defaultValue=""
                rules={{
                  required: "Please select one option", // Validation rule for required field
                }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <StyledSelect
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select your primary skill"
                    >
                      {primarySkills.map(({ id, name, value }) => (
                        <StyledMenuItem key={id} value={value}>
                          {name}
                        </StyledMenuItem>
                      ))}
                    </StyledSelect>
                  </>
                )}
              />
            </StyledFormControl>
            {errors.primarySkill && (
              <StyledErrorMessage>
                {errors.primarySkill.message}
              </StyledErrorMessage> // Display error message
            )}
          </StyledBox>
        </>
      );
    } else {
      return (
        <>
          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Company Name
            </StyledSignupTypography>
            <StyledInputField
              id="name"
              name="clientName"
              placeholder="Enter your Company Name"
              {...register("clientName", {
                required: "Company Name is required",
                minLength: {
                  value: 3,
                  message: "Company Name must be at least 3 characters",
                },
              })}
            />
            {errors.clientName && (
              <StyledErrorMessage>
                {errors.clientName.message}
              </StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Business Email
            </StyledSignupTypography>
            <StyledInputField
              id="userEmail"
              name="userEmail"
              type="email"
              placeholder="Enter your email"
              {...register("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.userEmail && (
              <StyledErrorMessage>
                {errors.userEmail.message}
              </StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Password
            </StyledSignupTypography>
            <StyledInputField
              id="password"
              type="password"
              name="userPassword"
              placeholder="Enter your Password"
              {...register("userPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.userPassword && (
              <StyledErrorMessage>
                {errors.userPassword.message}
              </StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Industry
            </StyledSignupTypography>
            <StyledFormControl fullWidth>
              <StyledInputLabel id="demo-simple-select-label">
                Select your industry
              </StyledInputLabel>
              <Controller
                name="industry"
                control={control}
                defaultValue=""
                rules={{
                  required: "Please select one option", // Validation rule for required field
                }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <StyledSelect
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select your industry"
                    >
                      {Industries.map(({ id, name, value }) => (
                        <StyledMenuItem key={id} value={value}>
                          {name}
                        </StyledMenuItem>
                      ))}
                    </StyledSelect>
                  </>
                )}
              />
            </StyledFormControl>
            {errors.industry && (
              <StyledErrorMessage>{errors.industry.message}</StyledErrorMessage> // Display error message
            )}
          </StyledBox>
        </>
      );
    }
  };

  return (
    <>
      <StyledSignupStack>
        <BugBox>
          <StyledSignupBox>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <StyledSignupTypography variant="h1" className="center">
                Sign Up for Xlooop Bug Bounty
              </StyledSignupTypography>
              <StyledSignupTypography variant="h6" className="center">
                Join our community as a hunter or client
              </StyledSignupTypography>

              <StyledBottomBox>
                <StyledToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <StyledToggleButton value="Hunter" aria-label="left aligned">
                    <StyledSignupTypography>Hunter</StyledSignupTypography>
                  </StyledToggleButton>
                  <StyledToggleButton value="Client" aria-label="right aligned">
                    <StyledSignupTypography>Client</StyledSignupTypography>
                  </StyledToggleButton>
                </StyledToggleButtonGroup>
              </StyledBottomBox>

              <StyledInputBox>{renderInputFields(alignment)}</StyledInputBox>

              <StyledBottomBox>
                <StyledCheckBox
                  className={error && !checked ? "error" : ""}
                  color="default"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <StyledSignupTypography>
                  I agree to the terms and conditions
                </StyledSignupTypography>
              </StyledBottomBox>

              <StyledSignupButton type="submit" variant="contained">
                Sign Up as {alignment}
              </StyledSignupButton>
            </StyledForm>

            <StyledFooterDiv>
              <StyledSignupTypography>
                Already have an account{" "}
              </StyledSignupTypography>
              <Link to="/login">?Login</Link>
            </StyledFooterDiv>
          </StyledSignupBox>
        </BugBox>
      </StyledSignupStack>
    </>
  );
};

export default BugSignup;
