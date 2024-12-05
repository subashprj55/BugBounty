import React from "react";
import { StyledDatePicker, StyledIconButton, StyledInputBox } from "./style";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

const BugDatePicker = ({ startDate = "", setStartDate = () => {} }) => {
  return (
    <StyledInputBox>
      <StyledDatePicker
        closeOnScroll={true}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="h:mm aa" // Time format (24-hour)
        timeIntervals={30} // Interval between time options (e.g., 15 minutes)
        dateFormat="MMMM d, yyyy h:mm aa" // Custom format for date and time
        placeholderText="Select a date and time"
        renderCustomHeader={({ date, decreaseYear, increaseYear }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <StyledIconButton onClick={decreaseYear}>
              <ChevronLeft />
            </StyledIconButton>

            <span>
              {date.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>

            <StyledIconButton onClick={increaseYear}>
              <ChevronRight />
            </StyledIconButton>
          </div>
        )}
      />
    </StyledInputBox>
  );
};

export default BugDatePicker;
