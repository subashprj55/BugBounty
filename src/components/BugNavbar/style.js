import { AppBar, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledAppBar = styled(AppBar)`
  background-color: #978fdc !important;
`;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  gap: 80px;
  padding: 10px 1%;
  @media (max-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 425px) {
    justify-content: space-between;
    padding: 10px 2%;
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
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    padding: 13px 2%;
  }
`;

export const StyledLinksStack = styled(Stack)`
  flex-direction: row !important;
  gap: 80px;
  @media (max-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 600px) {
    display: none !important;
  }
`;

export const StyledNavStack = styled(Stack)`
  @media (min-width: 600px) {
    display: none !important;
  }
  flex-direction: column;
`;

export const StyledNavLinksStack = styled(Stack)`
  @media (min-width: 600px) {
    display: none !important;
  }

  gap: 3px;
  .active {
    background-color: yellow;
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
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  height: 100vh;
  width: 100vh;
`;
