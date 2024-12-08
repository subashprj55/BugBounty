import BugBox from "Components/BugBox";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledBox,
  StyledBugBountyPage,
  StyledButton,
  StyledButtonSection,
  StyledContainerBox,
  StyledDescriptionBox,
  StyledDescriptionStack,
  StyledDetailRow,
  StyledDetailsBox,
  StyledDetailsItems,
  StyledDetailsTypography,
  StyledItemsBox,
  StyledPriorityTypography,
  StyledReproduceBox,
  StyledReproduceStack,
  StyledStack,
  StyledStatusTypography,
  StyledTitleBox,
  StyledTitleSection,
  StyledTypography,
} from "./style";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import BugBackButton from "Components/BugBackButton";
import { useAuth } from "Utils/authProvider";

const BugBounty = () => {
  const { id } = useParams();

  return (
    <StyledBugBountyPage>
      <BugBackButton />
      <TitleSection />
      <DetailsSection />
      <DescriptionSection />
      <StepsReproduceSection />
      <ButtonSection id={id} />
    </StyledBugBountyPage>
  );
};

export default BugBounty;

const TitleSection = () => {
  return (
    <StyledTitleSection>
      <PestControlOutlinedIcon />
      <StyledTitleBox>
        <StyledTypography variant="h1">
          Chat - The creator of the group conversation can't rename it
        </StyledTypography>
        <StyledTypography variant="h3" className="date">
          Created At : <span>2024-11-30 </span>
        </StyledTypography>
      </StyledTitleBox>
    </StyledTitleSection>
  );
};

const DetailsSection = () => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDetailsBox>
          <StyledTypography variant="h2">Details</StyledTypography>

          <StyledBox>
            <StyledContainerBox>
              {/* First Column */}
              <StyledDetailsItems>
                <StyledDetailRow>
                  <StyledDetailsTypography variant="footer">
                    Type :
                  </StyledDetailsTypography>
                  <StyledDetailsTypography variant="h3">
                    Bug
                  </StyledDetailsTypography>
                </StyledDetailRow>
                <StyledDetailRow>
                  <StyledDetailsTypography variant="footer">
                    Priority :
                  </StyledDetailsTypography>
                  <StyledPriorityTypography variant="h3" className="critical">
                    Critical
                  </StyledPriorityTypography>
                </StyledDetailRow>
                <StyledDetailRow>
                  <StyledTypography variant="footer">
                    Expire In :
                  </StyledTypography>
                  <StyledTypography variant="h3">
                    <span>2024/12/20 </span>
                  </StyledTypography>
                </StyledDetailRow>
              </StyledDetailsItems>
              {/* Second Column */}
              <StyledDetailsItems>
                <StyledDetailRow>
                  <StyledDetailsTypography variant="footer">
                    Status :
                  </StyledDetailsTypography>
                  <StyledStatusTypography variant="h3" className="open">
                    Open
                  </StyledStatusTypography>
                </StyledDetailRow>
                <StyledDetailRow>
                  <StyledDetailsTypography variant="footer">
                    Resolution :
                  </StyledDetailsTypography>
                  <StyledDetailsTypography variant="h3">
                    Unresolved
                  </StyledDetailsTypography>
                </StyledDetailRow>
              </StyledDetailsItems>
            </StyledContainerBox>
          </StyledBox>
        </StyledDetailsBox>
      </BugBox>
    </StyledStack>
  );
};

const DescriptionSection = () => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDescriptionBox>
          <StyledTypography variant="h2">Description</StyledTypography>
          <StyledBox>
            <StyledTypography variant="h3">Summary :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">
                The creator of a group conversation is unable to rename the
                group despite having the necessary permissions. The issue is
                reproducible across different devices and browsers.
              </StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>

          <StyledBox>
            <StyledTypography variant="h3">Expected Result :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">
                The group name should be updated successfully, and the changes
                should reflect for all group members.
              </StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>
        </StyledDescriptionBox>
      </BugBox>
    </StyledStack>
  );
};

const StepsReproduceSection = () => {
  return (
    <StyledStack>
      <BugBox>
        <StyledReproduceBox>
          <StyledTypography variant="h2">Steps to Reproduce :</StyledTypography>
          <StyledItemsBox>
            <StyledReproduceStack>
              <StyledTypography variant="footer">
                1. Log in to the application as the creator of a group
                conversation.
              </StyledTypography>
              <StyledTypography variant="footer">
                2. Navigate to the group conversation.
              </StyledTypography>
              <StyledTypography variant="footer">
                3. Click on the "Edit" or "Rename" option in the group settings.
              </StyledTypography>
              <StyledTypography variant="footer">
                4. Attempt to change the group name and save the changes.
              </StyledTypography>
            </StyledReproduceStack>
          </StyledItemsBox>
        </StyledReproduceBox>
      </BugBox>
    </StyledStack>
  );
};

const ButtonSection = ({ id }) => {
  const navigator = useNavigate();
  const {
    state: {
      user: { role },
    },
  } = useAuth();

  if (role === "client") {
    return <></>;
  }

  return (
    <StyledStack>
      <StyledButtonSection>
        <StyledButton
          variant="contained"
          onClick={() => navigator(`/bug/submit/${id}`)}
        >
          apply now
        </StyledButton>
      </StyledButtonSection>
    </StyledStack>
  );
};
