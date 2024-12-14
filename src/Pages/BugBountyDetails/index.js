import BugBox from "Components/BugBox";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledAvatar,
  StyledBottomBox,
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
  StyledButtonGroup,
  StyledButtons,
  StyledButtonSection,
  StyledContainerBox,
  StyledDescriptionBox,
  StyledDescriptionStack,
  StyledDetailRow,
  StyledDetailsBox,
  StyledDetailsItems,
  StyledDetailsTypography,
  StyledIconButton,
  StyledLink,
  StyledLoadingBox,
  StyledMenu,
  StyledMenuItem,
  StyledModal,
  StyledModelBox,
  StyledPopUpBox,
  StyledPopUpButton,
  StyledPopUpTypography,
  StyledPriorityTypography,
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useDeleteBounty from "Hooks/useDeleteBounty";
import BugSnackbar from "Components/BugSnackbar";

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
        <ButtonSection id={id} data={data} />
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

//hunter can create bug
//author can edit or delete bounty
const options = ["Edit Bug", "Delete Bug"];
const ButtonSection = ({ id, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPopUpModalOpen, setIsPopUpModalOpen] = useState(false);
  const navigator = useNavigate();
  const {
    state: { user },
  } = useAuth();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePrimaryClick = () => {
    if (options[selectedIndex] === "Edit Bug") {
      navigator(`/bounty/edit/${id}`);
    }
    if (options[selectedIndex] === "Delete Bug") {
      setIsPopUpModalOpen(true);
    }
  };

  if (user.role === "hunter") {
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
  }

  if (data?.created_by?.email === user.email) {
    return (
      <>
        <StyledStack>
          <StyledButtonSection>
            <StyledButtonGroup
              variant="contained"
              aria-label="Split button dropdown"
            >
              <StyledButtons onClick={handlePrimaryClick}>
                {options[selectedIndex]}
              </StyledButtons>
              <StyledIconButton
                size="small"
                aria-controls={anchorEl ? "menu" : undefined}
                aria-haspopup="true"
                onClick={handleMenuClick}
              >
                <ArrowDropDownIcon />
              </StyledIconButton>
            </StyledButtonGroup>
            <StyledMenu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {options.map((option, index) => (
                <StyledMenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={() => handleMenuItemClick(index)}
                >
                  {option}
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </StyledButtonSection>
        </StyledStack>
        {isPopUpModalOpen && (
          <PopUpModal
            data={data}
            isPopUpModalOpen={isPopUpModalOpen}
            setIsPopUpModalOpen={setIsPopUpModalOpen}
          />
        )}
      </>
    );
  }
};

const PopUpModal = ({ data, isPopUpModalOpen, setIsPopUpModalOpen }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, error, mutate } = useDeleteBounty(id, () => {
    navigate("/bounties");
  });

  const handleClose = () => {
    setIsPopUpModalOpen(false);
  };

  const handleClick = () => {
    mutate();
  };

  return (
    <>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar
          status="error"
          snackbarMessage={"Something is wrong. Please try again."}
        />
      )}
      <StyledModal open={isPopUpModalOpen}>
        <StyledModelBox>
          <StyledTypography variant="h2">
            Are you sure to delete this bug?
          </StyledTypography>

          <StyledPopUpBox>
            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Bug Title :</StyledTypography>
                <StyledPopUpTypography className="capitalize" variant="h3">
                  {data?.title}
                </StyledPopUpTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Created At :</StyledTypography>
                <StyledTypography variant="h3">
                  <span>
                    {format(new Date(data?.created_at), "yyyy-MM-dd HH:mm")}
                  </span>
                </StyledTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">
                  Submission Date :
                </StyledTypography>
                <StyledTypography variant="h3">
                  <span>2082-12-11</span>
                </StyledTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">
                  Reward Amount :
                </StyledTypography>
                <StyledPopUpTypography className="capitalize" variant="h3">
                  ${data?.rewarded_amount}
                </StyledPopUpTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Severity :</StyledTypography>
                <StyledPriorityTypography
                  variant="h3"
                  className={`${data?.severity}`}
                >
                  {data?.severity}
                </StyledPriorityTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBottomBox>
              <StyledPopUpButton
                disabled={isLoading ? true : false}
                onClick={handleClose}
                variant="outlined"
              >
                Cancel
              </StyledPopUpButton>
              <StyledPopUpButton
                disabled={isLoading ? true : false}
                onClick={handleClick}
                variant="contained"
                className="delete"
              >
                Delete Bug
              </StyledPopUpButton>
            </StyledBottomBox>
          </StyledPopUpBox>
        </StyledModelBox>
      </StyledModal>
    </>
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
