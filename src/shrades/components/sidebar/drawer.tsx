import { Drawer, useTheme, Avatar, Divider, List, ListItemIcon, ListItemText, Icon } from "@mui/material";
import { Box } from "@mui/system";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { useDrawerContext } from "../../contexts";
import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";


interface SidebarProps {
    children: React.ReactNode;

};

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;

};

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

    const navigate = useNavigate();

    const resolvesPath = useResolvedPath(to);
    const match = useMatch({path: resolvesPath.pathname, end: false});


    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
            <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};





export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, drawerOptions, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://avatars.githubusercontent.com/u/99222405?v=4" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map( drawerOption => (
                                <ListItemLink 
                                key={drawerOption.path}
                                icon={drawerOption.icon}
                                to={drawerOption.path}
                                label={drawerOption.label}
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};

function useMtach(arg0: { path: string; end: boolean; }) {
    throw new Error("Function not implemented.");
}
