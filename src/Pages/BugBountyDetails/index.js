import BugBox from "Components/BugBox";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledAvatar,
  StyledBox,
  StyledBugBountyPage,
  StyledBugBox,
  StyledBugItemsBox,
  StyledBugPendingBox,
  StyledBugSection,
  StyledBugStack,
  StyledBugSummerySection,
  StyledBugTitleSection,
  StyledBugTypography,
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
  StyledLink,
  StyledLoadingBox,
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
import useBountyDetails from "Hooks/useBountyDetails";
import { format } from "date-fns";
import profile from "Images/profile.png";
import { getVisibleBugs } from "Utils/getVisibleBug";
import BugNavContainer from "Components/BugNavContainer";
import BugLoader from "Components/BugLoader";

const BugBounty = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useBountyDetails(id);

  if (isLoading) {
    return (
      <BugNavContainer>
        <StyledLoadingBox>
          <BugLoader />
        </StyledLoadingBox>
      </BugNavContainer>
    );
  }

  if (error) {
    return (
      <BugNavContainer>
        <StyledBugBountyPage>
          <BugBackButton />
          <StyledLoadingBox>
            <StyledTypography variant="h1">
              Something is going wrong. Please try again
            </StyledTypography>
          </StyledLoadingBox>
        </StyledBugBountyPage>
      </BugNavContainer>
    );
  }

  return (
    <BugNavContainer>
      <StyledBugBountyPage>
        <BugBackButton />
        <TitleSection title={data?.title} created_by={data?.created_by?.name} />
        <DetailsSection
          priority={data?.severity}
          createdAt={data?.created_at}
          expireDate={data?.expiry_date}
          rewarded_amount={data?.rewarded_amount}
        />
        <DescriptionSection
          summary={data?.description}
          expectedResult={data?.acceptance_criteria}
        />
        <StepsReproduceSection step_to_reproduce={data?.step_to_reproduce} />
        <ButtonSection id={id} />
        <BugSection authorEmail={data?.created_by?.email} bugs={data?.bugs} />
      </StyledBugBountyPage>
    </BugNavContainer>
  );
};

export default BugBounty;

const TitleSection = ({ title, created_by }) => {
  return (
    <StyledTitleSection>
      <PestControlOutlinedIcon />
      <StyledTitleBox>
        <StyledTypography className="capitalize" variant="h1">
          {title}
        </StyledTypography>
        <StyledTypography variant="h3" className="capitalize">
          Created By : {created_by}
        </StyledTypography>
      </StyledTitleBox>
    </StyledTitleSection>
  );
};

const DetailsSection = ({
  priority,
  expireDate,
  createdAt,
  rewarded_amount,
}) => {
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
                  <StyledPriorityTypography
                    variant="h3"
                    className={`${priority}`}
                  >
                    {priority}
                  </StyledPriorityTypography>
                </StyledDetailRow>
                <StyledDetailRow>
                  <StyledTypography variant="footer">
                    Expire In :
                  </StyledTypography>
                  <StyledTypography variant="h3">
                    <span>
                      {format(new Date(expireDate), "yyyy-MM-dd HH:mm")}
                    </span>
                  </StyledTypography>
                </StyledDetailRow>
                <StyledDetailRow>
                  <StyledDetailsTypography variant="footer">
                    Reward Amount :
                  </StyledDetailsTypography>
                  <StyledPriorityTypography variant="h3">
                    ${Math.floor(rewarded_amount)}
                  </StyledPriorityTypography>
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
                <StyledDetailRow>
                  <StyledTypography variant="footer">
                    Created At :
                  </StyledTypography>
                  <StyledTypography variant="h3">
                    <span>
                      {format(new Date(createdAt), "yyyy-MM-dd HH:mm")}
                    </span>
                  </StyledTypography>
                </StyledDetailRow>
              </StyledDetailsItems>
            </StyledContainerBox>
          </StyledBox>
        </StyledDetailsBox>
      </BugBox>
    </StyledStack>
  );
};

