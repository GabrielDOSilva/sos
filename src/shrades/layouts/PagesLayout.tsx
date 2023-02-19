import { Box } from "@mui/system";

interface BaseLayoutProps {
    children: React.ReactNode;
  }

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {

    return(
        <Box>
            Teste
            {children}
        </Box>
    );

};