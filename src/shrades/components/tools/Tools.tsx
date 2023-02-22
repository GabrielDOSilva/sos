import { Box, TextField, Button, Paper, useTheme, Icon } from "@mui/material";


interface IToolsProps {
    textSearch?: string;
    showInputSearch?: boolean;
    changTextSearch?: (newText: string) => void;
    textButton?: string;
    showButton?: boolean;
    ClickButon?: () => void;
}

export const Tools: React.FC<IToolsProps> = (
    { 
        textSearch,
        showInputSearch = false,
        changTextSearch,
        textButton = 'New',
        showButton = true,
        ClickButon
    }) => {
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
            {showInputSearch && (
                <TextField
                    size="small"
                    value={textSearch}
                    onChange={(e) => changTextSearch?.(e.target.value)}
                    placeholder="Search..."
                />
            )}
            <Box
                flex={1}
                display='flex'
                justifyContent='end'
            >
                { showButton &&(
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    onClick={ClickButon}
                    endIcon={<Icon>add</Icon>}
                >
                    {textButton}
                </Button>
                )}
            </Box>

        </Box>
    );
};