const DescriptionSection = ({ summary, expectedResult }) => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDescriptionBox>
          <StyledTypography variant="h2">Description</StyledTypography>
          <StyledBox>
            <StyledTypography variant="h3">Summary :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">{summary}</StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>

          <StyledBox>
            <StyledTypography variant="h3">Expected Result :</StyledTypography>
            <StyledDescriptionStack>
              <StyledTypography variant="footer">
                {expectedResult}
              </StyledTypography>
            </StyledDescriptionStack>
          </StyledBox>
        </StyledDescriptionBox>
      </BugBox>
    </StyledStack>
  );
};

const StepsReproduceSection = ({ step_to_reproduce }) => {
  if (!step_to_reproduce) {
    return <></>;
  }
  const formattedSteps = step_to_reproduce
    ?.split("\n")
    ?.map((step) => step.charAt(0).toUpperCase() + step.slice(1));

  return (
    <StyledStack>
      <BugBox>
        <StyledReproduceBox>
          <StyledTypography variant="h2">Steps to Reproduce :</StyledTypography>
          <StyledItemsBox>
            <StyledReproduceStack>
              {formattedSteps?.map((item) => {
                return (
                  <StyledTypography variant="footer" key={item}>
                    {item}
                  </StyledTypography>
                );
              })}
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
          onClick={() => navigator(`/bounty/${id}/bug/create`)}
        >
          Create Solution
        </StyledButton>
      </StyledButtonSection>
    </StyledStack>
  );
};

const BugSection = ({ authorEmail, bugs }) => {
  const { id: bountyId } = useParams();
  const { state } = useAuth();
  const newBugs = getVisibleBugs(authorEmail, bugs, state.user.email);

  if (newBugs.length === 0) {
    return <></>;
  }

  return (
    <StyledStack>
      <StyledBugSection>
        <StyledTypography variant="h1" className="capitalize">
          Bug Solutions
        </StyledTypography>

        {newBugs.map(
          ({
            id,
            title,
            expected_result,
            submitted_by,
            submitted_at,
            status,
          }) => {
            return (
              <StyledBugStack key={id}>
                <StyledBugTitleSection>
                  <StyledAvatar alt="hunter profile" src={profile} />
                  <StyledTitleBox>
                    <StyledTypography className="capitalize" variant="h2">
                      {title}
                    </StyledTypography>
                    <StyledTypography variant="footer" className="capitalize">
                      Submitted By : {submitted_by?.name}
                    </StyledTypography>
                  </StyledTitleBox>
                </StyledBugTitleSection>

                <StyledBugBox>
                  {expected_result && (
                    <StyledBugSummerySection>
                      <StyledTypography variant="h3">
                        Bug Solution :
                      </StyledTypography>
                      <StyledBugItemsBox>
                        <StyledTypography variant="footer">
                          {expected_result}
                        </StyledTypography>
                      </StyledBugItemsBox>
                    </StyledBugSummerySection>
                  )}

                  <StyledBugSummerySection>
                    <StyledBugPendingBox>
                      <StyledDetailsTypography variant="h3">
                        Status :
                      </StyledDetailsTypography>
                      <StyledBugItemsBox>
                        <StyledStatusTypography
                          variant="h3"
                          className={`${status}`}
                        >
                          {status}
                        </StyledStatusTypography>
                      </StyledBugItemsBox>
                    </StyledBugPendingBox>
                  </StyledBugSummerySection>

                  <StyledBugSummerySection>
                    <StyledBugPendingBox>
                      <StyledTypography variant="h3">
                        Submission Date :
                      </StyledTypography>
                      <StyledTypography variant="h3">
                        <span>
                          {format(new Date(submitted_at), "yyyy-MM-dd HH:mm")}
                        </span>
                      </StyledTypography>
                    </StyledBugPendingBox>
                  </StyledBugSummerySection>
                </StyledBugBox>

                <StyledBugSummerySection>
                  <StyledBugPendingBox className="end">
                    <StyledLink to={`/bounty/${bountyId}/bug/${id}`}>
                      <StyledBugTypography variant="footer">
                        More Details-&gt;
                      </StyledBugTypography>
                    </StyledLink>
                  </StyledBugPendingBox>
                </StyledBugSummerySection>
              </StyledBugStack>
            );
          }
        )}
      </StyledBugSection>
    </StyledStack>
  );
};
