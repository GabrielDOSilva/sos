import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

export const DetailTools: React.FC = () => {
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


            <Button
                color="primary"
                disableElevation
                variant="contained"
                startIcon={<Icon>save</Icon>}
            >
                Save
            </Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>save</Icon>}
            >
                Save and return
            </Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
            >
                Delete
            </Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>add</Icon>}
            >
                New
            </Button>
            <Divider 
                variant="middle"
                orientation="vertical"
            />
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
            >
                Back
            </Button>

        </Box>
    );
};