import { useState } from "react";
import { StyledAlert, StyledSnackbar } from "./style";

const BugSnackbar = ({ snackbarMessage, status = "success" }) => {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <StyledSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <StyledAlert onClose={handleClose} severity={status} variant="filled">
          {snackbarMessage}
        </StyledAlert>
      </StyledSnackbar>
    </>
  );
};

export default BugSnackbar;
