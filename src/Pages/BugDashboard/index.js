import BugNavContainer from "Components/BugNavContainer";
import BugSnackbar from "Components/BugSnackbar";
import useDashboard from "Hooks/usedashboard";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Utils/authProvider";
import {
  StyledActivityBox,
  StyledBox,
  StyledBoxSection,
  StyledBugIcon,
  StyledButton,
  StyledDiv,
  StyledDollarIcon,
  StyledFlexBox,
  StyledLink,
  StyledRecentActivity,
  StyledRepeatOneIcon,
  StyledSkeleton,
  StyledTypography,
  StylePerformanceBox,
} from "./style";

const BugDashboard = () => {
  const { data, isLoading, error } = useDashboard();

  return (
    <>
      <BugNavContainer>
        <BoxSection
          activeBounties={data?.active_bounties}
          token={data?.my_token}
          topHunter={data?.top_hunter_of_the_month}
          isLoading={isLoading}
          error={error}
        />
        <RecentActivity
          recent_activities={data?.recent_activities}
          isLoading={isLoading}
          error={error}
        />
        <PerformanceInsightsSection
          performance_insight={data?.performance_insight}
          isLoading={isLoading}
          error={error}
        />
      </BugNavContainer>
    </>
  );
};

export default BugDashboard;

const BoxSection = ({ activeBounties, token, topHunter, isLoading, error }) => {
  const navigate = useNavigate();
  const { state } = useAuth();

  if (isLoading) {
    return (
      <StyledBoxSection>
        <StyledBox>
          <StyledSkeleton variant="rounded" height={100} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton variant="rounded" height={100} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton variant="rounded" height={100} />
        </StyledBox>
      </StyledBoxSection>
    );
  }

  if (error) {
    return (
      <StyledBoxSection>
        <BugSnackbar
          status="error"
          snackbarMessage={"Something went wrong. Please try"}
        />
        <StyledBox>
          <StyledSkeleton animation={false} variant="rounded" height={100} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton animation={false} variant="rounded" height={100} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton animation={false} variant="rounded" height={100} />
        </StyledBox>
      </StyledBoxSection>
    );
  }

  return (
    <>
      <StyledBoxSection>
        <StyledBox>
          <StyledFlexBox>
            <StyledTypography variant="h3">Active Bounties</StyledTypography>
            <StyledBugIcon />
          </StyledFlexBox>
          <StyledFlexBox className="space">
            <StyledTypography variant="h1">{activeBounties}</StyledTypography>
            <StyledLink to={"/bounties"}>
              <StyledTypography>View All -&gt;</StyledTypography>
            </StyledLink>
          </StyledFlexBox>
        </StyledBox>

        <StyledBox>
          <StyledFlexBox>
            <StyledTypography variant="h3">My Tokens</StyledTypography>
            <StyledDollarIcon />
          </StyledFlexBox>
          <StyledFlexBox className="space">
            <StyledTypography variant="h1">{token} XLOP</StyledTypography>
            {state?.user?.role === "hunter" && (
              <StyledButton
                onClick={() => navigate("/rewards")}
                variant="contained"
              >
                Withdraw
              </StyledButton>
            )}
          </StyledFlexBox>
        </StyledBox>

        <StyledBox>
          <StyledFlexBox>
            <StyledTypography variant="h3">
              Top Hunter of the Month
            </StyledTypography>
            <StyledRepeatOneIcon />
          </StyledFlexBox>
          <StyledFlexBox className="space">
            <StyledTypography variant="h1">
              {topHunter?.hunter_name}
            </StyledTypography>
            <StyledLink to={`/hunter/${topHunter?.id}/profile`}>
              <StyledTypography>View Profile</StyledTypography>
            </StyledLink>
          </StyledFlexBox>
        </StyledBox>
      </StyledBoxSection>
    </>
  );
};

const RecentActivity = ({ recent_activities, isLoading, error }) => {
  if (isLoading) {
    return (
      <StyledRecentActivity>
        <StyledSkeleton variant="rectangular" height={100} />
      </StyledRecentActivity>
    );
  }

  if (error) {
    return (
      <StyledRecentActivity>
        <StyledSkeleton animation={false} variant="rectangular" height={100} />
      </StyledRecentActivity>
    );
  }

  return (
    <StyledRecentActivity>
      <StyledTypography variant="h2">Recent Activity</StyledTypography>

      {recent_activities?.map((item, i) => {
        return (
          <StyledActivityBox key={i}>
            <StyledDiv>
              <StyledTypography className="font-size" variant="h2">
                {item}
              </StyledTypography>
              <StyledTypography variant="h6">
                Submitted 2 days ago
              </StyledTypography>
            </StyledDiv>
            {/* <StyledChip label="Pending" /> */}
          </StyledActivityBox>
        );
      })}
    </StyledRecentActivity>
  );
};

const PerformanceInsightsSection = ({
  performance_insight,
  isLoading,
  error,
}) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <StylePerformanceBox>
            <StyledSkeleton variant="rounded" height={100} />
          </StylePerformanceBox>
          <StylePerformanceBox>
            <StyledSkeleton variant="rounded" height={100} />
          </StylePerformanceBox>
          <StylePerformanceBox>
            <StyledSkeleton variant="rounded" height={100} />
          </StylePerformanceBox>
        </>
      );
    }

    if (error) {
      return (
        <>
          <StylePerformanceBox>
            <StyledSkeleton animation variant="rounded" height={100} />
          </StylePerformanceBox>
          <StylePerformanceBox>
            <StyledSkeleton animation variant="rounded" height={100} />
          </StylePerformanceBox>
          <StylePerformanceBox>
            <StyledSkeleton animation variant="rounded" height={100} />
          </StylePerformanceBox>
        </>
      );
    }

    return (
      <>
        <StylePerformanceBox>
          <StyledTypography className="color">
            Total Bugs Found
          </StyledTypography>
          <StyledTypography variant="h1">
            {performance_insight?.total_bug_approved}
          </StyledTypography>
        </StylePerformanceBox>

        <StylePerformanceBox>
          <StyledTypography>Average Severity</StyledTypography>
          <StyledTypography variant="h1">
            {performance_insight?.average_security}
          </StyledTypography>
        </StylePerformanceBox>

        <StylePerformanceBox>
          <StyledTypography>Response Time</StyledTypography>
          <StyledTypography variant="h1">24h</StyledTypography>
        </StylePerformanceBox>
      </>
    );
  };
  return (
    <StyledRecentActivity>
      <StyledTypography variant="h2">Performance Insights</StyledTypography>

      <StyledActivityBox>{renderContent()}</StyledActivityBox>
    </StyledRecentActivity>
  );
};
