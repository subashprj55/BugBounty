const {
  Stack,
  Box,
  Typography,
  Avatar,
  Chip,
  Button,
} = require("@mui/material");
const { styled } = require("styled-components");

export const StyledProfilePage = styled(Stack)`
  background-color: #f1f1f1;
  width: 100wv;
  padding-left: 100px;
`;

export const StyledHeaderBox = styled(Box)`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const StyledProfileHead = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledTypography = styled(Typography)`
  font-family: serif;
  &.font {
    font-weight: normal;
    text-align: center;
  }
`;

export const StyledProfileBox = styled(Box)`
  background-color: white;
  width: 31%;
  min-width: 300px;
  border-radius: 6px;
  padding: 30px 20px;
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

export const StyledDiv = styled.div``;

export const StyledDetails = styled(Stack)`
  margin-top: 20px;
  flex-direction: row !important;
  flex-wrap: wrap;
  justify-content: space-around;
  &.space {
    margin-top: 30px;
  }
`;

export const StyledRecentActivitySection = styled(Box)`
  background-color: white;
  max-width: 49%;
  width: 100%;
  border-radius: 6px;
  padding: 30px 20px;
`;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 985px) {
    justify-content: center;
  }
`;

export const StyledBadgesSection = styled(Stack)`
  margin: 40px 0;
  width: 76%;
  background-color: white;
  border-radius: 6px;
  padding: 30px 50px;
`;

export const StyledBadgesBox = styled(Box)``;

export const StyledBadgesChip = styled(Chip)`
  background-color: #f4f4f5 !important;
  padding: 15px !important;
  margin: 20px;
  margin-left: 0;
  img {
    width: 20px;
    height: 20px;
    margin-top: -3px;
  }
`;

export const StyledButtonBox = styled(Box)`
  margin-bottom: 40px;
  width: fit-content;
`;

export const StyledButton = styled(Button)``;
