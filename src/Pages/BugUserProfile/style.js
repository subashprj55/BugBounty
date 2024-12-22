const { Box, Avatar, Typography, Stack, Button } = require("@mui/material");
const { styled } = require("styled-components");

export const StyledUserProfilePage = styled(Box)`
  margin: 50px 5%;
`;

export const StyledStack = styled(Stack)`
  flex-direction: row !important;
  margin-bottom: 40px;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const StyledProfileHead = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledProfileBox = styled(Box)`
  width: 31%;
  min-width: 300px;
  padding: 30px 20px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 100px !important;
  height: 100px !important;
  margin-bottom: 10px;
`;

export const StyledTypography = styled(Typography)`
  text-transform: capitalize;
  &.font {
    font-weight: 500;
  }
`;

//profile description
export const StyledProfileDescription = styled(Box)`
  border: 1px solid #e4e4e7;
  background-color: white;
  border-radius: 6px;
  padding: 30px 20px;
  overflow: hidden;
  width: 55%;
  height: auto;
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledDescriptionInfoBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledTextBox = styled(Box)`
  width: 230px;
`;

//closed bug section
export const StyledClosedBugSection = styled(Box)`
  margin: 20px 0;
`;

export const StyledClosedStack = styled(Stack)`
  padding: 30px 20px;
`;

export const StyledStatusTypography = styled(Typography)`
  padding: 2px 4px;
  text-transform: capitalize;
  border-radius: 6px;
  color: white;
  &.open {
    background-color: #978fdc;
  }
  &.pending {
    background-color: #ff4162;
  }
  &.accepted {
    background-color: #39d2c0;
  }
  &.rejected {
    background-color: red;
  }
`;

export const StyledInfoBox = styled(Box)`
  padding: 10px 10px 20px 0px;
`;

export const StyledInfoList = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
  margin-bottom: 5px;
  box-shadow: 5px 4px 5px #e4e4e7;
  &:hover {
    box-shadow: 5px 8px 5px #e4e4e7;
  }
`;

export const StyledButtonBox = styled(Box)`
  display: flex;
  padding: 4px 0;
  gap: 20px;
  align-items: center;
`;
