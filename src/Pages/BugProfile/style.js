const {
  Stack,
  Box,
  Typography,
  Avatar,
  Chip,
  Button,
  Skeleton,
} = require("@mui/material");
const { styled } = require("styled-components");

export const StyledProfilePageBox = styled(Box)`
  margin: 0 5%;
`;

export const StyledHeaderBox = styled(Box)`
  margin: 50px 0 20px;
`;

export const StyledProfileHead = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledTypography = styled(Typography)`
  font-family: Manrope;

  &.font {
    font-weight: normal;
    text-align: center;
  }
  &.font-roboto {
    font-family: Roboto;
  }
`;

export const StyledProfileBox = styled(Box)`
  width: 31%;
  min-width: 300px;
  padding: 30px 20px;
  height: 330px;
`;

export const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100% !important;
`;

export const StyledAvatar = styled(Avatar)`
  width: 120px !important;
  height: 120px !important;
  margin-bottom: 15px;
`;

export const StyledChip = styled(Chip)`
  background-color: #f4f4f5 !important;
  margin-top: 5px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDetails = styled(Stack)`
  margin-top: 20px;
  flex-direction: row !important;
  flex-wrap: wrap;
  justify-content: space-around;
  &.space {
    margin-top: 30px;
  }
`;

export const StyledLoaderBox = styled(Box)`
  padding: 30px 20px;
  width: 65%;
  height: 330px;
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledRecentActivitySection = styled(Box)`
  border: 1px solid #e4e4e7;
  background-color: white;
  border-radius: 6px;
  padding: 30px 20px;
  overflow: hidden;
  width: 65%;
  height: 330px;
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  margin-bottom: 40px;
  gap: 40px;
  justify-content: space-between;
  align-items: end;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const StyledBadgesSection = styled(Stack)`
  width: 100%;
`;

export const StyledBadgesStack = styled(Stack)`
  padding: 30px 50px;
`;

export const StyledBadgesBox = styled(Box)``;

export const StyledBadgesChip = styled(Chip)`
  background-color: #f4f4f5 !important;
  padding: 10px 15px !important;
  margin: 20px;
  margin-left: 0;
  height: auto !important;
  img {
    width: 20px;
    height: 20px;
    margin-top: -3px;
  }
`;

export const StyledButtonBox = styled(Box)`
  margin: 40px 0;
  padding-bottom: 5px;
  width: fit-content;
`;

export const StyledButton = styled(Button)``;

export const BadgeSkeleton = styled(Skeleton)`
  width: 100%;
  margin-bottom: 50px;
`;
