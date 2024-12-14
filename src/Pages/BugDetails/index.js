import React, { useState } from "react";
import {
  StyledAuthorName,
  StyledAvatar,
  StyledBottomBox,
  StyledBox,
  StyledBugBountyPage,
  StyledBugDetailsPage,
  StyledBugItemsBox,
  StyledBugPendingBox,
  StyledBugSummerySection,
  StyledButton,
  StyledButtonGroup,
  StyledCancelIcon,
  StyledCircularProgress,
  StyledComment,
  StyledCommentBox,
  StyledCommentButton,
  StyledCommentContent,
  StyledCommentInfoBox,
  StyledCommentsBox,
  StyledDescriptionBox,
  StyledDescriptionStack,
  StyledDetailsBox,
  StyledDetailsTypography,
  StyledForm,
  StyledGroupButtonBox,
  StyledIconButton,
  StyledItemsBox,
  StyledLoadingBox,
  StyledMenu,
  StyledMenuItem,
  StyledMessageBox,
  StyledModal,
  StyledModelBox,
  StyledPopUpBox,
  StyledPopUpButton,
  StyledPopUpTypography,
  StyledPublishIcon,
  StyledReproduceBox,
  StyledReproduceStack,
  StyledStack,
  StyledStatusTypography,
  StyledSuccessIcon,
  StyledTimestamp,
  StyledTitleBox,
  StyledTitleSection,
  StyledTypography,
} from "./style";
import profile from "Images/profile.png";
import BugBox from "Components/BugBox";
import BugInputField from "Components/BugInputField";
import clientProfile from "Images/profileAvatar.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate, useParams } from "react-router-dom";
import useBugDetails from "Hooks/useBugDetails";
import BugBackButton from "Components/BugBackButton";
import { format } from "date-fns";
import { useAuth } from "Utils/authProvider";
import useComment from "Hooks/useComment";
import BugLoader from "Components/BugLoader";
import BugSnackbar from "Components/BugSnackbar";
import { getTimeAgoMessage } from "Utils/dateMessage";
import BugNavContainer from "Components/BugNavContainer";
import useBugSubmit from "Hooks/useBugSubmit";
import useBountyDetails from "Hooks/useBountyDetails";
import useDeleteBug from "Hooks/useDeleteBug";

const BugDetails = () => {
  const { id, bountyId } = useParams();
  const { data, isLoading, error } = useBugDetails(id);
  const {
    data: bountyData,
    isLoading: bountyLoading,
    error: bountyError,
  } = useBountyDetails(bountyId);

  if (isLoading || bountyLoading) {
    return (
      <BugNavContainer>
        <StyledLoadingBox>
          <BugLoader />
        </StyledLoadingBox>
      </BugNavContainer>
    );
  }

  if (error || bountyError) {
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
      <StyledBugDetailsPage>
        <TitleSection
          title={data?.title}
          created_by={data?.submitted_by?.name}
        />
        <DetailsSection
          status={data?.status}
          submitted_at={data.submitted_at}
          created_by={data?.related_bounty?.created_by}
        />
        <DescriptionSection
          summary={data?.description}
          expectedResult={data?.related_bounty?.acceptance_criteria}
          actualResult={data?.expected_result}
        />
        <StepsReproduceSection step_to_reproduce={data?.guide} />

        {data?.status === "accepted" && (
          <BalanceSection
            amount={bountyData?.rewarded_amount}
            sender={bountyData?.created_by?.name}
            receiver={data?.submitted_by?.name}
          />
        )}

        <ButtonGroupDropdown
          bountyOwnerEmail={data?.related_bounty?.created_by?.email}
          data={data}
          amount={bountyData?.rewarded_amount}
        />
        <HunterButtonGroupDropdown data={data} />
        <CommentSection comments={data?.comments} />
      </StyledBugDetailsPage>
    </BugNavContainer>
  );
};

export default BugDetails;

const TitleSection = ({ title, created_by }) => {
  return (
    <StyledTitleSection>
      <StyledAvatar alt="hunter profile" src={profile} />
      <StyledTitleBox>
        <StyledTypography className="capitalize" variant="h2">
          {title}
        </StyledTypography>
        <StyledTypography variant="footer" className="capitalize">
          Submitted By : {created_by}
        </StyledTypography>
      </StyledTitleBox>
    </StyledTitleSection>
  );
};

const DetailsSection = ({ submitted_at, created_by, status }) => {
  return (
    <StyledStack>
      <BugBox>
        <StyledDetailsBox>
          <StyledTypography variant="h2">Details</StyledTypography>

          <StyledBugSummerySection>
            <StyledBugPendingBox>
              <StyledDetailsTypography variant="h3">
                Status :
              </StyledDetailsTypography>
              <StyledBugItemsBox>
                <StyledStatusTypography variant="h3" className={`${status}`}>
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

          <StyledBugSummerySection>
            <StyledBugPendingBox>
              <StyledTypography variant="h3">
                Bounty Created By :
              </StyledTypography>
              <StyledTypography className="capitalize" variant="h3">
                {created_by?.name}
              </StyledTypography>
            </StyledBugPendingBox>
          </StyledBugSummerySection>
        </StyledDetailsBox>
      </BugBox>
    </StyledStack>
  );
};

