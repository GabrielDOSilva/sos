import { Drawer, useTheme } from "@mui/material";
import { Box } from "@mui/system";

interface SidebarProps {
    children: React.ReactNode;
}
export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)}>
                teste
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};