import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '} | {new Date().getFullYear()} |{' '}
            <Link color="inherit" href="https://mui.com/">
                Project Website
            </Link>{' '}
        </Typography>
    );
}

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us'],
    },
    {
        title: 'Resources',
        description: [
            'Resource',
            'Resource name',
            'Another resource',
            'Final resource',
        ],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

export default function Footer() {
    return (
        <React.Fragment>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: 'none' },
                }}
            />
            <CssBaseline />
            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) =>
                        `1px solid ${theme.palette.divider}`,
                    py: [3, 6],
                }}
            >
                <Grid
                    container
                    spacing={4}
                    justifyContent="space-evenly"
                    textAlign="center"
                >
                    {footers.map((footer) => (
                        <Grid item xs={12} sm={3} key={footer.title}>
                            <Typography
                                variant="h6"
                                color="text.primary"
                                gutterBottom
                            >
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            variant="subtitle1"
                                            color="text.secondary"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}
