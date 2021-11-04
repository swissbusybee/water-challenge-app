import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import WaveFooter from './waveFooter';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function Resources() {
    return (
        <React.Fragment>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: 'none' },
                }}
            />
            <CssBaseline />
            <Container maxWidth="lg" sx={{ p: 6 }}>
                <Grid container spacing={4} textAlign="center">
                    <Grid item xs={12}>
                        <div>BATHROOM</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Bring a radio into the bathroom and
                                keep showers to two songs or less
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Install a low flow showerhead to help
                                save half the water compared to older
                                versions
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Turn off the water if you shave or
                                brush your teeth in the shower or sink
                                to save time
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Use cold water to brush your teeth
                                because when you save energy, you also
                                save water.
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Baths are luxurious but it takes about
                                100 liters of water to fill. Reduce
                                baths if possible
                            </p>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={1}
                    >
                        <Box pt={1.75}>
                            <OpacityIcon color="primary" />
                        </Box>
                        <p>
                            Turn off the faucet completely when you're
                            done with the sink. Drips from faucets are
                            a big waste of water.
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <div>KITCHEN</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Don’t use water to defrost frozen
                                foods. Instead, leave them in the
                                fridge overnight.
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Put your vegetable steamer on top of
                                the rice, potatoes or pasta to steam
                                your veggies.
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Get a dishwasher. Hand washing one
                                load of dishes can use 76 liters of
                                water, whereas energy-efficient
                                dishwaters use as little as 15 liters.
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Wash vegetables and fruits in a large
                                bowl or tub of water and scrub them
                                with a vegetable brush instead of
                                using your faucet to wash them.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div>LAUNDRY</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Use your washing machine only when
                                it’s full to save water while doing
                                the laundry.
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Wash your jeans less. Consider airing
                                them out or even putting them in the
                                freezer to freshen them up.
                            </p>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Choose an water and energy-efficient
                                model if get a new washer. It will
                                save you liters of water each load
                                (and save energy too).
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div>GENERAL</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Fix leaks as soon as you notice one! A
                                showerhead that leaks 10 drips per
                                minute wastes more than 1893 liters
                                per year!
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <WaveFooter />
            </Container>
        </React.Fragment>
    );
}
