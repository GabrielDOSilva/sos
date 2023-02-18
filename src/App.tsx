import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { Sidebar } from "./shrades/components";
import { AppThemeProvider } from "./shrades/contexts";



export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        
        <Sidebar>
        <AppRoutes />
        </Sidebar>
        
      </BrowserRouter>
    </AppThemeProvider>
  );
}

