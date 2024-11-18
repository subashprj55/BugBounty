import React from "react";
import {
  StyledDivider,
  StyledLinksTypography,
  StyledSideBar,
  StyledSidebarLinks,
} from "./style";
import profile from "Images/profile.png";
import { SidebarLinksData } from "./data";
import { Link } from "react-router-dom";

const BugSidebar = () => {
  return (
    <StyledSideBar>
      <Link to="/profile">
        <StyledSidebarLinks>
          <img src={profile} alt="profile" />
          <StyledLinksTypography variant="h3">Sonik</StyledLinksTypography>
        </StyledSidebarLinks>
      </Link>
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
