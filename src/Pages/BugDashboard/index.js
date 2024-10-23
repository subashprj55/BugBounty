import BugNavContainer from "Components/BugNavContainer";
import React from "react";
import {
  StyledActivityBox,
  StyledBox,
  StyledBoxSection,
  StyledButton,
  StyledChip,
  StyledDashboardPage,
  StyledDiv,
  StyledDollarIcon,
  StyledFlexBox,
  StyledRecentActivity,
  StyledTypography,
  StylePerformanceBox,
} from "./style";

const BugDashboard = () => {
  return (
    <>
      <BugNavContainer>
        <StyledDashboardPage>
          <BoxSection />
          <RecentActivity />
          <PerformanceInsightsSection />
        </StyledDashboardPage>
      </BugNavContainer>
    </>
  );
};

export default BugDashboard;

const BoxSection = () => {
  return (
    <>
      <StyledBoxSection>
        <StyledBox>
          <StyledFlexBox>
            <StyledTypography variant="h3">Active Bounties</StyledTypography>
            <StyledDollarIcon />
          </StyledFlexBox>
          <StyledTypography variant="h1">25</StyledTypography>
          <StyledTypography>View All</StyledTypography>
        </StyledBox>

        <StyledBox>
          <StyledFlexBox>
            <StyledTypography variant="h3">My Tokens</StyledTypography>
            <StyledDollarIcon />
          </StyledFlexBox>
          <StyledTypography variant="h1">1,234 XLOP</StyledTypography>
          <StyledButton variant="contained">Withdraw</StyledButton>
        </StyledBox>

        <StyledBox>
          <StyledFlexBox>
            <StyledTypography variant="h3">
              Top Hunter of the Month
            </StyledTypography>
            <StyledDollarIcon />
          </StyledFlexBox>
          <StyledTypography variant="h1">John Doe</StyledTypography>
          <StyledTypography>View profile</StyledTypography>
        </StyledBox>
      </StyledBoxSection>
    </>
  );
};

const RecentActivity = () => {
  return (
    <StyledRecentActivity>
      <StyledTypography variant="h2">Recent Activity</StyledTypography>

      <StyledActivityBox>
        <StyledDiv>
          <StyledTypography variant="h3">
            XSS Vulnerability Report
          </StyledTypography>
          <StyledTypography variant="h6">Submitted 2 days ago</StyledTypography>
        </StyledDiv>
        <StyledChip label="Pending" />
      </StyledActivityBox>

      <StyledActivityBox>
        <StyledDiv>
          <StyledTypography variant="h3">
            XSS Vulnerability Report
          </StyledTypography>
          <StyledTypography variant="h6">Submitted 2 days ago</StyledTypography>
        </StyledDiv>
        <StyledChip label="Approved" className="proved" />
      </StyledActivityBox>
    </StyledRecentActivity>
  );
};

const PerformanceInsightsSection = () => {
  return (
    <StyledRecentActivity>
      <StyledTypography variant="h2">Performance Insights</StyledTypography>

      <StyledActivityBox>
        <StylePerformanceBox>
          <StyledTypography className="color">
            Total Bugs Found
          </StyledTypography>
          <StyledTypography variant="h1">12</StyledTypography>
        </StylePerformanceBox>

        <StylePerformanceBox>
          <StyledTypography>Average Severity</StyledTypography>
          <StyledTypography variant="h1">7.5</StyledTypography>
        </StylePerformanceBox>

        <StylePerformanceBox>
          <StyledTypography>Response Time</StyledTypography>
          <StyledTypography variant="h1">24h</StyledTypography>
        </StylePerformanceBox>
      </StyledActivityBox>
    </StyledRecentActivity>
  );
};
