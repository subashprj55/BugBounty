import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "styled-components";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const StyledBugSubmitPage = styled(Stack)`
  background-color: #f1f4f8;
  padding: 50px;
`;

export const StyledSubmitForm = styled(Stack)`
  background-color: white;
  border-radius: 6px;
  padding: 30px;
  width: 700px;
`;

export const StyledHeaderBox = styled(Box)`
  margin-bottom: 30px;
`;

export const StyledTitleTypography = styled(Typography)``;

export const StyledTypography = styled(Typography)`
  padding-bottom: 10px;
  &.color {
    color: gray;
  }
  &.remove-padding {
    padding-bottom: 0;
  }
`;

export const StyledInputBox = styled(Box)`
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
  font-size: 16px !important;

  &.cancel-button {
    color: black !important;
    padding: 10px 20px;
    text-transform: capitalize;
    border-color: #e4e4e7;
    &:hover {
      border-color: gray;
    }
  }
`;

export const StyledButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 5px;
`;

export const StyledRadioGroup = styled(RadioGroup)``;

export const StyledFormControlLabel = styled(FormControlLabel)``;

export const StyledRadio = styled(Radio)`
  color: black !important;
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  border-radius: 6px;
  border: 1px solid #e4e4e7;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
  &:hover {
    border-color: gray;
  }
`;

export const StyledUploadIcon = styled(DriveFolderUploadIcon)``;
