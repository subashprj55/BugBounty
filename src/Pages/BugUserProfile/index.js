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
import useUserProfile from "Hooks/useUserProfile";
import { getTimeLeftMessage } from "Utils/dateMessage";
const BugUserProfile = () => {
  const { state } = useAuth();
  const { data, isLoading, error } = useUserProfile();

  if (state.user.role === "hunter") {
    return (
      <>
        <BugNavContainer>
          <StyledUserProfilePage>
            <HeaderSection hunterData={data} />
            <ClosedBugsSection closed_bugs={data?.closed_bugs} />
            <PendingBugsSection pending_bugs={data?.pending_bugs} />
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
            <ClientHeaderSection clientData={data} />
            <ClientBugsSection bounties={data?.bounties} />
          </StyledUserProfilePage>
        </BugNavContainer>
      </>
    );
  }
};

//hunter

export default BugUserProfile;

const HeaderSection = ({ hunterData }) => {
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
                  {Math.floor(hunterData?.balance)} Xloop tooken
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
                {Math.floor(hunterData?.total_earned)} Xloop tokens
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledSuccess />
              <StyledTypography variant="h3">
                Total Approved Solutions:
              </StyledTypography>
              <StyledTypography className="font" variant="h3">
                {hunterData?.total_bugs}
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledPending />
              <StyledTypography variant="h3">
                Pending Solutions :
              </StyledTypography>
              <StyledTypography className="font" variant="h3">
                {hunterData?.solved_bugs}
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledGradeIcon />
              <StyledTypography variant="h3">Success Rate :</StyledTypography>
              <StyledTypography className="font" variant="h3">
                {hunterData?.success_rate}%
              </StyledTypography>
            </StyledDescriptionInfoBox>
          </StyledProfileDescription>
        </StyledTopBox>
      </BugBox>
    </StyledStack>
  );
};

const ClosedBugsSection = ({ closed_bugs }) => {
  return (
    <StyledClosedBugSection>
      <BugBox>
        <StyledClosedStack>
          <StyledTypography variant="h2">Closed Solutions</StyledTypography>

          <StyledInfoBox>
            {closed_bugs?.map(({ id, title, status, related_bounty }) => {
              return (
                <StyledInfoList key={id}>
                  <StyledButtonBox>
                    <StyledTypography variant="h3" className="font">
                      {title}
                    </StyledTypography>
                    <StyledStatusTypography variant="h3" className={status}>
                      {status}
                    </StyledStatusTypography>
                  </StyledButtonBox>

                  <Link to={`/bounty/${related_bounty?.id}/bug/${id}`}>
                    <StyledTypography variant="footer">
                      View Details
                    </StyledTypography>
                  </Link>
                </StyledInfoList>
              );
            })}
          </StyledInfoBox>
        </StyledClosedStack>
      </BugBox>
    </StyledClosedBugSection>
  );
};

const PendingBugsSection = ({ pending_bugs }) => {
  return (
    <StyledClosedBugSection>
      <BugBox>
        <StyledClosedStack>
          <StyledTypography variant="h2">Pending Solutions</StyledTypography>

          <StyledInfoBox>
            {pending_bugs?.map(({ id, title, status, related_bounty }) => {
              return (
                <StyledInfoList key={id}>
                  <StyledButtonBox>
                    <StyledTypography variant="h3" className="font">
                      {title}
                    </StyledTypography>
                    <StyledStatusTypography variant="h3" className={status}>
                      {status}
                    </StyledStatusTypography>
                  </StyledButtonBox>
                  <Link to={`/bounty/${related_bounty?.id}/bug/${id}`}>
                    <StyledTypography variant="footer">
                      View Details
                    </StyledTypography>
                  </Link>
                </StyledInfoList>
              );
            })}
          </StyledInfoBox>
        </StyledClosedStack>
      </BugBox>
    </StyledClosedBugSection>
  );
};

///client
const ClientHeaderSection = ({ clientData }) => {
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
                  {Math.floor(clientData?.balance)} Xloop tooken
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
                {clientData?.total_bounties}
              </StyledTypography>
            </StyledDescriptionInfoBox>
            <StyledDescriptionInfoBox>
              <StyledSuccess />
              <StyledTypography variant="h3">expired bugs :</StyledTypography>
              <StyledTypography className="font" variant="h3">
                {clientData?.expired_bounties}
              </StyledTypography>
            </StyledDescriptionInfoBox>
            {/* <StyledDescriptionInfoBox>
              <StyledPending />
              <StyledTypography variant="h3">Pending Bugs :</StyledTypography>
              <StyledTypography className="font" variant="h3">
                {hunterData?.total_bounties - hunterData?.expired_bounties}
              </StyledTypography>
            </StyledDescriptionInfoBox> */}
          </StyledProfileDescription>
        </StyledTopBox>
      </BugBox>
    </StyledStack>
  );
};

const ClientBugsSection = ({ bounties }) => {
  return (
    <StyledClosedBugSection>
      <BugBox>
        <StyledClosedStack>
          <StyledTypography variant="h2">Bugs Status</StyledTypography>
          <StyledInfoBox>
            {bounties?.map(({ title, id, expiry_date }) => {
              const date = getTimeLeftMessage(expiry_date);
              console.log(date);
              return (
                <StyledInfoList key={id}>
                  <StyledButtonBox>
                    <StyledTypography variant="h3" className="font">
                      {title}
                    </StyledTypography>
                    <StyledStatusTypography
                      variant="h3"
                      className={date === "Expired" ? "rejected" : "date"}
                    >
                      {date}
                    </StyledStatusTypography>
                  </StyledButtonBox>
                  <Link to={`/bounty/${id}`}>
                    <StyledTypography variant="footer">
                      View Details
                    </StyledTypography>
                  </Link>
                </StyledInfoList>
              );
            })}
          </StyledInfoBox>
        </StyledClosedStack>
      </BugBox>
    </StyledClosedBugSection>
  );
};
