import BugBox from "Components/BugBox";
import BugSnackbar from "Components/BugSnackbar";
import { useForm } from "react-hook-form";
import BugLoader from "Components/BugLoader";

import {
  StyledBox,
  StyledButtonStack,
  StyledErrorMessage,
  StyledForm,
  StyledInputBox,
  StyledInputField,
  StyledLoginBox,
  StyledLoginButton,
  StyledLoginStack,
  StyledLoginTypography,
  StyledTypography,
} from "./style";
import useNewPassword from "Hooks/useNewPassword";
import { useNavigate, useParams } from "react-router-dom";

const BugNewPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { mutate, isLoading, error } = useNewPassword(() => {
    // navigate("/login");
  });

  const onSubmit = (data) => {
    const newData = { token, ...data };
    mutate(newData);
  };

  return (
    <>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar status="error" snackbarMessage="Invalid email email" />
      )}
      <StyledLoginStack>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <BugBox>
            <StyledLoginBox>
              <StyledTypography variant="h1" className="center">
                Forgot Password
              </StyledTypography>

              <StyledInputBox>
                <StyledBox>
                  <StyledLoginTypography variant="h3" className="space">
                    Password
                  </StyledLoginTypography>
                  <StyledInputField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter new password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && (
                    <StyledErrorMessage>
                      {errors.password.message}
                    </StyledErrorMessage>
                  )}
                </StyledBox>
                <StyledBox>
                  <StyledLoginTypography variant="h3" className="space">
                    Confirm Password
                  </StyledLoginTypography>
                  <StyledInputField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter confirm password"
                    {...register("confirmPassword", {
                      required: "confirm password is required",
                      validate: (value) =>
                        value === watch("password") ||
                        "Password does not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <StyledErrorMessage>
                      {errors.confirmPassword.message}
                    </StyledErrorMessage>
                  )}
                </StyledBox>
              </StyledInputBox>

              <StyledButtonStack>
                <StyledLoginButton
                  disabled={isLoading ? true : false}
                  type="submit"
                  variant="contained"
                >
                  Reset Password
                </StyledLoginButton>
              </StyledButtonStack>
            </StyledLoginBox>
          </BugBox>
        </StyledForm>
      </StyledLoginStack>
    </>
  );
};

export default BugNewPassword;
