import { createTheme, Typography } from '@mui/material';
import { grey, blue, cyan as lightBlue, purple, } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
     main: '#587686'
    },

    divider: grey[200],
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
    
    secondary: {
      main: purple[500],
      dark: purple[400],
      light: purple[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    }
  },
  typography:{
    allVariants:{
      color: '#5b5b5b',
    },
  }
});
