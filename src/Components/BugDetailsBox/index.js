import BugBox from "Components/BugBox";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getTimeLeftMessage } from "Utils/dateMessage";
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
  severity,
}) => {
  const navigate = useNavigate();
  return (
    <BugBox>
      <StyledBox>
        <StyledTypography variant="h2">{title}</StyledTypography>
        <StyledBodyBox>
          <StyledTypography className={`${severity} text`}>
            {severity}
          </StyledTypography>
          <StyledTypography className="col-gray ">
            {/* <BugExpiryMessage expiryDate={expiry_date} /> */}
            <>{getTimeLeftMessage(expiry_date)}</>
          </StyledTypography>
        </StyledBodyBox>

        <StyledTypography>{description}</StyledTypography>

        <StyledBottomBox>
          <StyledTypography variant="h2">
            {Math.floor(rewarded_amount)} XLOP
          </StyledTypography>
          <StyledButton
            variant="contained"
            onClick={() => navigate(`/bounty/${id}`)}
          >
            View More
          </StyledButton>
        </StyledBottomBox>
      </StyledBox>
    </BugBox>
  );
};

export default BugDetailsBox;
