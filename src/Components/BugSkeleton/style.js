const { Skeleton } = require("@mui/material");
const { Box } = require("@mui/system");
const { styled } = require("styled-components");

export const StyledSkeletonBox = styled(Box)`
  width: 280px;
  padding: 20px;
  @media (max-width: 1037px) {
    width: 250px;
  }
  @media (max-width: 971px) {
    width: 280px;
  }
`;

export const StyledSkeleton = styled(Skeleton)``;

export const StyledDateBox = styled(Box)`
  width: 100px;
  float: right;
  margin-top: 20px;
`;

export const StyledDetailsBox = styled(Box)`
  width: 100%;
  padding-top: 20px;
`;

export const StyledBottomBox = styled(Box)`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
