import { createTheme } from "@mui/material";

const commonStyles = {
  styleOverrides: {
    root: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontStyle: "normal",
    },
  },
};

const buttonStyles = {
  styleOverrides: {
    root: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontStyle: "normal",
    },
  },
};

const textFieldStyles = {
  styleOverrides: {
    root: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontStyle: "normal",
    },
  },
};

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: buttonStyles,
    MuiTypography: commonStyles,
    MuiTextField: textFieldStyles,
  },
});
