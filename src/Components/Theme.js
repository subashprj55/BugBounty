import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {},
  typography: {
    h3: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: "0.17px",

      "@media (max-width: 768px)": {
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "0.15px",
      },
    },
    footer: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0.17px",
    },
  },
});
