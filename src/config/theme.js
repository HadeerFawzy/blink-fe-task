import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 1024,
      xl: 1200,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#4D7CFE",
      dark: "#3159C8",
    },
    secondary: {
      main: "#778CA2"
    },
    success: {
      main: "#6DD230",
      dark: "#5CAD2C",
    },
    error: {
      main: "#FE4D5C",
    },
    typography: {
      primary: '#252631',
      secondary: '#778CA2',
      success: '#21A21E',
      warning: '#C1931B',
      info: '#214DC7',
      error: '#C11B1B',
    }
  },
  typography: {
    fontFamily: "'Rubik', Roboto",
    fontFamilySecondary: "'Roboto Slab', serif",
  },
  props: {
    MuiLink: {
      underline: "none",
      color: "textPrimary",
    },
    MuiContainer: {
      maxWidth: "xl",
    }
  },
  spacing: (factor) => `${0.5 * factor}rem`,
});

export default theme;
