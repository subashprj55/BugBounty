import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const { Stack } = require("@mui/system");
const { styled } = require("styled-components");

export const StyledHomePageBox = styled(Box)``;

export const StyledAppBar = styled(AppBar)`
  background-color: #978fdc !important;
  position: fixed !important;
`;

export const StyledMenu = styled(Menu)``;

export const StyledMenuItem = styled(MenuItem)``;

export const StyledNavDivider = styled(Divider)``;

export const StyledLogout = styled(Logout)``;

export const StyledDashboardIcon = styled(DashboardIcon)``;

export const StyledListItemIcon = styled(ListItemIcon)``;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  padding: 8px 5% 8px 1%;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    justify-content: space-between;
    padding: 10px 2%;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 45px !important;
  height: 45px !important;
  cursor: pointer;
  &.small {
    width: 35px !important;
    height: 35px !important;
  }
`;

export const StyledLogoBox = styled(Box)``;

export const StyledImg = styled.img`
  width: 130px;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding: 10px 20px;
  background-color: #39d2c0;
  border-radius: 15px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const StyledLinksStack = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 10px;
`;

export const StyledLinksTypography = styled(Typography)`
  text-transform: capitalize !important;
`;
//home page section styles

export const StyledHomeStack = styled(Stack)`
  margin: 150px 0 100px 0;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    margin: 150px 30px 100px 30px;
  }
  @media (max-width: 425px) {
    margin: 100px 2%;
    flex-wrap: wrap-reverse;
    gap: 20px;
  }
`;

export const StyledHomeBox = styled(Box)`
  img {
    width: 450px;
    height: auto;

    @media (max-width: 768px) {
      width: 300px;
    }
  }
`;

export const StyledHomeTypography = styled(Typography)`
  text-transform: capitalize;
  padding-bottom: 5px;
  font-family: "Roboto", sans-serif !important;
  &.font-roboto {
    font-size: 45px !important;
    padding-bottom: 20px;
  }
  &.fontWeight {
    font-weight: 500 !important;
  }
`;

export const StyledButton = styled(Button)`
  width: 140px !important;
  margin: 20px 0 !important;
`;

//how it works section styles

export const StyledHowItWorksTypography = styled(Typography)`
  &.title {
    text-transform: capitalize;
    text-align: center;
    font-size: 32px;
  }
  &.color {
    color: #6b7280;
  }
  &.bold {
    font-weight: bold;
  }
  &.space-top {
    margin-top: 7px;
  }
`;

export const StyledHowItWorksSection = styled(Stack)`
  margin: 40px 0;
  flex-direction: row !important;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
  @media (max-width: 1120px) {
    gap: 20px;
  }
`;

export const StyledHowItWorksBox = styled(Box)`
  padding: 30px;
  @media (max-width: 1024px) {
    margin-bottom: 20px !important;
  }
`;

export const StyledHowItWorkItem = styled(Box)`
  display: flex;
  gap: 25px;
  &.space-button {
    margin-bottom: 40px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

export const StyledItemsButton = styled(Button)`
  margin-top: 30px !important;
  width: auto !important;
`;

// success Stories styles
export const StyledSuccessStack = styled(Stack)`
  padding-top: 80px;
`;

export const StyledSuccessBox = styled(Box)``;

export const StyledSuccessSection = styled(Stack)`
  margin: 40px 9%;
  flex-direction: row !important;
  justify-content: center;
  gap: 2%;
  @media (max-width: 750px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const StyledPermIdentityIcon = styled(PermIdentityIcon)`
  margin-top: 5px !important;
  font-size: 35px !important;
  color: gray;
  &.size {
    font-size: 60px !important;
  }
`;

//footer section styles

export const StyledFooterSection = styled(Stack)`
  margin-top: 80px;
  background-color: #978fdc;
  padding: 40px 9% 30px 9%;
`;

export const StyledFooterContainer = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
  padding-bottom: 30px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StyledFooterBox = styled(Box)`
  input {
    border-radius: 8px 0 0 8px;
    border: none;
    padding: 8px;
    font-size: 14px;
  }
  input:focus {
    outline: none;
    border: none;
  }
`;

export const StyledFooterTypography = styled(Typography)`
  margin-bottom: 3px !important;
  &.space {
    margin-bottom: 10px !important;
    font-family: serif !important;
  }
  &.center {
    margin-top: 30px;
    text-align: center;
  }
`;

export const StyledDivider = styled(Divider)`
  border-color: black !important;
  border-bottom-width: revert !important;
`;

export const StyledInputBox = styled(Box)`
  display: flex;
`;

export const StyledSubscribeButton = styled(Button)`
  font-size: 14px !important;
  color: white !important;
  background-color: black !important;
  border-radius: 0 8px 8px 0 !important;
`;
