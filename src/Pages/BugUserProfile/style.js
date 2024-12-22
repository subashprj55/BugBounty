import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import EngineeringSharpIcon from "@mui/icons-material/EngineeringSharp";
import PestControlIcon from "@mui/icons-material/PestControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import GradeIcon from "@mui/icons-material/Grade";
const { Box, Avatar, Typography, Stack } = require("@mui/material");
const { styled } = require("styled-components");

export const StyledUserProfilePage = styled(Box)`
  margin: 50px 5%;
`;

export const StyledStack = styled(Stack)`
  margin-bottom: 40px;
`;

export const StyledTopBox = styled(Box)`
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 15%;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

//
export const StyledProfileHead = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledProfileBox = styled(Box)``;

export const StyledAvatar = styled(Avatar)`
  width: 140px !important;
  height: 140px !important;
  margin-bottom: 10px;
`;

export const StyledTypography = styled(Typography)`
  text-transform: capitalize;
  &.font {
    font-weight: 500;
  }
`;

//profile description
export const StyledProfileDescription = styled(Box)``;

export const StyledDescriptionInfoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 5px;
`;

export const StyledPersonIcon = styled(PersonIcon)`
  color: gray;
`;

export const StyledEmail = styled(LocalPostOfficeIcon)`
  color: gray;
`;

export const StyledWallet = styled(AccountBalanceWalletSharpIcon)`
  color: gray;
`;

export const StyledRole = styled(EngineeringSharpIcon)`
  color: gray;
`;

export const StyledBug = styled(PestControlIcon)`
  color: gray;
`;

export const StyledSuccess = styled(CheckCircleIcon)`
  color: gray;
`;

export const StyledPending = styled(HourglassTopIcon)`
  color: gray;
`;

export const StyledGradeIcon = styled(GradeIcon)`
  color: gray;
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
    background-color: #f29339;
  }
  &.accepted {
    background-color: #39d2c0;
  }
  &.rejected {
    background-color: #ff4162;
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
