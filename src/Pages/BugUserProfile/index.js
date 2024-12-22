import BugBox from "Components/BugBox";
import BugNavContainer from "Components/BugNavContainer";
import React from "react";
import {
  StyledAddCardIcon,
  StyledAvatar,
  StyledBox,
  StyledBug,
  StyledButtonBox,
  StyledClosedBugSection,
  StyledClosedStack,
  StyledDescriptionInfoBox,
  StyledDiv,
  StyledEmail,
  StyledGradeIcon,
  StyledInfoBox,
  StyledInfoList,
  StyledPending,
  StyledPersonIcon,
  StyledProfileBox,
  StyledProfileDescription,
  StyledProfileHead,
  StyledRole,
  StyledStack,
  StyledStatusTypography,
  StyledSuccess,
  StyledTopBox,
  StyledTypography,
  StyledUserProfilePage,
  StyledWallet,
} from "./style";
import hunterImage from "Images/profileAvatar.png";
import clientProfile from "Images/profile.png";
import { useAuth } from "Utils/authProvider";
import { Link } from "react-router-dom";
const BugUserProfile = () => {
  const { state } = useAuth();

  if (state.user.role === "hunter") {
    return (
      <>
        <BugNavContainer>
          <StyledUserProfilePage>
            <HeaderSection />
            <ClosedBugsSection />
            <PendingBugsSection />
          </StyledUserProfilePage>
        </BugNavContainer>
      </>
    );
  }

  if (state.user.role === "client") {
    return (
      <>
        <BugNavContainer>
          <StyledUserProfilePage>
            <ClientHeaderSection />
            <ClientBugsSection />
          </StyledUserProfilePage>
        </BugNavContainer>
      </>
    );
  }
};

//hunter

export default BugUserProfile;

const HeaderSection = () => {
  const { state } = useAuth();
  return (
    <StyledStack>
      <BugBox>
        <StyledTopBox>
          <StyledBox>
            <StyledProfileBox>
              <StyledProfileHead>
                <StyledDiv>
                  <StyledAvatar src={hunterImage} />
                </StyledDiv>
              </StyledProfileHead>
            </StyledProfileBox>

            <StyledProfileDescription>
              <StyledDescriptionInfoBox>
                <StyledPersonIcon />
                <StyledTypography variant="h2">User Name : </StyledTypography>
                <StyledTypography className="font" variant="h3">
                  {state.user.name}
                </StyledTypography>
              </StyledDescriptionInfoBox>
              <StyledDescriptionInfoBox>
                <StyledEmail />
                <StyledTypography variant="h3">Email :</StyledTypography>
                <StyledTypography className="font" variant="h3">
                  {state.user.email}
                </StyledTypography>
              </StyledDescriptionInfoBox>
              <StyledDescriptionInfoBox>
                <StyledWallet />
                <StyledTypography variant="h3"> Balance :</StyledTypography>
                <StyledTypography className="font" variant="h3">
                  5347 Xloop tooken
                </StyledTypography>
              </StyledDescriptionInfoBox>
              <StyledDescriptionInfoBox>
                <StyledRole />
                <StyledTypography variant="h3">Role :</StyledTypography>
                <StyledTypography className="font" variant="h3">
                  {state.user.role}
                </StyledTypography>
              </StyledDescriptionInfoBox>
            </StyledProfileDescription>
          </StyledBox>

          <StyledProfileDescription>
            <StyledDescriptionInfoBox>
              <StyledAddCardIcon />
              <StyledTypography variant="h3">total earned:</StyledTypography>
              <StyledTypography className="font" variant="h3">
                23455 Xloop tokens
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledSuccess />
              <StyledTypography variant="h3">
                Total Approved Solutions:
              </StyledTypography>
              <StyledTypography className="font" variant="h3">
                104
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledPending />
              <StyledTypography variant="h3">
                Pending Solutions :
              </StyledTypography>
              <StyledTypography className="font" variant="h3">
                25
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledGradeIcon />
              <StyledTypography variant="h3">Success Rate :</StyledTypography>
              <StyledTypography className="font" variant="h3">
                25%
              </StyledTypography>
            </StyledDescriptionInfoBox>
          </StyledProfileDescription>
        </StyledTopBox>
      </BugBox>
    </StyledStack>
  );
};

const ClosedBugsSection = () => {
  return (
    <StyledClosedBugSection>
      <BugBox>
        <StyledClosedStack>
          <StyledTypography variant="h2">Closed Solutions</StyledTypography>

          <StyledInfoBox>
            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="accepted">
                  accepted
                </StyledStatusTypography>
              </StyledButtonBox>

              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>

            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="rejected">
                  rejected
                </StyledStatusTypography>
              </StyledButtonBox>

              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>

            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="rejected">
                  rejected
                </StyledStatusTypography>
              </StyledButtonBox>

              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>
          </StyledInfoBox>
        </StyledClosedStack>
      </BugBox>
    </StyledClosedBugSection>
  );
};

