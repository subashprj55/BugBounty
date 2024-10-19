import React from "react";
import {
  StyledAppBar,
  StyledButton,
  StyledHomeBox,
  StyledHomePageBox,
  StyledHomeStack,
  StyledHomeTypography,
  StyledImg,
  StyledLinksStack,
  StyledLogoBox,
  StyledNavLink,
  StyledStack,
} from "./style";
import logo from "Images/logo.png";
import bugImg from "Images/bug_image.jpg";

const BugHome = () => {
  return (
    <StyledHomePageBox>
      <HomePageNav />
      <HomePageSection />
    </StyledHomePageBox>
  );
};

export default BugHome;

const HomePageNav = () => {
  return (
    <>
      <StyledAppBar>
        <StyledStack>
          <StyledLogoBox>
            <StyledImg src={logo} alt="logo" />
          </StyledLogoBox>
          {/*  this links display on tab and laptop version */}
          <StyledLinksStack>
            <StyledNavLink to={"/"}>Sign Up</StyledNavLink>
          </StyledLinksStack>
        </StyledStack>
      </StyledAppBar>
    </>
  );
};

const HomePageSection = () => {
  return (
    <StyledHomeStack>
      <StyledHomeBox>
        <StyledHomeTypography variant="h1">
          Earn Rewards for Finding Bugs!
        </StyledHomeTypography>
        <StyledHomeTypography>
          Join the Xlooop Bug Bounty Program and start earning xlop{" "}
        </StyledHomeTypography>
        <StyledHomeTypography>
          Tokens for reporting vulnerabilities.
        </StyledHomeTypography>
        <StyledButton variant="contained">Get Started</StyledButton>
      </StyledHomeBox>

      <StyledHomeBox>
        <img src={bugImg} alt="Bug Image" />
      </StyledHomeBox>
    </StyledHomeStack>
  );
};
