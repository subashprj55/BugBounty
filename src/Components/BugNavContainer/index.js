import BugFooter from "Components/BugFooter";
import BugNavbar from "Components/BugNavbar";
import React from "react";
import { StyledStack } from "./style";

const BugNavContainer = ({ children }) => {
  return (
    <>
      <BugNavbar />
      <StyledStack>{children}</StyledStack>
      <BugFooter />
    </>
  );
};

export default BugNavContainer;
