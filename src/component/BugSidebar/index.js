import React from "react";
import {
  StyledDivider,
  StyledLinksTypography,
  StyledSideBar,
  StyledSidebarLinks,
} from "./style";
import profile from "Images/profile.png";
import { SidebarLinksData } from "./data";

const BugSidebar = () => {
  return (
    <StyledSideBar>
      <StyledSidebarLinks>
        <img src={profile} alt="profile" />
        <StyledLinksTypography variant="h3">Sonik</StyledLinksTypography>
      </StyledSidebarLinks>
      <StyledDivider />
      {SidebarLinksData.map(({ id, location, name }) => {
        return (
          <StyledSidebarLinks key={id}>
            <img src={location} alt={name} />
            <StyledLinksTypography variant="h3">{name}</StyledLinksTypography>
          </StyledSidebarLinks>
        );
      })}
    </StyledSideBar>
  );
};

export default BugSidebar;