const PendingBugsSection = () => {
  return (
    <StyledClosedBugSection>
      <BugBox>
        <StyledClosedStack>
          <StyledTypography variant="h2">Pending Solutions</StyledTypography>

          <StyledInfoBox>
            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="pending">
                  pending
                </StyledStatusTypography>
              </StyledButtonBox>
              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>

            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="pending">
                  pending
                </StyledStatusTypography>
              </StyledButtonBox>
              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>

            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="pending">
                  pending
                </StyledStatusTypography>
              </StyledButtonBox>

              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>
          </StyledInfoBox>
        </StyledClosedStack>
      </BugBox>
    </StyledClosedBugSection>
  );
};

///client
const ClientHeaderSection = () => {
  const { state } = useAuth();
  return (
    <StyledStack>
      <BugBox>
        <StyledTopBox>
          <StyledBox>
            <StyledProfileBox>
              <StyledProfileHead>
                <StyledDiv>
                  <StyledAvatar src={clientProfile} />
                </StyledDiv>
              </StyledProfileHead>
            </StyledProfileBox>

            <StyledProfileDescription>
              <StyledDescriptionInfoBox>
                <StyledPersonIcon />
                <StyledTypography variant="h2">User Name : </StyledTypography>
                <StyledTypography className="font" variant="h3">
                  {state.user.name}
                </StyledTypography>
              </StyledDescriptionInfoBox>
              <StyledDescriptionInfoBox>
                <StyledEmail />
                <StyledTypography variant="h3">Email :</StyledTypography>
                <StyledTypography className="font" variant="h3">
                  {state.user.email}
                </StyledTypography>
              </StyledDescriptionInfoBox>
              <StyledDescriptionInfoBox>
                <StyledWallet />
                <StyledTypography variant="h3"> Balance :</StyledTypography>
                <StyledTypography className="font" variant="h3">
                  75347 Xloop tooken
                </StyledTypography>
              </StyledDescriptionInfoBox>
              <StyledDescriptionInfoBox>
                <StyledRole />
                <StyledTypography variant="h3">Role :</StyledTypography>
                <StyledTypography className="font" variant="h3">
                  {state.user.role}
                </StyledTypography>
              </StyledDescriptionInfoBox>
            </StyledProfileDescription>
          </StyledBox>

          <StyledProfileDescription>
            <StyledDescriptionInfoBox>
              <StyledBug />
              <StyledTypography variant="h3">
                Number of Bug Post :
              </StyledTypography>
              <StyledTypography className="font" variant="h3">
                137
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledSuccess />
              <StyledTypography variant="h3">
                Total Solved bugs :
              </StyledTypography>
              <StyledTypography className="font" variant="h3">
                104
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledPending />
              <StyledTypography variant="h3">Pending Bugs :</StyledTypography>
              <StyledTypography className="font" variant="h3">
                25
              </StyledTypography>
            </StyledDescriptionInfoBox>
            {/* <StyledDescriptionInfoBox>
              <StyledGradeIcon />
              <StyledTypography variant="h3">Success Rate :</StyledTypography>
              <StyledTypography className="font" variant="h3">
                25%
              </StyledTypography>
            </StyledDescriptionInfoBox> */}
          </StyledProfileDescription>
        </StyledTopBox>
      </BugBox>
    </StyledStack>
  );
};

const ClientBugsSection = () => {
  return (
    <StyledClosedBugSection>
      <BugBox>
        <StyledClosedStack>
          <StyledTypography variant="h2">Bugs Status</StyledTypography>
          <StyledInfoBox>
            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="open">
                  open
                </StyledStatusTypography>
              </StyledButtonBox>
              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>

            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="open">
                  open
                </StyledStatusTypography>
              </StyledButtonBox>
              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>

            <StyledInfoList>
              <StyledButtonBox>
                <StyledTypography variant="h3" className="font">
                  Message isn't deliver
                </StyledTypography>
                <StyledStatusTypography variant="h3" className="accepted">
                  accepted
                </StyledStatusTypography>
              </StyledButtonBox>

              <Link to={""}>
                <StyledTypography variant="footer">
                  View Details
                </StyledTypography>
              </Link>
            </StyledInfoList>
          </StyledInfoBox>
        </StyledClosedStack>
      </BugBox>
    </StyledClosedBugSection>
  );
};
