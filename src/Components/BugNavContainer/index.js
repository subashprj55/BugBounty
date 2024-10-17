import BugFooter from "Components/BugFooter";
import BugNavbar from "Components/BugNavbar";
import BugSidebar from "Components/BugSidebar";
import React from "react";
import { StyledChildDiv, StyledStack } from "./style";

const BugNavContainer = ({ children }) => {
  return (
    <>
      <BugNavbar />
      <StyledStack>
        <div>
          <BugSidebar />
        </div>
        <StyledChildDiv>{children}</StyledChildDiv>
      </StyledStack>
      <BugFooter />
    </>
  );
};

export default BugNavContainer;
