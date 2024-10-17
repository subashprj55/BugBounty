import BugFooter from "components/BugFooter";
import BugNavbar from "components/BugNavbar";
import BugSidebar from "components/BugSidebar";
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
