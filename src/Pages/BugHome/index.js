import React, { useState } from "react";
import {
  StyledAppBar,
  StyledAvatar,
  StyledButton,
  StyledDashboardIcon,
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
  StyledLinksTypography,
  StyledListItemIcon,
  StyledLogoBox,
  StyledLogout,
  StyledMenu,
  StyledMenuItem,
  StyledNavDivider,
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
import { Link, useNavigate } from "react-router-dom";
import BugBox from "Components/BugBox";
import profile from "Images/profile.png";
import { useAuth } from "Utils/authProvider";
import useLogout from "Hooks/useLogout";
import BugLoader from "Components/BugLoader";
import BugSnackbar from "Components/BugSnackbar";

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

export const HomePageNav = () => {
  const { state, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const { mutate, isLoading, error } = useLogout(
    (data) => {
      logout();
      navigate("/");
    },
    (error) => {
      logout();
      navigate("/");
    }
  );

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (to) => {
    navigate(to);
  };

  const render = (isAuthenticated) => {
    if (isAuthenticated) {
      return (
        <StyledLinksStack>
          <StyledAvatar
            alt="user"
            src={profile}
            id="basic-button"
            onClick={handleClick}
          />
          <StyledMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <StyledLinksTypography variant="h3">
                {state.user.name}
              </StyledLinksTypography>
            </StyledMenuItem>
            <StyledNavDivider />

            <StyledMenuItem onClick={() => handleButtonClick("/dashboard")}>
              <StyledListItemIcon>
                <StyledDashboardIcon fontSize="small" />
              </StyledListItemIcon>
              Dashboard
            </StyledMenuItem>
            <StyledMenuItem onClick={mutate}>
              <StyledListItemIcon>
                <StyledLogout fontSize="small" />
              </StyledListItemIcon>
              Logout
            </StyledMenuItem>
          </StyledMenu>
        </StyledLinksStack>
      );
    } else {
      return (
        <StyledLinksStack>
          <StyledNavLink to={"/signup"}>Sign Up</StyledNavLink>
        </StyledLinksStack>
      );
    }
  };

  return (
    <>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar
          snackbarMessage={"Something went wrong. Please try again"}
          status="error"
        />
      )}
      <StyledAppBar>
        <StyledStack>
          <StyledLogoBox>
            <Link to="/">
              <StyledImg src={logo} alt="logo" />
            </Link>
          </StyledLogoBox>
          {/*  this links display on tab and laptop version */}

          {render(state.isAuthenticated)}
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
        <StyledHomeTypography variant="h1" className="font-roboto">
          Earn Rewards for Finding Bugs!
        </StyledHomeTypography>
        <StyledHomeTypography variant="h1" className="fontWeight">
          Join the Xlooop Bug Bounty Program and start earning xlop{" "}
        </StyledHomeTypography>
        <StyledHomeTypography variant="h1" className="fontWeight">
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
  const navigate = useNavigate();

  return (
    <>
      <StyledHowItWorksTypography variant="h1" className="title">
        how it works
      </StyledHowItWorksTypography>

      <StyledHowItWorksSection>
        <BugBox>
          <StyledHowItWorksBox>
            <StyledHowItWorkItem className="space-button">
              <img src={search} alt="search" />
              <StyledHomeTypography variant="h2">
                Explore Bounties
              </StyledHomeTypography>
            </StyledHowItWorkItem>
            <StyledHowItWorksTypography variant="footer" className="space">
              Find exciting bug bounty programs and <br /> choose your target.
            </StyledHowItWorksTypography>
            <br />

            <StyledItemsButton
              onClick={() => navigate("/bounties")}
              variant="contained"
            >
              Explore Bounties
            </StyledItemsButton>
          </StyledHowItWorksBox>
        </BugBox>

        <BugBox>
          <StyledHowItWorksBox>
            <StyledHowItWorkItem className="space-button">
              <img src={bug} alt="bug icon" />
              <StyledHomeTypography variant="h2">
                Create Bugs
              </StyledHomeTypography>
            </StyledHowItWorkItem>
            <StyledHowItWorksTypography variant="footer" className="space">
              Report vulnerabilities easily through our <br></br> streamlined
              process target.
            </StyledHowItWorksTypography>
            <br />

            <StyledItemsButton
              onClick={() => navigate("/bounty/create")}
              variant="contained"
            >
              Submit Bugs
            </StyledItemsButton>
          </StyledHowItWorksBox>
        </BugBox>

        <BugBox>
          <StyledHowItWorksBox>
            <StyledHowItWorkItem className="space-button">
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

            <StyledItemsButton
              onClick={() => navigate("/rewards")}
              variant="contained"
            >
              View Reward
            </StyledItemsButton>
          </StyledHowItWorksBox>
        </BugBox>
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
        <BugBox>
          <StyledHowItWorksBox>
            <StyledHowItWorkItem>
              <StyledPermIdentityIcon />
              <StyledSuccessBox>
                <StyledHowItWorksTypography variant="h3">
                  Alice Wonderland
                </StyledHowItWorksTypography>
                <StyledHowItWorksTypography className="color">
                  @alice_w
                </StyledHowItWorksTypography>
                <StyledHowItWorksTypography>
                  "Xlooop has been an amazing platform to hone my skills and
                  earn rewards. I've found some critical bugs and the community
                  is super supportive!"
                </StyledHowItWorksTypography>
              </StyledSuccessBox>
            </StyledHowItWorkItem>
          </StyledHowItWorksBox>
        </BugBox>

        <BugBox>
          <StyledHowItWorksBox>
            <StyledHowItWorkItem>
              <StyledPermIdentityIcon />
              <StyledSuccessBox>
                <StyledHowItWorksTypography variant="h3">
                  Alice Wonderland
                </StyledHowItWorksTypography>
                <StyledHowItWorksTypography className="color">
                  @alice_w
                </StyledHowItWorksTypography>
                <StyledHowItWorksTypography>
                  "Xlooop has been an amazing platform to hone my skills and
                  earn rewards. I've found some critical bugs and the community
                  is super supportive!"
                </StyledHowItWorksTypography>
              </StyledSuccessBox>
            </StyledHowItWorkItem>
          </StyledHowItWorksBox>
        </BugBox>
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
        <BugBox>
          <StyledHowItWorksBox>
            <StyledHowItWorkItem>
              <StyledPermIdentityIcon className="size" />
              <StyledSuccessBox>
                <StyledHowItWorksTypography className="bold">
                  Alice Wonderland
                </StyledHowItWorksTypography>
                <StyledHowItWorksTypography>
                  @alice_w
                </StyledHowItWorksTypography>
                <StyledHowItWorksTypography className="bold space-top">
                  50,000 xlop tokens earned
                </StyledHowItWorksTypography>
              </StyledSuccessBox>
            </StyledHowItWorkItem>
          </StyledHowItWorksBox>
        </BugBox>
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
