import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { AppThemeProvider } from "./shrades/contexts";



export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

