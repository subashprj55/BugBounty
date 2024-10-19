import React, { useState } from "react";
import {
  StyledAppBar,
  StyledImg,
  StyledLinksStack,
  StyledLogoBox,
  StyledNavLink,
  StyledNavLinksBox,
  StyledNavLinksStack,
  StyledNavStack,
  StyledStack,
} from "./style";
import logo from "Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const BugNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <>
      <StyledAppBar>
        <StyledStack>
          <StyledLogoBox>
            <StyledImg src={logo} alt="logo" />
          </StyledLogoBox>
          {/*  this links display on tab and laptop version */}
          <StyledLinksStack>
            <StyledNavLink to={"/"}>Dashboard</StyledNavLink>
            <StyledNavLink to={"/activeBounties"}>
              Active Bounties
            </StyledNavLink>
            <StyledNavLink to={"/submitBug"}>Submit Bug</StyledNavLink>
            <StyledNavLink to={"/rewards"}>Rewards</StyledNavLink>
            <StyledNavLink to={"/leaderBoard"}>LeaderBoard</StyledNavLink>
          </StyledLinksStack>
          {/* Side bar toggle button */}
          <StyledNavStack>
            {isNavOpen ? (
              <CloseIcon onClick={() => setIsNavOpen(false)} />
            ) : (
              <MenuIcon onClick={() => setIsNavOpen(true)} />
            )}
          </StyledNavStack>
        </StyledStack>
      </StyledAppBar>
      {/* this is links for mobile dives */}

      <StyledNavLinksStack>
        <StyledNavLinksBox
          className={`${isNavOpen ? "openNavbar" : "closeNavbar"}`}
        >
          <StyledNavLink className="active" to={"/"}>
            Dashboard
          </StyledNavLink>
          <StyledNavLink to={"/activeBounties"}>Active Bounties</StyledNavLink>
          <StyledNavLink to={"/submitBug"}>Submit Bug</StyledNavLink>
          <StyledNavLink to={"/rewards"}>Rewards</StyledNavLink>
          <StyledNavLink to={"/leaderBoard"}>LeaderBoard</StyledNavLink>
        </StyledNavLinksBox>
      </StyledNavLinksStack>
    </>
  );
};

export default BugNavbar;
