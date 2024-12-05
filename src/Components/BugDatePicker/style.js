import { styled } from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Box, IconButton } from "@mui/material";

export const StyledInputBox = styled(Box)`
  .react-datepicker__day--selected {
    background-color: #39d2c0;
  }
  .react-datepicker__day--selected:not([aria-disabled="true"]):hover {
    background-color: #3dc4b4;
  }
  .react-datepicker-wrapper {
    width: 240px;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #3dc4b4;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  font-size: 16px;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 13px 10px;
  width: -webkit-fill-available;
  border-radius: 8px;
  border: 1px solid #e4e4e7;

  &:focus {
    outline: none;
    border: 1px solid #a1a1aa;
  }
`;

export const StyledIconButton = styled(IconButton)``;
