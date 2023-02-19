import { createTheme } from '@mui/material';
import { blueGrey, cyan, grey, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
});