const DescriptionSection = ({ summary, expectedResult, actualResult }) => {
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

          {actualResult && (
            <StyledBox>
              <StyledTypography variant="h3">Actual Result :</StyledTypography>
              <StyledDescriptionStack>
                <StyledTypography variant="footer">
                  {actualResult}
                </StyledTypography>
              </StyledDescriptionStack>
            </StyledBox>
          )}
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

const BalanceSection = ({ sender, receiver, amount }) => {
  return (
    <>
      <StyledStack>
        <BugBox>
          <StyledDetailsBox>
            <StyledTypography variant="h2">
              Transaction History
            </StyledTypography>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledDetailsTypography variant="h3">
                  Send By :
                </StyledDetailsTypography>
                <StyledBugItemsBox>
                  <StyledTypography className="capitalize" variant="footer">
                    {sender}
                  </StyledTypography>
                </StyledBugItemsBox>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Receive By:</StyledTypography>
                <StyledTypography className="capitalize" variant="footer">
                  {receiver}
                </StyledTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Amount</StyledTypography>
                <StyledTypography variant="h3">${amount}</StyledTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>
          </StyledDetailsBox>
        </BugBox>
      </StyledStack>
    </>
  );
};

const options = ["Approve Bug", "Reject Bug"];
const ButtonGroupDropdown = ({ bountyOwnerEmail, data, amount }) => {
  const { state } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPopUpModalOpen, setIsPopUpModalOpen] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("");

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
    setButtonTitle(options[selectedIndex]);
    setIsPopUpModalOpen(true);
  };

  if (data?.is_accepted) {
    return (
      <>
        <StyledGroupButtonBox>
          <StyledMessageBox>
            <StyledSuccessIcon />
            <StyledTypography className="accept" variant="h2">
              This bug is already approved
            </StyledTypography>
          </StyledMessageBox>
        </StyledGroupButtonBox>
      </>
    );
  }

  if (data?.status === "rejected") {
    return (
      <>
        <StyledGroupButtonBox>
          <StyledMessageBox>
            <StyledCancelIcon />
            <StyledTypography className="reject" variant="h2">
              This bug is Rejected
            </StyledTypography>
          </StyledMessageBox>
        </StyledGroupButtonBox>
      </>
    );
  }

  if (bountyOwnerEmail === state.user.email) {
    return (
      <StyledGroupButtonBox>
        <StyledButtonGroup
          variant="contained"
          aria-label="Split button dropdown"
        >
          <StyledButton onClick={handlePrimaryClick}>
            {options[selectedIndex]}
          </StyledButton>
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
        {isPopUpModalOpen && (
          <PopUpModal
            data={data}
            isPopUpModalOpen={isPopUpModalOpen}
            setIsPopUpModalOpen={setIsPopUpModalOpen}
            buttonTitle={buttonTitle}
            amount={amount}
          />
        )}
      </StyledGroupButtonBox>
    );
  }
};

const userOptions = ["Edit Bug", "Delete Bug"];
const HunterButtonGroupDropdown = ({ data }) => {
  const { id, bountyId } = useParams();
  const { state } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPopUpModalOpen, setIsPopUpModalOpen] = useState(false);
  const navigate = useNavigate();

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
    if (userOptions[selectedIndex] === "Edit Bug") {
      navigate(`/bounty/${bountyId}/bug/edit/${id}`);
    }
    if (userOptions[selectedIndex] === "Delete Bug") {
      setIsPopUpModalOpen(true);
    }
  };

  if (data?.is_accepted || data?.status === "rejected") {
    return <></>;
  }

  if (data?.submitted_by?.email === state.user.email) {
    return (
      <StyledGroupButtonBox>
        <StyledButtonGroup
          variant="contained"
          aria-label="Split button dropdown"
        >
          <StyledButton onClick={handlePrimaryClick}>
            {userOptions[selectedIndex]}
          </StyledButton>
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
          {userOptions.map((option, index) => (
            <StyledMenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={() => handleMenuItemClick(index)}
            >
              {option}
            </StyledMenuItem>
          ))}
        </StyledMenu>
        {isPopUpModalOpen && (
          <HunterPopUpModal
            data={data}
            isPopUpModalOpen={isPopUpModalOpen}
            setIsPopUpModalOpen={setIsPopUpModalOpen}
          />
        )}
      </StyledGroupButtonBox>
    );
  }
};

