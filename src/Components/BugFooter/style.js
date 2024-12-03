import { Stack } from "@mui/system";
import { styled } from "styled-components";

export const StyledFooterStack = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
  background-color: #978fdc;
  padding: 15px 5%;
`;

export const StyledFooterIconsStack = styled(Stack)`
  flex-direction: row !important;
  gap: 15px;
  img {
    width: 24px;
    height: 25px;
  }
`;
