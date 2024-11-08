import BugBox from "Components/BugBox";
import React from "react";
import {
  StyledBodyBox,
  StyledBottomBox,
  StyledBox,
  StyledButton,
  StyledTypography,
} from "./styke";

const BugDetailsBox = () => {
  return (
    <BugBox>
      <StyledBox>
        <StyledTypography variant="h2">
          Critical Vulnerability in Payment Gateway
        </StyledTypography>
        <StyledBodyBox>
          <StyledTypography className="col-red ">Critical</StyledTypography>
          <StyledTypography className="col-gray ">
            Expires in 3 days
          </StyledTypography>
        </StyledBodyBox>

        <StyledTypography>
          Identify and report critical vulnerabilities in our payment gateway
          data breaches, injection flaws, and system. Focus on potential
          authentication bypass...
        </StyledTypography>

        <StyledBottomBox>
          <StyledTypography variant="h2">500 XLOP</StyledTypography>
          <StyledButton variant="contained">View More</StyledButton>
        </StyledBottomBox>
      </StyledBox>
    </BugBox>
  );
};

export default BugDetailsBox;
