import React, { useState } from "react";
import {
  StyledAppBar,
  StyledAvatar,
  StyledBox,
  StyledImg,
  StyledLinksStack,
  StyledListItemIcon,
  StyledLogoBox,
  StyledLogout,
  StyledMenu,
  StyledMenuItem,
  StyledNavDivider,
  StyledNavLink,
  StyledNavLinksBox,
  StyledNavLinksStack,
  StyledNavStack,
  StyledRightBox,
  StyledStack,
  StyledTypography,
} from "./style";
import logo from "Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HunterNavLinks, ClientNavLinks, CommonNavLinks } from "./navData";
import profile from "Images/profile.png";
import { useAuth } from "Utils/authProvider";
import useLogout from "Hooks/useLogout";

const BugNavbar = () => {
  const {
    state: {
      user: { role },
    },
  } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const location = useLocation().pathname;
  const navData = role === "hunter" ? HunterNavLinks : ClientNavLinks;

  return (
    <>
      <StyledAppBar>
        <StyledBox>
          <StyledStack>
            <StyledLogoBox>
              <Link to={"/"}>
                <StyledImg src={logo} alt="logo" />
              </Link>
            </StyledLogoBox>
            {/*  this links display on tab and laptop version */}
            <StyledLinksStack>
              {CommonNavLinks.map(({ id, linkAddress, name }) => {
                return (
                  <StyledNavLink
                    key={id}
                    className={`${
                      location === linkAddress ? "nav-active" : ""
                    }`}
                    to={linkAddress}
                  >
                    {name}
                  </StyledNavLink>
                );
              })}
              {navData.map(({ id, linkAddress, name }) => {
                return (
                  <StyledNavLink
                    key={id}
                    className={`${
                      location === linkAddress ? "nav-active" : ""
                    }`}
                    to={linkAddress}
                  >
                    {name}
                  </StyledNavLink>
                );
              })}
            </StyledLinksStack>
          </StyledStack>

          {/* user profile */}
          <StyledRightBox>
            <Profile />
            {/* Side bar toggle button */}
            <StyledNavStack>
              {isNavOpen ? (
                <CloseIcon onClick={() => setIsNavOpen(false)} />
              ) : (
                <MenuIcon onClick={() => setIsNavOpen(true)} />
              )}
            </StyledNavStack>
          </StyledRightBox>
        </StyledBox>
      </StyledAppBar>
      {/* this is links for mobile dives */}

      <StyledNavLinksStack>
        <StyledNavLinksBox
          className={`${isNavOpen ? "openNavbar" : "closeNavbar"}`}
        >
          {CommonNavLinks.map(({ id, linkAddress, name }) => {
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

const Profile = () => {
  const { state, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const { mutate, isLoading, error } = useLogout((data) => {
    logout();
    navigate("/");
  });

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

  return (
    <>
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
        <StyledMenuItem onClick={() => handleButtonClick("/profile")}>
          <StyledTypography variant="h3">{state.user.name}</StyledTypography>
        </StyledMenuItem>
        <StyledNavDivider />

        <StyledMenuItem onClick={mutate}>
          <StyledListItemIcon>
            <StyledLogout fontSize="small" />
          </StyledListItemIcon>
          Logout
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};
