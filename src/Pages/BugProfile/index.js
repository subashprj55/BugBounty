import BugNavContainer from "Components/BugNavContainer";
import React from "react";
import {
  StyledAvatar,
  StyledBadgesBox,
  StyledBadgesChip,
  StyledBadgesSection,
  StyledBadgesStack,
  StyledButton,
  StyledButtonBox,
  StyledChip,
  StyledDetails,
  StyledDiv,
  StyledHeaderBox,
  StyledProfileBox,
  StyledProfileHead,
  StyledProfilePage,
  StyledRecentActivityBox,
  StyledRecentActivitySection,
  StyledStack,
  StyledTypography,
} from "./style";
import profileAvatar from "Images/profileAvatar.png";
import BugTable from "Components/BugTable";
import CupIcon from "Images/cup.png";
import Shield from "Images/shield.png";
import Mark from "Images/mark.png";
import BugBox from "Components/BugBox";

const BugProfile = () => {
  return (
    <>
      <BugNavContainer>
        <StyledProfilePage>
          <TitleSection />
          <BadgesSection />
        </StyledProfilePage>
      </BugNavContainer>
    </>
  );
};

export default BugProfile;

const TitleSection = () => {
  return (
    <>
      <StyledHeaderBox>
        <StyledTypography variant="h1">Hunter Profile</StyledTypography>
      </StyledHeaderBox>

      <StyledStack>
        <BugBox>
          <StyledProfileBox>
            <StyledProfileHead>
              <StyledDiv>
                <StyledAvatar src={profileAvatar} />
                <StyledTypography variant="h2" className="font">
                  Alice Wonderhack
                </StyledTypography>
              </StyledDiv>
            </StyledProfileHead>

            <StyledProfileHead>
              <StyledChip label="Rank #1" />
            </StyledProfileHead>

            <StyledDetails className="space">
              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  5000
                </StyledTypography>
                <StyledTypography variant="h6">XLOP Earned</StyledTypography>
              </StyledDiv>

              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  42
                </StyledTypography>
                <StyledTypography variant="h6">Bug Reported</StyledTypography>
              </StyledDiv>
            </StyledDetails>

            <StyledDetails>
              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  95%
                </StyledTypography>
                <StyledTypography variant="h6">Success Rate</StyledTypography>
              </StyledDiv>

              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  3
                </StyledTypography>
                <StyledTypography variant="h6">Badges Earned</StyledTypography>
              </StyledDiv>
            </StyledDetails>
          </StyledProfileBox>
        </BugBox>

        <StyledRecentActivitySection>
          <StyledTypography variant="h2">Recent Activity</StyledTypography>
          <StyledTypography variant="h6">
            Latest bug reports and rewards
          </StyledTypography>
          <BugTable />
        </StyledRecentActivitySection>
      </StyledStack>
    </>
  );
};

const BadgesSection = () => {
  return (
    <>
      <StyledBadgesSection>
        <BugBox>
          <StyledBadgesStack>
            <StyledTypography variant="h2">Badges</StyledTypography>
            <StyledTypography variant="h6">
              Achievements and recognitions
            </StyledTypography>
            <StyledBadgesBox>
              <StyledBadgesChip
                icon={<img src={CupIcon} alt="trophy" />}
                label="Top Hunter"
              />
              <StyledBadgesChip
                className="badge"
                icon={<img src={Mark} alt="achievement" />}
                label="Critical Bug Finding"
              />
              <StyledBadgesChip
                icon={<img src={Shield} alt="circle" />}
                label="Speed Demon"
              />
            </StyledBadgesBox>
          </StyledBadgesStack>
        </BugBox>
      </StyledBadgesSection>

      <StyledButtonBox>
        <StyledButton variant="contained">Back to Leader Board</StyledButton>
      </StyledButtonBox>
    </>
  );
};