const CommentSection = ({ comments }) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const { mutate, data, isLoading, error } = useComment(id);

  if (data) {
    window.location.reload();
  }

  const handleClick = (e) => {
    e.preventDefault();
    mutate(comment);
  };

  return (
    <StyledStack>
      {error && (
        <BugSnackbar
          status="error"
          snackbarMessage="Some is wrong. Please try again"
        />
      )}
      <BugBox>
        <StyledDescriptionBox>
          <StyledTypography variant="h2">Comments</StyledTypography>
          <StyledForm onSubmit={handleClick}>
            <StyledCommentBox>
              <StyledAvatar />

              <BugInputField
                placeholder="Add a comment..."
                value={comment}
                setValue={setComment}
              />

              {isLoading ? (
                <StyledCircularProgress color="success" />
              ) : (
                <StyledCommentButton type="submit" variant="outlined">
                  <StyledPublishIcon />
                </StyledCommentButton>
              )}
            </StyledCommentBox>
          </StyledForm>
        </StyledDescriptionBox>

        <StyledCommentsBox>
          {comments?.length > 0 && (
            <>
              {[...comments].reverse().map(({ id, user, created_at, text }) => {
                return (
                  <StyledComment key={id}>
                    <StyledAvatar
                      alt="clientProfile"
                      src={user?.role === "hunter" ? clientProfile : profile}
                    />
                    <StyledCommentContent>
                      <StyledCommentInfoBox>
                        <StyledAuthorName>{user?.name}</StyledAuthorName>
                        <StyledTimestamp>
                          {/* <BugExpiryMessage expiryDate={created_at} /> */}
                          <>{getTimeAgoMessage(created_at)}</>
                        </StyledTimestamp>
                      </StyledCommentInfoBox>
                      <StyledTypography variant="body2">
                        {text}
                      </StyledTypography>
                    </StyledCommentContent>
                  </StyledComment>
                );
              })}
            </>
          )}
        </StyledCommentsBox>
      </BugBox>
    </StyledStack>
  );
};

const PopUpModal = ({
  data,
  isPopUpModalOpen,
  setIsPopUpModalOpen,
  buttonTitle,
  amount,
}) => {
  const navigate = useNavigate();
  const { id, bountyId } = useParams();

  const {
    isLoading,
    data: success,
    error,
    mutate,
  } = useBugSubmit(id, (data) => {
    setTimeout(() => {
      navigate(`/bounty/${bountyId}`);
    }, [2000]);
  });

  const handleClose = () => {
    setIsPopUpModalOpen(false);
  };

  const action = buttonTitle.split(" ")[0];
  const handleClick = () => {
    let newAction;
    if (action === "Approve") {
      newAction = "Accepted";
    } else {
      newAction = "Rejected";
    }
    mutate(newAction);
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
      {success && (
        <BugSnackbar snackbarMessage={"Statue updated successfully"} />
      )}

      <StyledModal open={isPopUpModalOpen}>
        <StyledModelBox>
          <StyledTypography variant="h2">
            {`
            Are you sure you want to ${action} this bug report? This action cannot
            be undone.`}
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
                <StyledTypography variant="h3">
                  Submission Date :
                </StyledTypography>
                <StyledTypography variant="h3">
                  <span>
                    {format(new Date(data?.submitted_at), "yyyy-MM-dd HH:mm")}
                  </span>
                </StyledTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Amount :</StyledTypography>
                <StyledPopUpTypography className="capitalize" variant="h3">
                  ${amount}
                </StyledPopUpTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">
                  Amount send to :
                </StyledTypography>
                <StyledPopUpTypography className="capitalize" variant="h3">
                  {data?.submitted_by?.name}
                </StyledPopUpTypography>
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
                className={`${action}`}
              >
                {action} Bug
              </StyledPopUpButton>
            </StyledBottomBox>
          </StyledPopUpBox>
        </StyledModelBox>
      </StyledModal>
    </>
  );
};

const HunterPopUpModal = ({ data, isPopUpModalOpen, setIsPopUpModalOpen }) => {
  const navigate = useNavigate();
  const { id, bountyId } = useParams();

  const { isLoading, error, mutate } = useDeleteBug(id, () => {
    navigate(`/bounty/${bountyId}`);
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
            Are you sure to delete this solution?
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
                <StyledTypography variant="h3">Submitted By :</StyledTypography>
                <StyledPopUpTypography variant="h3">
                  {data?.submitted_by?.name}
                </StyledPopUpTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Submitted At :</StyledTypography>
                <StyledTypography variant="h3">
                  <span>
                    {format(new Date(data?.submitted_at), "yyyy-MM-dd HH:mm")}
                  </span>
                </StyledTypography>
              </StyledBugPendingBox>
            </StyledBugSummerySection>

            <StyledBugSummerySection>
              <StyledBugPendingBox>
                <StyledTypography variant="h3">Expiry Date :</StyledTypography>
                <StyledTypography variant="h3">
                  <span>
                    {format(
                      new Date(data?.related_bounty?.expiry_date),
                      "yyyy-MM-dd HH:mm"
                    )}
                  </span>
                </StyledTypography>
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
                className="Reject"
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
