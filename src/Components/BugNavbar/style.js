import { Logout } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledAppBar = styled(AppBar)`
  background-color: #978fdc !important;
  position: fixed !important;
`;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 6vw;
  @media (max-width: 768px) {
    gap: 4vw;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 10px 1%;
  @media (max-width: 750px) {
    padding: 10px 4% 10px 1%;
  }
`;

export const StyledLogoBox = styled(Box)``;

export const StyledRightBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 3vw;
`;

export const StyledImg = styled.img`
  width: 130px;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 16px;
    padding: 13px 2%;
  }
  &.nav-active {
    color: #6a1b9a;
    font-weight: 500;
  }
`;

export const StyledLinksStack = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 5vw;
  @media (max-width: 1000px) {
    gap: 3vw;
  }
  @media (max-width: 768px) {
    gap: 2.5vw;
  }
  @media (max-width: 750px) {
    display: none !important;
  }
`;

export const StyledNavStack = styled(Stack)`
  @media (min-width: 750px) {
    display: none !important;
  }
  flex-direction: column;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const StyledNavLinksStack = styled(Stack)`
  gap: 3px;
  @media (min-width: 750px) {
    display: none !important;
  }
  .active {
    background-color: #39d2c0;
  }
  .closeNavbar {
    transform: translate(100%, 0);
    transition: transform 400ms ease-in-out;
  }
  .openNavbar {
    transform: translate(0%, 0);
    transition: transform 400ms ease-in-out;
  }
`;

export const StyledNavLinksBox = styled(Box)`
  top: 57px;
  position: fixed;
  display: flex;
  flex-direction: column;
  background: white;
  z-index: 1;
  height: 100vh;
  width: 100vh;
`;

//for user profile
export const StyledMenu = styled(Menu)``;

export const StyledMenuItem = styled(MenuItem)``;

export const StyledNavDivider = styled(Divider)``;

export const StyledLogout = styled(Logout)``;

export const StyledListItemIcon = styled(ListItemIcon)``;

export const StyledTypography = styled(Typography)`
  text-transform: capitalize;
`;

export const StyledAvatar = styled(Avatar)`
  width: 45px !important;
  height: 45px !important;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 35px !important;
    height: 35px !important;
  }
`;
