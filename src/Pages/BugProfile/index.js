import BugNavContainer from "Components/BugNavContainer";
import React from "react";
import {
  BadgeSkeleton,
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
  StyledLoaderBox,
  StyledProfileBox,
  StyledProfileHead,
  StyledProfilePageBox,
  StyledRecentActivitySection,
  StyledSkeleton,
  StyledStack,
  StyledTypography,
} from "./style";
import profileAvatar from "Images/profileAvatar.png";
import BugTable from "Components/BugTable";
import CupIcon from "Images/cup.png";
import Shield from "Images/shield.png";
import Mark from "Images/mark.png";
import BugBox from "Components/BugBox";
import { useNavigate, useParams } from "react-router-dom";
import useHunterData from "Hooks/useHunterData";

const BugProfile = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useHunterData(id);

  return (
    <>
      <BugNavContainer>
        <StyledProfilePageBox>
          <TitleSection data={data} isLoading={isLoading} error={error} />
          <BadgesSection isLoading={isLoading} error={error} />
        </StyledProfilePageBox>
      </BugNavContainer>
    </>
  );
};

export default BugProfile;

const TitleSection = ({ data, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <StyledProfileBox>
            <StyledSkeleton variant="rounded" />
          </StyledProfileBox>
          <StyledLoaderBox>
            <StyledSkeleton variant="rounded" />
          </StyledLoaderBox>
        </>
      );
    }

    if (error) {
      return (
        <>
          <StyledProfileBox>
            <StyledSkeleton animation={false} variant="rounded" />
          </StyledProfileBox>
          <StyledLoaderBox>
            <StyledSkeleton animation={false} variant="rounded" />
          </StyledLoaderBox>
        </>
      );
    }

    return (
      <>
        <BugBox>
          <StyledProfileBox>
            <StyledProfileHead>
              <StyledDiv>
                <StyledAvatar src={profileAvatar} />
                <StyledTypography variant="h2" className="font">
                  {data?.name}
                </StyledTypography>
              </StyledDiv>
            </StyledProfileHead>

            <StyledProfileHead>
              <StyledChip label={`Rank #${data?.rank}`} />
            </StyledProfileHead>

            <StyledDetails className="space">
              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  {Math.floor(data?.solved_bugs)}
                </StyledTypography>
                <StyledTypography variant="h6">Bug Solved</StyledTypography>
              </StyledDiv>

              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  {data?.total_bugs_reported}
                </StyledTypography>
                <StyledTypography variant="h6">Bug Reported</StyledTypography>
              </StyledDiv>
            </StyledDetails>

            <StyledDetails>
              <StyledDiv>
                <StyledTypography variant="h2" className="font font-roboto">
                  {Math.floor(data?.success_rate)}%
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
          <BugTable data={data?.recent_activities} />
        </StyledRecentActivitySection>
      </>
    );
  };
  return (
    <>
      <StyledHeaderBox>
        <StyledTypography variant="h1">Hunter Profile</StyledTypography>
      </StyledHeaderBox>

      <StyledStack>{renderContent()}</StyledStack>
    </>
  );
};

const BadgesSection = ({ isLoading, error }) => {
  const navigate = useNavigate();
  if (isLoading) {
    return <BadgeSkeleton variant="rounded" height={150} />;
  }

  if (error) {
    return <BadgeSkeleton animation={false} variant="rounded" height={150} />;
  }

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
        <StyledButton
          onClick={() => navigate("/leaderboard")}
          variant="contained"
        >
          Back to Leader Board
        </StyledButton>
      </StyledButtonBox>
    </>
  );
};
