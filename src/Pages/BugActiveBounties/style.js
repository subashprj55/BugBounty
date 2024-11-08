import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "styled-components";

export const StyledActiveBountiesStack = styled(Stack)`
  flex-direction: row !important;
  gap: 40px;
  padding: 60px 40px;
  background-color: #f1f4f8;
`;

export const StyledFilterBox = styled(Box)`
  width: 250px;
  min-width: 250px;
`;

export const StyledFilterStack = styled(Stack)`
  padding: 20px;
`;

export const StyledFilterHeaderBox = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const StyledFilterAltIcon = styled(FilterAltOutlinedIcon)``;

export const StyledTypography = styled(Typography)``;

export const StyledOptionsBox = styled(Box)``;

export const StyledBox = styled(Box)`
  margin-top: 15px;
`;
export const StyleFormGroup = styled(FormGroup)`
  margin-top: 10px;
`;

export const StyledFormControlLabel = styled(FormControlLabel)``;

export const StyledCheckbox = styled(Checkbox)`
  color: black !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 10px !important;
`;

export const StyledRadioGroup = styled(RadioGroup)``;

export const StyledRadio = styled(Radio)`
  color: black !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

export const StyledSliderBox = styled(Box)``;

export const StyledSlider = styled(Slider)`
  color: black !important;
  .css-1xcmt9q-MuiSlider-thumb::after {
    top: auto;
  }
`;

export const StyledButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  width: auto !important;
  &.bg-white {
    background-color: white !important;
    border-radius: 6px !important;
  }
`;

export const StyledRightBox = styled(Stack)`
  width: 100%;
`;

export const StyledTitleBox = styled(Stack)`
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelectBox = styled(Box)`
  width: 218px;
`;

export const StyledBugListBox = styled(Box)`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledBottomBox = styled(Box)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
