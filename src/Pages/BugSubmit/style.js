import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "styled-components";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const StyledBugSubmitPage = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 60px 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const StyledSubmitForm = styled.form`
  width: 700px;
`;

//input fields

export const StyledInputField = styled.input`
  font-size: 14px;
  letter-spacing: 1px;
  padding: 13px 10px;
  width: 93%;
  border-radius: 8px;
  border: 1px solid #e4e4e7;
  &:focus {
    outline: none;
    border: 1px solid #a1a1aa;
  }
  &.width {
    width: 200px;
  }
  /* Remove spinner buttons for Chrome, Edge, and Safari */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Remove spinner buttons for Firefox */
  -moz-appearance: textfield;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  color: red;
`;

export const StyledTextarea = styled.textarea`
  font-size: 14px;
  padding: 13px 10px;
  width: 93%;
  border-radius: 8px;
  border: 1px solid #e4e4e7;

  &:focus {
    outline: none;
    border: 1px solid #a1a1aa;
  }
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

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledFilePreview = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFileName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const StyledCancelButton = styled.button`
  border: none;
  background: transparent;
  color: gray;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;

  &:hover {
    color: red;
  }
`;
////////////////////////////////

export const StyledSubmitFormBox = styled(Box)`
  padding: 30px;
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
