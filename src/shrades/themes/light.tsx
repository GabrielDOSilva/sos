import { createTheme } from '@mui/material';
import { grey, blue, cyan as lightBlue, } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    divider: grey[200],
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
    
    secondary: {
      main: lightBlue[500],
      dark: lightBlue[400],
      light: lightBlue[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    }
  }
});
