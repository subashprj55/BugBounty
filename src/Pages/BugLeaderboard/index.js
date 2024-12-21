import BugBox from "Components/BugBox";
import BugNavContainer from "Components/BugNavContainer";
import useLeaderBoard from "Hooks/useLeaderBoard";
import React from "react";
import {
  StyledAvatar,
  StyledBoardAvatar,
  StyledBoardProfileBox,
  StyledButton,
  StyledDashboardHeaderBox,
  StyledDashboardSection,
  StyledHeaderSection,
  StyledItem,
  StyledLeaderboardItems,
  StyledLeaderboardPage,
  StyledLeftBox,
  StyledProfileBox,
  StyledProfileInfoBox,
  StyledProfileTypography,
  StyledRankBox,
  StyledRightBox,
  StyledTopHunterBox,
  StyledTopHunterSectionBox,
  StyledTopHunterSkeleton,
  StyledTypography,
} from "./style";
import hunter from "Images/profileAvatar.png";
import BugSnackbar from "Components/BugSnackbar";
import { useNavigate } from "react-router-dom";

const BugLeaderBoard = () => {
  const { data, isLoading, error } = useLeaderBoard();
  return (
    <>
      <BugNavContainer>
        <StyledLeaderboardPage>
          <HeaderSection />
          <TopHunterSection
            topHunter={data?.[0]}
            isLoading={isLoading}
            error={error}
          />
          <DashboardSection data={data} isLoading={isLoading} error={error} />
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
      </StyledHeaderSection>
    </>
  );
};

const TopHunterSection = ({ topHunter, isLoading, error }) => {
  if (isLoading) {
    return (
      <StyledTopHunterSectionBox>
        <StyledTopHunterSkeleton height={150} variant="rounded" />
      </StyledTopHunterSectionBox>
    );
  }

  if (error) {
    return (
      <StyledTopHunterSectionBox>
        <BugSnackbar
          status="error"
          snackbarMessage={"Unable to withdraw your token. Please try again"}
        />
        <StyledTopHunterSkeleton
          height={150}
          animation={false}
          variant="rounded"
        />
      </StyledTopHunterSectionBox>
    );
  }

  return (
    <>
      <StyledTopHunterSectionBox>
        <BugBox>
          <StyledTopHunterBox>
            <StyledTypography variant="h2">Current Top Hunter</StyledTypography>
            <StyledProfileBox>
              <StyledAvatar alt="profile" src={hunter} />
              <StyledProfileInfoBox>
                <StyledProfileTypography variant="h2">
                  {topHunter?.name}
                </StyledProfileTypography>
                <StyledProfileTypography className="color">
                  {topHunter?.email}
                </StyledProfileTypography>
                <StyledProfileTypography variant="h2">
                  {topHunter?.solved_bugs} bug Solved
                </StyledProfileTypography>
              </StyledProfileInfoBox>
            </StyledProfileBox>
          </StyledTopHunterBox>
        </BugBox>
      </StyledTopHunterSectionBox>
    </>
  );
};

const DashboardSection = ({ data, isLoading, error }) => {
  const navigate = useNavigate();
  const renderContent = () => {
    if (isLoading) {
      return (
        <StyledLeaderboardItems>
          <StyledTopHunterSkeleton height={40} variant="rounded" />
          <StyledTopHunterSkeleton height={40} variant="rounded" />
          <StyledTopHunterSkeleton height={40} variant="rounded" />
        </StyledLeaderboardItems>
      );
    }

    if (error) {
      return (
        <StyledLeaderboardItems>
          <StyledTopHunterSkeleton
            animation={false}
            height={40}
            variant="rounded"
          />
          <StyledTopHunterSkeleton
            animation={false}
            height={40}
            variant="rounded"
          />
          <StyledTopHunterSkeleton
            animation={false}
            height={40}
            variant="rounded"
          />
        </StyledLeaderboardItems>
      );
    }

    return (
      <StyledLeaderboardItems>
        {data?.map(({ id, name, solved_bugs }, i) => {
          return (
            <StyledItem key={id}>
              <StyledLeftBox>
                <StyledRankBox>
                  <StyledTypography variant="h2">{i + 1}</StyledTypography>
                </StyledRankBox>
                <StyledBoardProfileBox>
                  <StyledBoardAvatar>{name.trim()[0]}</StyledBoardAvatar>
                  <StyledProfileInfoBox>
                    <StyledProfileTypography variant="h2">
                      {name}
                    </StyledProfileTypography>
                  </StyledProfileInfoBox>
                </StyledBoardProfileBox>
              </StyledLeftBox>
              <StyledRightBox>
                <StyledProfileTypography variant="footer" className="number">
                  {solved_bugs} bug solved
                </StyledProfileTypography>
                <StyledButton
                  onClick={() => navigate(`/hunter/${id}/profile`)}
                  variant="contained"
                >
                  View Profile
                </StyledButton>
              </StyledRightBox>
            </StyledItem>
          );
        })}
      </StyledLeaderboardItems>
    );
  };

  return (
    <>
      <StyledDashboardSection>
        <StyledDashboardHeaderBox>
          <StyledTypography variant="h2">Leaderboard</StyledTypography>
        </StyledDashboardHeaderBox>
        {renderContent()}
      </StyledDashboardSection>
    </>
  );
};
