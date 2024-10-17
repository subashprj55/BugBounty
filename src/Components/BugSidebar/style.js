import { Divider, Stack, Typography } from "@mui/material";
import { styled } from "styled-components";

export const StyledSideBar = styled(Stack)`
  height: 88vh;
  background-color: white;
  position: absolute;
  z-index: 1000;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  width: 60px;
  @media (max-width: 768px) {
    width: 160px;
  }
  &:hover {
    width: 200px;
    @media (max-width: 768px) {
      width: 160px;
    }
  }
`;

export const StyledSidebarLinks = styled(Stack)`
  flex-direction: row !important;
  padding: 10px 10px;
  gap: 12px;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
  }
  @media (max-width: 768px) {
    img {
      width: 20px;
      height: 20px;
      min-width: 22px;
      min-height: 22px;
    }
  }
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
    @media (max-width: 768px) {
      background-color: white;
    }
  }
`;

export const StyledLinksTypography = styled(Typography)`
  white-space: nowrap;
`;

export const StyledDivider = styled(Divider)``;
