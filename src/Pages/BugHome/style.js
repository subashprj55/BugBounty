import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { AppBar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const { Stack } = require("@mui/system");
const { styled } = require("styled-components");

export const StyledHomePageBox = styled(Box)`
  background-color: #f1f1f1;
`;
export const StyledAppBar = styled(AppBar)`
  background-color: #978fdc !important;
  position: fixed !important;
`;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5% 10px 1%;
  @media (max-width: 768px) {
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
  padding: 9px 10px;
  background-color: #27d9b5;
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

export const StyledLinksStack = styled(Stack)``;

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
  padding-bottom: 10px;
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
    font-size: 30px;
  }
`;

export const StyledHowItWorksSection = styled(Stack)`
  margin: 40px 0;
  flex-direction: row !important;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
`;

export const StyledHowItWorksBox = styled(Box)`
  background-color: white;
  border-radius: 8px;
  padding: 30px 40px;
  @media (max-width: 1024px) {
    margin-bottom: 20px !important;
  }
`;

export const StyledHowItWorkItem = styled(Box)`
  display: flex;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const StyledItemsButton = styled(Button)`
  margin-top: 30px !important;
  margin-bottom: 15px !important;
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
  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

export const StyledPermIdentityIcon = styled(PermIdentityIcon)`
  margin-top: 5px !important;
  font-size: 35px !important;
  color: gray;
`;
