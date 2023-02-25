import { Box, Button, Divider, Icon, Paper, TextField, useTheme } from '@mui/material';



interface IUsersToolsProps {
    textSearch?: string;
    changTextSearch?: (newText: string) => void;
    textButton?: string;
    ClickButon?: () => void;

}


export const UserTools: React.FC<IUsersToolsProps> = ({ textSearch,
    changTextSearch,
    textButton = 'Search',
    ClickButon }) => {
    const theme = useTheme();
    return (

            <Box
                height={theme.spacing(5)}
                alignItems='center'
                component={Paper}
                display='flex'
                padding={2}
                margin={1}
                gap={1}
            >

                <TextField
                    size="small"
                    value={textSearch}
                    onChange={(e) => changTextSearch?.(e.target.value)}
                    placeholder="Search..." />

                <Box
                    flex={1}
                    gap={1}
                    display='flex'
                    justifyContent='end'
                >
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={ClickButon}
                        endIcon={<Icon>search</Icon>}
                    >
                        {textButton}
                    </Button>
                    <Divider
                        variant="middle"
                        orientation="vertical" />
                    <Button
                        color="primary"
                        disableElevation
                        variant="contained"
                        endIcon={<Icon>add</Icon>}
                    >
                        New
                    </Button>
                    
                </Box>
            </Box>

    )
}