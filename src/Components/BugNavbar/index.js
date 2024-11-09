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
import { Link, useLocation } from "react-router-dom";
import { navData } from "./navData";

const BugNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const location = useLocation().pathname;

  return (
    <>
      <StyledAppBar>
        <StyledStack>
          <StyledLogoBox>
            <Link to={"/"}>
              <StyledImg src={logo} alt="logo" />
            </Link>
          </StyledLogoBox>
          {/*  this links display on tab and laptop version */}
          <StyledLinksStack>
            {navData.map(({ id, linkAddress, name }) => {
              return (
                <StyledNavLink
                  key={id}
                  className={`${location === linkAddress ? "nav-active" : ""}`}
                  to={linkAddress}
                >
                  {name}
                </StyledNavLink>
              );
            })}
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
          {navData.map(({ id, linkAddress, name }) => {
            return (
              <StyledNavLink
                key={id}
                className={`${location === linkAddress ? "active" : ""}`}
                to={linkAddress}
              >
                {name}
              </StyledNavLink>
            );
          })}
        </StyledNavLinksBox>
      </StyledNavLinksStack>
    </>
  );
};

export default BugNavbar;
