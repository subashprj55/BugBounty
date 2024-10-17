import BugFooter from "component/BugFooter";
import BugNavbar from "component/BugNavbar";
import BugSidebar from "component/BugSidebar";
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
