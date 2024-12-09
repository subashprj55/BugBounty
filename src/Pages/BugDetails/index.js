import React, { useState } from "react";
import {
  StyledAuthorName,
  StyledAvatar,
  StyledBox,
  StyledBugDetailsPage,
  StyledBugItemsBox,
  StyledBugPendingBox,
  StyledBugSummerySection,
  StyledButton,
  StyledButtonGroup,
  StyledComment,
  StyledCommentBox,
  StyledCommentContent,
  StyledCommentInfoBox,
  StyledCommentsBox,
  StyledDescriptionBox,
  StyledDescriptionStack,
  StyledDetailsBox,
  StyledDetailsTypography,
  StyledGroupButtonBox,
  StyledIconButton,
  StyledItemsBox,
  StyledMenu,
  StyledMenuItem,
  StyledReproduceBox,
  StyledReproduceStack,
  StyledStack,
  StyledStatusTypography,
  StyledTimestamp,
  StyledTitleBox,
  StyledTitleSection,
  StyledTypography,
} from "./style";
import profile from "Images/profile.png";
import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import clientProfile from "Images/profileAvatar.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BugDetails = () => {
  return (
    <StyledBugDetailsPage>
      <TitleSection title={"Login Page Crash"} created_by={"Hunter1"} />
      <DetailsSection />
      <DescriptionSection
        summary={"Login page crashes when submitting invalid credentials."}
        expectedResult={"A proper error message should appear."}
        actualResult={"The application crashes with a 500 server error."}
      />
      <StepsReproduceSection
        step_to_reproduce={
          "1. Navigate to the login page.\n 2. Enter invalid credentials.\n 3. Click on the Login button.\n 4. Observe the crash."
        }
      />
      <ButtonGroupDropdown />
      <CommentSection />
    </StyledBugDetailsPage>
  );
};

export default BugDetails;

const TitleSection = ({ title, created_by }) => {
  return (
    <StyledTitleSection>
      <StyledAvatar alt="hunter profile" src={profile} />
      <StyledTitleBox>
        <StyledTypography className="capitalize" variant="h2">
          {title}
        </StyledTypography>
        <StyledTypography variant="footer" className="capitalize">
          Submitted By : {created_by}
        </StyledTypography>
      </StyledTitleBox>
    </StyledTitleSection>
  );
};

const DetailsSection = ({
  priority,
  expireDate,
  createdAt,
  rewarded_amount,
}) => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDetailsBox>
          <StyledTypography variant="h2">Details</StyledTypography>

          <StyledBugSummerySection>
            <StyledBugPendingBox>
              <StyledDetailsTypography variant="h3">
                Status :
              </StyledDetailsTypography>
              <StyledBugItemsBox>
                <StyledStatusTypography variant="h3" className="pending">
                  Pending
                </StyledStatusTypography>
              </StyledBugItemsBox>
            </StyledBugPendingBox>
          </StyledBugSummerySection>

          <StyledBugSummerySection>
            <StyledBugPendingBox>
              <StyledTypography variant="h3">
                Submission Date :
              </StyledTypography>
              <StyledTypography variant="h3">
                <span>2024-12-08 13:00</span>
              </StyledTypography>
            </StyledBugPendingBox>
          </StyledBugSummerySection>
        </StyledDetailsBox>
      </BugBox>
    </StyledStack>
  );
};

const DescriptionSection = ({ summary, expectedResult, actualResult }) => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDescriptionBox>
          <StyledTypography variant="h2">Description</StyledTypography>
          <StyledBox>
            <StyledTypography variant="h3">Summary :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">{summary}</StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>

          <StyledBox>
            <StyledTypography variant="h3">Expected Result :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">
                {expectedResult}
              </StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>

          <StyledBox>
            <StyledTypography variant="h3">Actual Result :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">
                {actualResult}
              </StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>
        </StyledDescriptionBox>
      </BugBox>
    </StyledStack>
  );
};

const StepsReproduceSection = ({ step_to_reproduce }) => {
  const formattedSteps = step_to_reproduce
    .split("\n")
    .map((step) => step.charAt(0).toUpperCase() + step.slice(1));

  return (
    <StyledStack>
      <BugBox>
        <StyledReproduceBox>
          <StyledTypography variant="h2">Steps to Reproduce :</StyledTypography>
          <StyledItemsBox>
            <StyledReproduceStack>
              {formattedSteps?.map((item) => {
                return (
                  <StyledTypography variant="footer" key={item}>
                    {item}
                  </StyledTypography>
                );
              })}
            </StyledReproduceStack>
          </StyledItemsBox>
        </StyledReproduceBox>
      </BugBox>
    </StyledStack>
  );
};

const options = ["Pending Bug", "Approve Bug", "Cancel Bug"];

const ButtonGroupDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePrimaryClick = () => {
    // Action based on the selected option
    alert(`Action executed for: ${options[selectedIndex]}`);
  };

  return (
    <StyledGroupButtonBox>
      <StyledButtonGroup variant="contained" aria-label="Split button dropdown">
        <StyledButton onClick={handlePrimaryClick}>
          {options[selectedIndex]}
        </StyledButton>
        <StyledIconButton
          size="small"
          aria-controls={anchorEl ? "menu" : undefined}
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <ArrowDropDownIcon />
        </StyledIconButton>
      </StyledButtonGroup>
      <StyledMenu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <StyledMenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </StyledGroupButtonBox>
  );
};

const CommentSection = () => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDescriptionBox>
          <StyledTypography variant="h2">Comments</StyledTypography>
          <StyledCommentBox>
            <StyledAvatar />
            <BugInputField placeholder="Add a comment..." />
          </StyledCommentBox>
        </StyledDescriptionBox>

        <StyledCommentsBox>
          <StyledComment>
            <StyledAvatar alt="clientProfile" src={clientProfile} />
            <StyledCommentContent>
              <StyledCommentInfoBox>
                <StyledAuthorName>Hunter</StyledAuthorName>
                <StyledTimestamp>9 Dec 2023 at 2:23PM</StyledTimestamp>
              </StyledCommentInfoBox>
              <StyledTypography variant="body2">
                One thing to note here, is that you'll need to make a call for
                each project and then calculate the intersection of the
                priorities returned.
              </StyledTypography>
            </StyledCommentContent>
          </StyledComment>

          <StyledComment>
            <StyledAvatar alt="hunterProfile" src={profile} />
            <StyledCommentContent>
              <StyledCommentInfoBox>
                <StyledAuthorName>Client</StyledAuthorName>
                <StyledTimestamp>7 Dec 2023 at 2:23PM</StyledTimestamp>
              </StyledCommentInfoBox>
              <StyledTypography variant="body2">
                I would appreciate if you could investigate this issue as soon
                as possible. I've included screenshots of the error message and
                the steps I took prior to receiving the error.
              </StyledTypography>
            </StyledCommentContent>
          </StyledComment>
        </StyledCommentsBox>
      </BugBox>
    </StyledStack>
  );
};
