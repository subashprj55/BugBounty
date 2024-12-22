import BugBox from "Components/BugBox";
import BugNavContainer from "Components/BugNavContainer";
import React from "react";
import {
  StyledAvatar,
  StyledButtonBox,
  StyledClosedBugSection,
  StyledClosedStack,
  StyledDescriptionInfoBox,
  StyledDiv,
  StyledInfoBox,
  StyledInfoList,
  StyledProfileBox,
  StyledProfileDescription,
  StyledProfileHead,
  StyledStack,
  StyledStatusTypography,
  StyledTextBox,
  StyledTypography,
  StyledUserProfilePage,
} from "./style";
import hunterImage from "Images/profileAvatar.png";
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
        <StyledProfileBox>
          <StyledProfileHead>
            <StyledDiv>
              <StyledAvatar src={hunterImage} />
              <StyledTypography variant="h2">
                {state.user.name}
              </StyledTypography>
              <StyledTypography variant="h6" className="font">
                {state.user.email}
              </StyledTypography>
            </StyledDiv>
          </StyledProfileHead>
        </StyledProfileBox>
      </BugBox>

      <StyledProfileDescription>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h2">
              total Xloop tokens Earn :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">11370</StyledTypography>
        </StyledDescriptionInfoBox>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h2">
              Remaining Balance :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">1000</StyledTypography>
        </StyledDescriptionInfoBox>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h3">
              total solution submitted :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">137</StyledTypography>
        </StyledDescriptionInfoBox>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h3">
              total Solution Approved :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">104</StyledTypography>
        </StyledDescriptionInfoBox>
      </StyledProfileDescription>
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
        <StyledProfileBox>
          <StyledProfileHead>
            <StyledDiv>
              <StyledAvatar src={hunterImage} />
              <StyledTypography variant="h2">
                {state.user.name}
              </StyledTypography>
              <StyledTypography variant="h6" className="font">
                {state.user.email}
              </StyledTypography>
            </StyledDiv>
          </StyledProfileHead>
        </StyledProfileBox>
      </BugBox>

      <StyledProfileDescription>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h2">
              Remaining Balance :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">10,000</StyledTypography>
        </StyledDescriptionInfoBox>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h3">
              total Bug Post :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">137</StyledTypography>
        </StyledDescriptionInfoBox>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h3">
              Solved bug :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">104</StyledTypography>
        </StyledDescriptionInfoBox>
        <StyledDescriptionInfoBox>
          <StyledTextBox>
            <StyledTypography className="font" variant="h3">
              Pending Bug :
            </StyledTypography>
          </StyledTextBox>
          <StyledTypography variant="h3">25</StyledTypography>
        </StyledDescriptionInfoBox>
      </StyledProfileDescription>
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
