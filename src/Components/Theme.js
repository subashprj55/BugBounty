import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {},
  typography: {
    h1: {
      fontFamily: "Inter",
      fontSize: "25px",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h2: {
      fontFamily: "Epilogue",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "0.17px",
      lineHeight: "normal",

      "@media (max-width: 768px)": {
        fontSize: "12px",
        letterSpacing: "0.15px",
      },
    },
    h6: {
      fontFamily: "Inter",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "normal",
    },
    footer: {
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "0.17px",
      lineHeight: "normal",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          width: "100%",
          backgroundColor: "#39D2C0",
          color: "#101213 ",
          fontSize: "14px",
          padding: "10px 20px",
          borderRadius: "15px",
          textTransform: "capitalize",
          fontFamily: "inherit",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "#3dc4b4",
            color: "white",
          },
        },
        outlined: {
          width: "100%",
          border: "1px solid #E4E4E7",
          color: "black",
          fontSize: "14px",
          padding: "10px 20px",
          borderRadius: "15px",
          textTransform: "capitalize",
          fontFamily: "inherit",
          fontWeight: 500,
          "&:hover": {
            border: "1px solid #cfcfd1",
          },
        },
      },
    },
  },
});
