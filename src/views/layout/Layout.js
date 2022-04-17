import {
    Box,
    // CssBaseline,
    // AppBar,
    Toolbar,
    Typography,
    // IconButton,
    // Button,
    Divider,
    Drawer,
    useTheme,
    // List,
    // ListItem,
    // ListItemIcon,
    // ListItemText
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
// import { useState } from 'react';

const Layout = ({ children }) => {
    const theme = useTheme();

    const useStyles = makeStyles(theme => ({    
        nav: {
            [theme.breakpoints.up('600')]: {
                width: "240px",
                flexShrink: 0
            }
        }
    }));
    const classes = useStyles();
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="nav"
                    className={classes.nav}
                >
                    <Toolbar>
                        <Typography variant="h5" component="h1">
                            App
                        </Typography>
                    </Toolbar>
                    <Divider />
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${classes.drawer}px)` } }}
                >
                    test
                    <Toolbar />
                    {children}
                </Box>
            </Box>

        </>
    )
}

export default Layout