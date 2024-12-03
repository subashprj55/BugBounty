import BugBox from "Components/BugBox";
import BugExpiryMessage from "Components/BugExpiryMessage";
import React from "react";
import {
  StyledBodyBox,
  StyledBottomBox,
  StyledBox,
  StyledButton,
  StyledTypography,
} from "./style";

const BugDetailsBox = ({
  id,
  title,
  description,
  expiry_date,
  rewarded_amount,
}) => {
  return (
    <BugBox>
      <StyledBox>
        <StyledTypography variant="h2">{title}</StyledTypography>
        <StyledBodyBox>
          <StyledTypography className="col-red ">Critical</StyledTypography>
          <StyledTypography className="col-gray ">
            <BugExpiryMessage expiryDate={expiry_date} />
          </StyledTypography>
        </StyledBodyBox>

        <StyledTypography>{description}</StyledTypography>

        <StyledBottomBox>
          <StyledTypography variant="h2">
            {Math.floor(rewarded_amount)} XLOP
          </StyledTypography>
          <StyledButton variant="contained">View More</StyledButton>
        </StyledBottomBox>
      </StyledBox>
    </BugBox>
  );
};

export default BugDetailsBox;
