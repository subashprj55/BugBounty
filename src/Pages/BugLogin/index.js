import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import { HomePageNav } from "Pages/BugHome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <HomePageNav />
      <StyledLoginStack>
        <BugBox>
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
              <BugInputField
                placeholder="Enter your Username"
                value={userName}
                setValue={setUserName}
                required={true}
              />

              <StyledBox>
                <StyledLoginTypography variant="h3" className="space">
                  Password
                </StyledLoginTypography>
                <BugInputField
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  setValue={setPassword}
                />
              </StyledBox>
            </StyledInputBox>

            <StyledLoginButton variant="contained" onClick={handleFormSubmit}>
              Login
            </StyledLoginButton>

            <StyledBottomBox>
              <StyledLink to={"/signup"}>Don't have account?</StyledLink>
              <StyledLink>Forgot Password?</StyledLink>
            </StyledBottomBox>
          </StyledLoginBox>
        </BugBox>
      </StyledLoginStack>
    </>
  );
};

export default BugLogin;
