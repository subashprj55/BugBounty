import React, { useState } from "react";
import {
  StyledAuthorName,
  StyledAvatar,
  StyledBox,
  StyledBugBountyPage,
  StyledBugDetailsPage,
  StyledBugItemsBox,
  StyledBugPendingBox,
  StyledBugSummerySection,
  StyledButton,
  StyledButtonGroup,
  StyledComment,
  StyledCommentBox,
  StyledCommentContent,
  StyledCommentInfoBox,
  StyledCommentsBox,
  StyledDescriptionBox,
  StyledDescriptionStack,
  StyledDetailsBox,
  StyledDetailsTypography,
  StyledGroupButtonBox,
  StyledIconButton,
  StyledItemsBox,
  StyledLoadingBox,
  StyledMenu,
  StyledMenuItem,
  StyledPublishIcon,
  StyledReproduceBox,
  StyledReproduceStack,
  StyledStack,
  StyledStatusTypography,
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
import { useParams } from "react-router-dom";
import useBugDetails from "Hooks/useBugDetails";
import BugBackButton from "Components/BugBackButton";
import { format } from "date-fns";
import { useAuth } from "Utils/authProvider";
import useComment from "Hooks/useComment";
import BugLoader from "Components/BugLoader";
import BugSnackbar from "Components/BugSnackbar";
import { getTimeAgoMessage } from "Utils/dateMessage";

const BugDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useBugDetails(id);

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
    <StyledBugDetailsPage>
      <TitleSection title={data?.title} created_by={data?.submitted_by?.name} />
      <DetailsSection
        submitted_at={data.submitted_at}
        created_by={data?.related_bounty?.created_by}
      />
      <DescriptionSection
        summary={data?.description}
        expectedResult={data?.related_bounty?.acceptance_criteria}
        actualResult={data?.expected_result}
      />
      <StepsReproduceSection step_to_reproduce={data?.guide} />
      <ButtonGroupDropdown
        bountyOwnerEmail={data?.related_bounty?.created_by?.email}
      />
      <CommentSection comments={data?.comments} />
    </StyledBugDetailsPage>
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

const DetailsSection = ({ submitted_at, created_by }) => {
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
                <StyledStatusTypography variant="h3" className="pending">
                  Pending
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

const options = ["Pending Bug", "Approve Bug", "Cancel Bug"];

const ButtonGroupDropdown = ({ bountyOwnerEmail }) => {
  const { state } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    // Action based on the selected option
    alert(`Action executed for: ${options[selectedIndex]}`);
  };

  if (bountyOwnerEmail !== state.user.email) {
    return <></>;
  }

  return (
    <StyledGroupButtonBox>
      <StyledButtonGroup variant="contained" aria-label="Split button dropdown">
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
    </StyledGroupButtonBox>
  );
};

const CommentSection = ({ comments }) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const { mutate, data, isLoading, error } = useComment(id);

  const handleClick = () => {
    mutate(comment);
  };

  return (
    <StyledStack>
      {isLoading && <BugLoader />}
      {error && (
        <BugSnackbar
          status="error"
          snackbarMessage="Some is wrong. Please try again"
        />
      )}
      <BugBox>
        <StyledDescriptionBox>
          <StyledTypography variant="h2">Comments</StyledTypography>
          <StyledCommentBox>
            <StyledAvatar />
            <BugInputField
              placeholder="Add a comment..."
              value={comment}
              setValue={setComment}
            />
            <StyledPublishIcon onClick={handleClick} />
          </StyledCommentBox>
        </StyledDescriptionBox>

        <StyledCommentsBox>
          {data && (
            <StyledComment>
              <StyledAvatar
                alt="clientProfile"
                src={data?.user?.role === "hunter" ? clientProfile : profile}
              />
              <StyledCommentContent>
                <StyledCommentInfoBox>
                  <StyledAuthorName>{data?.user?.name}</StyledAuthorName>
                  <StyledTimestamp>
                    {format(new Date(data?.created_at), "yyyy-MM-dd HH:mm")}
                  </StyledTimestamp>
                </StyledCommentInfoBox>
                <StyledTypography variant="body2">
                  {data?.text}
                </StyledTypography>
              </StyledCommentContent>
            </StyledComment>
          )}

          {comments?.length > 0 && (
            <>
              {comments.map(({ id, user, created_at, text }) => {
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
