import { Typography } from "@mui/material";
import React from "react";
import { StyledFooterIconsStack, StyledFooterStack } from "./style";
import github from "Images/github.png";
import twitter from "Images/twitter.png";

const BugFooter = () => {
  return (
    <StyledFooterStack>
      <div>
        <Typography variant="footer">
          © 2023 Xlooop, Inc. All rights reserved.
        </Typography>
      </div>
      <StyledFooterIconsStack>
        <img src={github} alt="github Icon" />
        <img src={twitter} alt="twitter" />
      </StyledFooterIconsStack>
    </StyledFooterStack>
  );
};

export default BugFooter;
