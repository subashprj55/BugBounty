import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import BugSelectField from "Components/BugSelectFiled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Industries, primarySkills } from "./data";
import {
  StyledBottomBox,
  StyledBox,
  StyledCheckBox,
  StyledInputBox,
  StyledSignupBox,
  StyledSignupButton,
  StyledSignupStack,
  StyledSignupTypography,
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "./style";

const BugSignup = () => {
  const [alignment, setAlignment] = useState("Hunter");

  const navigate = useNavigate();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  //for hunter
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hunterSkill, setHunterSkill] = React.useState("");

  //for client
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [industryName, setIndustryName] = useState("");

  const [checked, setChecked] = React.useState(false);

  const renderInputFields = (alignmentValue) => {
    if (alignmentValue === "Hunter") {
      return (
        <>
          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Full Name
            </StyledSignupTypography>
            <BugInputField
              placeholder="Enter your Username"
              value={name}
              setValue={setName}
            />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Email
            </StyledSignupTypography>
            <BugInputField
              type="email"
              placeholder="Enter your Username"
              value={email}
              setValue={setEmail}
            />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Password
            </StyledSignupTypography>
            <BugInputField
              type="password"
              placeholder="Enter your password"
              value={password}
              setValue={setPassword}
            />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Primary Skills
            </StyledSignupTypography>
            <BugSelectField
              label={"Select your primary skill"}
              options={primarySkills}
              selectValue={hunterSkill}
              setSelectValue={setHunterSkill}
            />
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
            <BugInputField
              placeholder="Enter your Username"
              value={companyName}
              setValue={setCompanyName}
            />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Business Email
            </StyledSignupTypography>
            <BugInputField
              type="email"
              placeholder="Enter your Username"
              value={businessEmail}
              setValue={setBusinessEmail}
            />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Password
            </StyledSignupTypography>
            <BugInputField
              type="password"
              placeholder="Enter your password"
              value={clientPassword}
              setValue={setClientPassword}
            />
          </StyledBox>

          <StyledBox>
            <StyledSignupTypography variant="h3" className="space">
              Industry.
            </StyledSignupTypography>
            <BugSelectField
              label={"Select your industry"}
              options={Industries}
              selectValue={industryName}
              setSelectValue={setIndustryName}
            />
          </StyledBox>
        </>
      );
    }
  };

  return (
    <>
      <StyledSignupStack>
        <BugBox>
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
                <StyledToggleButton value="Hunter" aria-label="left aligned">
                  <StyledSignupTypography>Hunter</StyledSignupTypography>
                </StyledToggleButton>
                <StyledToggleButton value="Client" aria-label="right aligned">
                  <StyledSignupTypography>Client</StyledSignupTypography>
                </StyledToggleButton>
              </StyledToggleButtonGroup>
            </StyledBottomBox>

            <StyledInputBox>{renderInputFields(alignment)}</StyledInputBox>

            <StyledBottomBox>
              <StyledCheckBox
                color="default"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <StyledSignupTypography>
                I agree to the terms and conditions
              </StyledSignupTypography>
            </StyledBottomBox>

            <StyledSignupButton
              variant="contained"
              onClick={() => navigate("/profile")}
            >
              Sign Up as {alignment}
            </StyledSignupButton>
          </StyledSignupBox>
        </BugBox>
      </StyledSignupStack>
    </>
  );
};

export default BugSignup;
