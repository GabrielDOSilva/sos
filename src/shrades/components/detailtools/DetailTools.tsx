import { Box, Button, Divider, Icon, Paper, useTheme, Skeleton } from "@mui/material";

interface IDetailsToolsProps {
    textButtonNew?: string;
    showButtonNew?: boolean;
    showButtonSave?: boolean;
    showButtonBack?: boolean;
    showButtonDelete?: boolean;

    showButtonNewLoading?: boolean;
    showButtonSaveLoading?: boolean;
    showButtonBackLoading?: boolean;
    showButtonDeleteLoading?: boolean;

    onClickNew?: () => void;
    onClickSave?: () => void;
    onClickBack?: () => void;
    onClickDelete?: () => void;
};


export const DetailTools: React.FC<IDetailsToolsProps> = ({
    textButtonNew = 'NEW',

    showButtonNew = true,
    showButtonSave = true,
    showButtonBack = true,
    showButtonDelete = true,

    showButtonNewLoading = false,
    showButtonSaveLoading = false,
    showButtonBackLoading = false,
    showButtonDeleteLoading = false,

    onClickNew,
    onClickDelete,
    onClickSave,
    onClickBack,
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


            {(showButtonSave && !showButtonSaveLoading ) && (<Button
                color="primary"
                disableElevation
                variant="contained"
                onClick={onClickSave}
                startIcon={<Icon>save</Icon>}
            >
                Save
            </Button>)}

            { showButtonSaveLoading && (
                <Skeleton width={95} height={60} />
            )}

            {(showButtonDelete && !showButtonDeleteLoading) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={onClickDelete}
                startIcon={<Icon>delete</Icon>}
            >
                Delete
            </Button>)}

            { showButtonDeleteLoading && (
                <Skeleton width={95} height={60} />
            )}


            {(showButtonNew && !showButtonNewLoading) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={onClickNew}
                startIcon={<Icon>add</Icon>}
            >
                New
            </Button>)}

            { showButtonNewLoading && (
                <Skeleton width={95} height={60} />
            )}


            <Divider
                variant="middle"
                orientation="vertical"
            />
            {(showButtonBack && !showButtonBackLoading) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={onClickBack}
                startIcon={<Icon>arrow_back</Icon>}
            >
                Back
            </Button>)}

            { showButtonBackLoading && (
                <Skeleton width={95} height={60} />
            )}



        </Box>
    );
};