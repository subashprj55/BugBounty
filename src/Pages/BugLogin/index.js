import BugInputField from "Components/BugInputField";
import React from "react";
import {
  StyledBottomBox,
  StyledBox,
  StyledInputBox,
  StyledLink,
  StyledLoginBox,
  StyledLoginButton,
  StyledLoginStack,
  StyledLoginTypography,
} from "./style";

const BugLogin = () => {
  return (
    <>
      <StyledLoginStack>
        <StyledLoginBox>
          <StyledLoginTypography variant="h1" className="center">
            Login for Xlooop Bug Bounty
          </StyledLoginTypography>
          <StyledLoginTypography variant="h6" className="center">
            Join our community as a hunter or client
          </StyledLoginTypography>

          <StyledInputBox>
            <StyledLoginTypography variant="h3" className="space">
              User Name
            </StyledLoginTypography>
            <BugInputField placeholder="Enter your Username" />

            <StyledBox>
              <StyledLoginTypography variant="h3" className="space">
                Password
              </StyledLoginTypography>
              <BugInputField
                type="password"
                placeholder="Enter your password"
              />
            </StyledBox>
          </StyledInputBox>

          <StyledLoginButton variant="contained">Login</StyledLoginButton>

          <StyledBottomBox>
            <StyledLink to={"/signup"}>Don't have account?</StyledLink>
            <StyledLink>Forgot Password?</StyledLink>
          </StyledBottomBox>
        </StyledLoginBox>
      </StyledLoginStack>
    </>
  );
};

export default BugLogin;
