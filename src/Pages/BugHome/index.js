import React from "react";
import {
  StyledAppBar,
  StyledButton,
  StyledDivider,
  StyledFooterBox,
  StyledFooterContainer,
  StyledFooterSection,
  StyledFooterTypography,
  StyledHomeBox,
  StyledHomePageBox,
  StyledHomeStack,
  StyledHomeTypography,
  StyledHowItWorkItem,
  StyledHowItWorksBox,
  StyledHowItWorksSection,
  StyledHowItWorksTypography,
  StyledImg,
  StyledInputBox,
  StyledItemsButton,
  StyledLinksStack,
  StyledLogoBox,
  StyledNavLink,
  StyledPermIdentityIcon,
  StyledStack,
  StyledSubscribeButton,
  StyledSuccessBox,
  StyledSuccessSection,
  StyledSuccessStack,
} from "./style";
import logo from "Images/logo.png";
import bugImg from "Images/bug_image.jpg";
import search from "Images/search.png";
import bug from "Images/bug.png";
import reward from "Images/reward.png";
import { useNavigate } from "react-router-dom";

const BugHome = () => {
  return (
    <StyledHomePageBox>
      <HomePageNav />
      <HomePageSection />
      <HowItWorksSection />
      <SuccessStories />
      <BestHunterPage />
      <FooterSection />
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
            <StyledNavLink to={"/signup"}>Sign Up</StyledNavLink>
          </StyledLinksStack>
        </StyledStack>
      </StyledAppBar>
    </>
  );
};

const HomePageSection = () => {
  const navigate = useNavigate();
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
        <StyledButton variant="contained" onClick={() => navigate("/login")}>
          Get Started
        </StyledButton>
      </StyledHomeBox>

      <StyledHomeBox>
        <img src={bugImg} alt="Bug" />
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
              <StyledHowItWorksTypography className="color">
                @alice_w
              </StyledHowItWorksTypography>
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
              <StyledHowItWorksTypography className="color">
                @alice_w
              </StyledHowItWorksTypography>
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

const BestHunterPage = () => {
  return (
    <StyledSuccessStack>
      <StyledHowItWorksTypography variant="h1" className="title">
        Hunter of the Month
      </StyledHowItWorksTypography>

      <StyledHowItWorksSection>
        <StyledHowItWorksBox>
          <StyledHowItWorkItem>
            <StyledPermIdentityIcon className="size" />
            <StyledSuccessBox>
              <StyledHowItWorksTypography className="bold">
                Alice Wonderland
              </StyledHowItWorksTypography>
              <StyledHowItWorksTypography>@alice_w</StyledHowItWorksTypography>
              <StyledHowItWorksTypography className="bold">
                50,000 xlop tokens earned
              </StyledHowItWorksTypography>
            </StyledSuccessBox>
          </StyledHowItWorkItem>
        </StyledHowItWorksBox>
      </StyledHowItWorksSection>
    </StyledSuccessStack>
  );
};

const FooterSection = () => {
  return (
    <>
      <StyledFooterSection>
        <StyledFooterContainer>
          <StyledFooterBox>
            <StyledFooterTypography variant="h2" className="space">
              Quick Links
            </StyledFooterTypography>
            <StyledFooterTypography>Guidelines</StyledFooterTypography>
            <StyledFooterTypography>FAQs</StyledFooterTypography>
            <StyledFooterTypography>Contact Support</StyledFooterTypography>
          </StyledFooterBox>

          <StyledFooterBox>
            <StyledFooterTypography variant="h2" className="space">
              Legal
            </StyledFooterTypography>
            <StyledFooterTypography>Terms of Service</StyledFooterTypography>
            <StyledFooterTypography>Privacy Policy</StyledFooterTypography>
          </StyledFooterBox>

          <StyledFooterBox>
            <StyledFooterTypography variant="h2" className="space">
              Connect
            </StyledFooterTypography>
            <StyledFooterTypography>Twitter</StyledFooterTypography>
            <StyledFooterTypography>LinkedIn</StyledFooterTypography>
            <StyledFooterTypography>GitHub</StyledFooterTypography>
          </StyledFooterBox>

          <StyledFooterBox>
            <StyledFooterTypography variant="h2" className="space">
              NewsLetter
            </StyledFooterTypography>
            <StyledFooterTypography>
              Stay updated with the latest bounties <br /> and features.
            </StyledFooterTypography>
            <StyledInputBox>
              <input type="text" />
              <StyledSubscribeButton>Subscribe</StyledSubscribeButton>
            </StyledInputBox>
          </StyledFooterBox>
        </StyledFooterContainer>
        <StyledDivider />

        <StyledFooterTypography className="center">
          © 2024 Xlooop Bug Bounty. All rights reserved.
        </StyledFooterTypography>
      </StyledFooterSection>
    </>
  );
};
