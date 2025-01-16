import BugBox from "Components/BugBox";
import BugLoader from "Components/BugLoader";
import BugSnackbar from "Components/BugSnackbar";
import useLogin from "Hooks/useLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Utils/authProvider";
import {
  StyledBottomBox,
  StyledBox,
  StyledButtonStack,
  StyledErrorMessage,
  StyledForm,
  StyledInputBox,
  StyledInputField,
  StyledLink,
  StyledLoginBox,
  StyledLoginButton,
  StyledLoginStack,
  StyledLoginTypography,
} from "./style";

const BugLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const navigate = useNavigate();
  const { mutate, isLoading, error } = useLogin((data) => {
    login(data);
    navigate("/dashboard");
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar
          status="error"
          snackbarMessage="Invalid email or password"
        />
      )}
      <StyledLoginStack>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <BugBox>
            <StyledLoginBox>
              <StyledLoginTypography variant="h1" className="center">
                Login for Xlooop Bug Bounty
              </StyledLoginTypography>
              <StyledLoginTypography variant="h6" className="center">
                Join our community as a hunter or client
              </StyledLoginTypography>

              <StyledInputBox>
                <StyledBox>
                  <StyledLoginTypography variant="h3" className="space">
                    Email
                  </StyledLoginTypography>
                  <StyledInputField
                    id="userEmail"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <StyledErrorMessage>
                      {errors.email.message}
                    </StyledErrorMessage>
                  )}
                </StyledBox>

                <StyledBox>
                  <StyledLoginTypography variant="h3" className="space">
                    Password
                  </StyledLoginTypography>
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
                    <StyledErrorMessage>
                      {errors.password.message}
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
                  Login
                </StyledLoginButton>
              </StyledButtonStack>

              <StyledBottomBox>
                <StyledLink to={"/signup"}>Don't have account?</StyledLink>
                <StyledLink to={"/forgotPassword"}>Forgot password</StyledLink>
              </StyledBottomBox>
            </StyledLoginBox>
          </BugBox>
        </StyledForm>
      </StyledLoginStack>
    </>
  );
};

export default BugLogin;
