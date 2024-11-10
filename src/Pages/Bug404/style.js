import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "styled-components";

export const StyledImgBox = styled(Box)`
  background: #f1f4f8;
  margin-top: 30px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  img {
    width: auto;
    height: auto;
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  &.header {
    text-transform: capitalize;
    font-size: 70px !important;
    color: gray;
  }
`;
