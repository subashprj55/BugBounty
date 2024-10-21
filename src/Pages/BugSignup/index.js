import BugInputField from "Components/BugInputField";
import BugSelectField from "Components/BugSelectFiled";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledBottomBox,
  StyledBox,
  StyledCheckBox,
  StyledInputBox,
  StyledLink,
  StyledSignupBox,
  StyledSignupButton,
  StyledSignupStack,
  StyledSignupTypography,
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "./style";

const BugSignup = () => {
  const [alignment, setAlignment] = React.useState("hunter");

  const navigate = useNavigate();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const renderInputFields = (alignmentValue) => {
    if (alignmentValue === "hunter") {
      return (
        <>
          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Full Name
            </StyledSignupTypography>
            <BugInputField placeholder="Enter your Username" />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Email
            </StyledSignupTypography>
            <BugInputField type="email" placeholder="Enter your Username" />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Password
            </StyledSignupTypography>
            <BugInputField type="password" placeholder="Enter your password" />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Primary Skills
            </StyledSignupTypography>
            <BugSelectField label={"Select your primary skill"} />
          </StyledBox>
        </>
      );
    } else {
      return (
        <>
          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Company Name
            </StyledSignupTypography>
            <BugInputField placeholder="Enter your Username" />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Business Email
            </StyledSignupTypography>
            <BugInputField type="email" placeholder="Enter your Username" />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Password
            </StyledSignupTypography>
            <BugInputField type="password" placeholder="Enter your password" />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Industry.
            </StyledSignupTypography>
            <BugSelectField label={"Select your industry"} />
          </StyledBox>
        </>
      );
    }
  };

  return (
    <>
      <StyledSignupStack>
        <StyledSignupBox>
          <StyledSignupTypography variant="h1" className="center">
            Sign Up for Xlooop Bug Bounty
          </StyledSignupTypography>
          <StyledSignupTypography variant="h6" className="center">
            Join our community as a hunter or client
          </StyledSignupTypography>

          <StyledBottomBox>
            <StyledToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <StyledToggleButton value="hunter" aria-label="left aligned">
                <StyledSignupTypography>Hunter</StyledSignupTypography>
              </StyledToggleButton>
              <StyledToggleButton value="client" aria-label="right aligned">
                <StyledSignupTypography>Client</StyledSignupTypography>
              </StyledToggleButton>
            </StyledToggleButtonGroup>
          </StyledBottomBox>

          <StyledInputBox>{renderInputFields(alignment)}</StyledInputBox>

          <StyledBottomBox>
            <StyledCheckBox color="default" />
            <StyledSignupTypography>
              I agree to the terms and conditions
            </StyledSignupTypography>
          </StyledBottomBox>

          <StyledSignupButton
            variant="contained"
            onClick={() => navigate("/profile")}
          >
            Sign Up as Hunter
          </StyledSignupButton>
        </StyledSignupBox>
      </StyledSignupStack>
    </>
  );
};

export default BugSignup;
