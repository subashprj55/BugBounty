import BugNavContainer from "Components/BugNavContainer";
import BugSelectField from "Components/BugSelectFiled";
import React from "react";
import { leaderboardData } from "./data";
import {
  StyledAvatar,
  StyledBoardAvatar,
  StyledBoardProfileBox,
  StyledButton,
  StyledDashboardHeaderBox,
  StyledDashboardSection,
  StyledHeaderBox,
  StyledHeaderFieldsBox,
  StyledHeaderSection,
  StyledItem,
  StyledLeaderboardItems,
  StyledLeaderboardPage,
  StyledLeftBox,
  StyledProfileBox,
  StyledProfileInfoBox,
  StyledProfileTypography,
  StyledRightBox,
  StyledTopHunterSectionBox,
  StyledTypography,
} from "./style";

const BugLeaderBoard = () => {
  return (
    <>
      <BugNavContainer>
        <StyledLeaderboardPage>
          <HeaderSection />
          <TopHunterSection />
          <DashboardSection />
        </StyledLeaderboardPage>
      </BugNavContainer>
    </>
  );
};

export default BugLeaderBoard;

const HeaderSection = () => {
  return (
    <>
      <StyledHeaderSection>
        <StyledTypography variant="h1">Top Hunters</StyledTypography>
        <StyledHeaderBox>
          <StyledHeaderFieldsBox>
            <BugSelectField label={"Filter by"} />
          </StyledHeaderFieldsBox>

          <StyledHeaderFieldsBox>
            <BugSelectField label={"Sort by"} />
          </StyledHeaderFieldsBox>
        </StyledHeaderBox>
      </StyledHeaderSection>
    </>
  );
};

const TopHunterSection = () => {
  return (
    <>
      <StyledTopHunterSectionBox>
        <StyledTypography variant="h2">Current Top Hunter</StyledTypography>
        <StyledProfileBox>
          <StyledAvatar />
          <StyledProfileInfoBox>
            <StyledProfileTypography variant="h2">
              Alice Wonderland
            </StyledProfileTypography>
            <StyledProfileTypography className="color">
              @alice_w
            </StyledProfileTypography>
            <StyledProfileTypography>
              15,000 tokens earned
            </StyledProfileTypography>
          </StyledProfileInfoBox>
        </StyledProfileBox>
      </StyledTopHunterSectionBox>
    </>
  );
};

const DashboardSection = () => {
  return (
    <>
      <StyledDashboardSection>
        <StyledDashboardHeaderBox>
          <StyledTypography variant="h2">Leaderboard</StyledTypography>
        </StyledDashboardHeaderBox>

        <StyledLeaderboardItems>
          {leaderboardData.map(
            ({ id, ranking, name, user_id, tokens, link }) => {
              return (
                <StyledItem key={id}>
                  <StyledLeftBox>
                    <StyledTypography variant="h2">{ranking}</StyledTypography>
                    <StyledBoardProfileBox>
                      <StyledBoardAvatar />
                      <StyledProfileInfoBox>
                        <StyledProfileTypography className="title">
                          {name}
                        </StyledProfileTypography>
                        <StyledProfileTypography className="color">
                          {user_id}
                        </StyledProfileTypography>
                      </StyledProfileInfoBox>
                    </StyledBoardProfileBox>
                  </StyledLeftBox>
                  <StyledRightBox>
                    <StyledProfileTypography
                      variant="footer"
                      className="number"
                    >
                      {tokens} tokens
                    </StyledProfileTypography>
                    <StyledButton variant="contained">
                      View Profile
                    </StyledButton>
                  </StyledRightBox>
                </StyledItem>
              );
            }
          )}
        </StyledLeaderboardItems>
      </StyledDashboardSection>
    </>
  );
};
