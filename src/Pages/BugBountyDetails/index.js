import BugBox from "Components/BugBox";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledBox,
  StyledBugBountyPage,
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

const BugBounty = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useBountyDetails(id);

  if (isLoading) {
    return (
      <StyledLoadingBox>
        <StyledTypography variant="h1">Loading....</StyledTypography>
      </StyledLoadingBox>
    );
  }

  if (error) {
    return (
      <StyledBugBountyPage>
        <BugBackButton />
        <StyledLoadingBox>
          <StyledTypography variant="h1">
            Something is going wrong. Please try again
          </StyledTypography>
        </StyledLoadingBox>
      </StyledBugBountyPage>
    );
  }

  return (
    <StyledBugBountyPage>
      <BugBackButton />
      <TitleSection title={data?.title} created_by={data?.created_by?.name} />
      <DetailsSection
        priority={data?.severity}
        createdAt={data?.created_at}
        expireDate={data?.expiry_date}
      />
      <DescriptionSection
        summary={data?.description}
        expectedResult={data?.acceptance_criteria}
      />
      <StepsReproduceSection step_to_reproduce={data?.step_to_reproduce} />
      <ButtonSection id={id} />
    </StyledBugBountyPage>
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

const DetailsSection = ({ priority, expireDate, createdAt }) => {
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
  const formattedSteps = step_to_reproduce
    .split("\n")
    .map((step) => step.charAt(0).toUpperCase() + step.slice(1));

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
          onClick={() => navigator(`/bug/submit/${id}`)}
        >
          apply now
        </StyledButton>
      </StyledButtonSection>
    </StyledStack>
  );
};
