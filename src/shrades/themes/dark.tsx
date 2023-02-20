import { createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: grey,
    divider: grey[700],
    text: {
      primary: '#fff',
      secondary: grey[500],
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
