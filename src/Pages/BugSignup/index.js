import { Controller, useForm } from "react-hook-form";
import BugBox from "Components/BugBox";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Industries, primarySkills } from "./data";
import {
  StyledBottomBox,
  StyledBox,
  StyledBoxModel,
  StyledButton,
  StyledButtonBox,
  StyledButtonStack,
  StyledCheckBox,
  StyledContactMailIcon,
  StyledErrorMessage,
  StyledFooterDiv,
  StyledForm,
  StyledFormControl,
  StyledInputBox,
  StyledInputField,
  StyledInputLabel,
  StyledMenuItem,
  StyledModel,
  StyledModelBodyBox,
  StyledModelBox,
  StyledOTPInput,
  StyledOTPInputContainer,
  StyledSelect,
  StyledSignupBox,
  StyledSignupButton,
  StyledSignupStack,
  StyledSignupTypography,
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "./style";
import useSendSignupOpt from "Hooks/useSendSignupOtp";
import useSignup from "Hooks/useSignup";
import BugSnackbar from "Components/BugSnackbar";
import { useAuth } from "Utils/authProvider";
import BugLoader from "Components/BugLoader";

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
  const [role, setRole] = useState("hunter");
  const [popUpWindow, setPopUpWindow] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const handleRole = (event, newRole) => {
    if (newRole === null) return;
    setRole(newRole);
    setChecked(false);
    setError(false);
    reset();
  };

  const {
    mutate,
    isLoading,
    error: signupError,
  } = useSignup((data) => {
    setUserEmail(data?.email);
    setPopUpWindow(true);
  });

  const onSubmit = (data) => {
    if (!checked) {
      setError(true);
    } else {
      setError(false);

      const finalData = {
        ...data,
        role,
      };
      mutate({ ...finalData });
    }
  };

  const renderInputFields = (userRole) => {
    if (userRole === "hunter") {
      return (
        <>
          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Full Name
            </StyledSignupTypography>
            <StyledInputField
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              {...register("name", {
                required: "Hunter name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
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
                name="skills"
                control={control}
                defaultValue=""
                rules={{
                  required: "Please select one option", // Validation rule for required field
                }}
                render={({ field }) => (
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
            {errors.skills && (
              <StyledErrorMessage>{errors.skills.message}</StyledErrorMessage>
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
              name="name"
              placeholder="Enter your Company Name"
              {...register("name", {
                required: "Company Name is required",
                minLength: {
                  value: 3,
                  message: "Company Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
            )}
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Business Email
            </StyledSignupTypography>
            <StyledInputField
              id="userEmail"
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
                render={({ field }) => (
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
      {isLoading && <BugLoader />}
      {signupError && (
        <BugSnackbar
          snackbarMessage={"Something went wrong. Please try again"}
          status="error"
        />
      )}
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
                  value={role}
                  exclusive
                  onChange={handleRole}
                  aria-label="text alignment"
                >
                  <StyledToggleButton value="hunter" aria-label="left aligned">
                    <StyledSignupTypography>Hunter</StyledSignupTypography>
                  </StyledToggleButton>
                  <StyledToggleButton value="client" aria-label="right aligned">
                    <StyledSignupTypography>Client</StyledSignupTypography>
                  </StyledToggleButton>
                </StyledToggleButtonGroup>
              </StyledBottomBox>

              <StyledInputBox>{renderInputFields(role)}</StyledInputBox>

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

              <StyledButtonStack>
                <StyledSignupButton
                  disabled={isLoading ? true : false}
                  type="submit"
                  variant="contained"
                >
                  Sign Up as {role}
                </StyledSignupButton>
              </StyledButtonStack>
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
      <BugPopupWindow
        popUpModel={popUpWindow}
        setPopUpModel={setPopUpWindow}
        userEmail={userEmail}
      />
    </>
  );
};

export default BugSignup;

const BugPopupWindow = ({ popUpModel, setPopUpModel, userEmail }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input field
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const {
    mutate: otpMutation,
    isLoading,
    error,
  } = useSendSignupOpt((data) => {
    login(data);
    navigate("/dashboard");
  });

  const handleClose = () => {
    setOtp(["", "", "", "", "", ""]);
    setPopUpModel(false);
  };

  const handleSubmit = () => {
    const newOTP = otp.join("");
    otpMutation({ email: userEmail, otp: newOTP });
  };

  return (
    <StyledBoxModel>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar
          snackbarMessage={"Something went wrong. Please confirm OTP code"}
          status="error"
        />
      )}
      <StyledModel open={popUpModel}>
        <StyledModelBox>
          <StyledButton
            onClick={handleClose}
            className="closeButton"
          ></StyledButton>

          <StyledModelBodyBox>
            <StyledContactMailIcon />
            <StyledSignupTypography variant="h1">
              Please check your email
            </StyledSignupTypography>
            <StyledSignupTypography className="color-gray" variant="h6">
              We've send code to {userEmail}
            </StyledSignupTypography>

            <StyledOTPInputContainer>
              {otp.map((digit, index) => (
                <StyledOTPInput
                  key={index}
                  id={`otp-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  variant="outlined"
                  inputProps={{
                    maxLength: 1,
                  }}
                />
              ))}
            </StyledOTPInputContainer>
          </StyledModelBodyBox>

          <StyledButtonBox>
            <StyledButton
              disabled={isLoading ? true : false}
              variant="outlined"
              onClick={handleClose}
            >
              cancel
            </StyledButton>
            <StyledButton
              disabled={isLoading ? true : false}
              variant="contained"
              onClick={handleSubmit}
            >
              Confirm OTP
            </StyledButton>
          </StyledButtonBox>
        </StyledModelBox>
      </StyledModel>
    </StyledBoxModel>
  );
};
