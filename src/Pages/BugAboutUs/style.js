const { Typography, Box, Button } = require("@mui/material");
const { styled } = require("styled-components");

export const StyledAboutUsPage = styled.div`
  background-color: #f1f1f1;
  width: 100vw;
  height: 100%;
  @media (max-width: 768px) {
    margin-left: 3%;
  }
`;

export const StyledTypography = styled(Typography)`
  &.bold {
    font-weight: 700;
  }
  &.space {
    padding: 7px 0;
  }
  &.color {
    color: #898494;
  }
`;

export const StyledWithdrawSection = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  &.space {
    margin-bottom: 80px;
  }
`;

export const StyledWithdrawBox = styled(Box)`
  margin: 15px 0;
  width: 630px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e4e4e7;
  @media (max-width: 768px) {
    width: 530px;
  }
`;

export const StyledBox = styled(Box)`
  margin-top: 30px;
  padding-bottom: 15px;
  input {
    font-size: 14px;
    letter-spacing: 1px;
    padding: 13px 10px;
    width: -webkit-fill-available;
    border-radius: 8px;
    border: 1px solid #e4e4e7;
  }
  input:focus {
    outline: none;
    border: 1px solid #a1a1aa;
  }
`;

export const StyledForm = styled(Box)`
  margin: 20px 0 30px 0;
`;

export const StyledButton = styled(Button)``;
