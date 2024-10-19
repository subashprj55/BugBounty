import React from "react";
import {
  StyledAppBar,
  StyledButton,
  StyledHomeBox,
  StyledHomePageBox,
  StyledHomeStack,
  StyledHomeTypography,
  StyledHowItWorkItem,
  StyledHowItWorksBox,
  StyledHowItWorksSection,
  StyledHowItWorksTypography,
  StyledImg,
  StyledItemsButton,
  StyledLinksStack,
  StyledLogoBox,
  StyledNavLink,
  StyledPermIdentityIcon,
  StyledStack,
  StyledSuccessBox,
  StyledSuccessSection,
  StyledSuccessStack,
} from "./style";
import logo from "Images/logo.png";
import bugImg from "Images/bug_image.jpg";
import search from "Images/search.png";
import bug from "Images/bug.png";
import reward from "Images/reward.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const BugHome = () => {
  return (
    <StyledHomePageBox>
      <HomePageNav />
      <HomePageSection />
      <HowItWorksSection />
      <SuccessStories />
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

const HowItWorksSection = () => {
  return (
    <>
      <StyledHowItWorksTypography variant="h1" className="title">
        how it works
      </StyledHowItWorksTypography>

      <StyledHowItWorksSection>
        <StyledHowItWorksBox>
          <StyledHowItWorkItem>
            <img src={search} alt="search" />
            <StyledHomeTypography variant="h2">
              Explore Bounties
            </StyledHomeTypography>
          </StyledHowItWorkItem>
          <StyledHowItWorksTypography variant="footer" className="space">
            Find exciting bug bounty programs and <br></br> choose your target.
          </StyledHowItWorksTypography>
          <br />

          <StyledItemsButton variant="contained">
            Explore Bounties
          </StyledItemsButton>
        </StyledHowItWorksBox>

        <StyledHowItWorksBox>
          <StyledHowItWorkItem>
            <img src={bug} alt="bug icon" />
            <StyledHomeTypography variant="h2">
              Submit Bugs
            </StyledHomeTypography>
          </StyledHowItWorkItem>
          <StyledHowItWorksTypography variant="footer" className="space">
            Report vulnerabilities easily through our <br></br> streamlined
            process target.
          </StyledHowItWorksTypography>
          <br />

          <StyledItemsButton variant="contained">Submit Bugs</StyledItemsButton>
        </StyledHowItWorksBox>

        <StyledHowItWorksBox>
          <StyledHowItWorkItem>
            <img src={reward} alt="reward icon" />
            <StyledHomeTypography variant="h2">
              Earn Rewards
            </StyledHomeTypography>
          </StyledHowItWorkItem>
          <StyledHomeTypography variant="footer">
            Get rewarded with xlop tokens for your <br></br> valuable
            contributions.
          </StyledHomeTypography>
          <br />

          <StyledItemsButton variant="contained">View Reward</StyledItemsButton>
        </StyledHowItWorksBox>
      </StyledHowItWorksSection>
    </>
  );
};

const SuccessStories = () => {
  return (
    <StyledSuccessStack>
      <StyledHowItWorksTypography variant="h1" className="title">
        Success Stories
      </StyledHowItWorksTypography>

      <StyledSuccessSection>
        <StyledHowItWorksBox>
          <StyledHowItWorkItem>
            <StyledPermIdentityIcon />
            <StyledSuccessBox>
              <StyledHowItWorksTypography>
                Alice Wonderland
              </StyledHowItWorksTypography>
              <StyledHowItWorksTypography>@alice_w</StyledHowItWorksTypography>
              <StyledHowItWorksTypography>
                "Xlooop has been an amazing platform to hone my skills and earn
                rewards. I've found some critical bugs and the community is
                super supportive!"
              </StyledHowItWorksTypography>
            </StyledSuccessBox>
          </StyledHowItWorkItem>
        </StyledHowItWorksBox>

        <StyledHowItWorksBox>
          <StyledHowItWorkItem>
            <StyledPermIdentityIcon />
            <StyledSuccessBox>
              <StyledHowItWorksTypography>
                Alice Wonderland
              </StyledHowItWorksTypography>
              <StyledHowItWorksTypography>@alice_w</StyledHowItWorksTypography>
              <StyledHowItWorksTypography>
                "Xlooop has been an amazing platform to hone my skills and earn
                rewards. I've found some critical bugs and the community is
                super supportive!"
              </StyledHowItWorksTypography>
            </StyledSuccessBox>
          </StyledHowItWorkItem>
        </StyledHowItWorksBox>
      </StyledSuccessSection>
    </StyledSuccessStack>
  );
};
