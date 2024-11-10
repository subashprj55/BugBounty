import React from "react";
import notFound from "Images/notFound.png";
import { StyledImgBox, StyledTypography } from "./style";
const Bug404 = () => {
  return (
    <div>
      <StyledImgBox>
        <img src={notFound} alt="...loading" />
        <StyledTypography variant="h1" className="header">
          Hmm, nothing here...
        </StyledTypography>
        <StyledTypography variant="h1">
          were you looking for something specific? Try a different page or go
          back home.
        </StyledTypography>
      </StyledImgBox>
    </div>
  );
};

export default Bug404;
