import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Subscribe from './subscribe';

export default function NavBar() {
    return (
        <React.Fragment>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: 'none' },
                }}
            />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{
                    borderBottom: (theme) =>
                        `1px solid ${theme.palette.divider}`,
                }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Project Name
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Features
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            About
                        </Link>
                        <Subscribe />
                    </nav>
                    {/* <Button
                        href="#"
                        variant="outlined"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Login
                    </Button> */}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
