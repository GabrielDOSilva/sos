import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { Sidebar } from "./shrades/components";
import { AppThemeProvider, DrawerProvider } from "./shrades/contexts";



export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

