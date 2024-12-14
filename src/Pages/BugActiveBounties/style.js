import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Skeleton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "styled-components";

export const StyledActiveBountiesStack = styled(Stack)`
  flex-direction: row !important;
  gap: 40px;
  padding: 5% 4%;
  background-color: #f1f4f8;
  @media (max-width: 655px) {
    flex-wrap: wrap;
  }
`;

export const StyledFilterBox = styled(Box)`
  margin-top: 15px;
  width: 250px;
  min-width: 250px;
  @media (max-width: 655px) {
    width: 100%;
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  width: 100%;
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

export const StyledOptionsBox = styled(Box)`
  @media (max-width: 655px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

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

export const StyledErrorBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
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
  padding: 5px;
`;

export const StyledBugListBox = styled(Box)`
  margin-top: 30px;
  display: flex;
  gap: 2vw;
  flex-wrap: wrap;
  @media (max-width: 971px) {
    justify-content: center;
  }
`;
