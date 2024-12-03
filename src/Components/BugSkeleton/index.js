import BugBox from "Components/BugBox";
import React from "react";
import {
  StyledBottomBox,
  StyledDateBox,
  StyledDetailsBox,
  StyledSkeleton,
  StyledSkeletonBox,
} from "./style";

const BugSkeleton = ({ loading = "wave" }) => {
  return (
    <BugBox>
      <StyledSkeletonBox>
        <StyledSkeleton animation={loading} />
        <StyledSkeleton animation={loading} width={100} />

        <StyledDateBox>
          <StyledSkeleton animation={loading} />
        </StyledDateBox>

        <StyledDetailsBox>
          <StyledSkeleton
            animation={loading}
            variant="rectangular"
            height={110}
          />
        </StyledDetailsBox>

        <StyledBottomBox>
          <StyledSkeleton
            animation={loading}
            variant="rounded"
            height={20}
            width={100}
          />
          <StyledSkeleton
            animation={loading}
            variant="rounded"
            height={40}
            width={100}
          />
        </StyledBottomBox>
      </StyledSkeletonBox>
    </BugBox>
  );
};

export default BugSkeleton;
