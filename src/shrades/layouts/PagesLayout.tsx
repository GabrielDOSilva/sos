import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { useDrawerContext } from "../contexts";



interface IBaseLayoutProps {
    children: React.ReactNode;
    titulo: string;
    barraDeFerramentas?: ReactNode;
};



export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={2}>
            <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
 
                <Typography 
                variant={ smDown ? "h5" : mdDown ? 'h4' : 'h3' }
                overflow='hidden' 
                whiteSpace='nowrap'
                textOverflow='ellipses'
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (
                <Box padding={1}>
                    {barraDeFerramentas}
                </Box>
            )}

            <Box padding={1} flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    );

};