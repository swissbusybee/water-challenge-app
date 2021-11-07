import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import WaveFooter from './waveFooter';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import OpacityIcon from '@mui/icons-material/Opacity';
import Body from '../images/body.png';
import Bread from '../images/bread.png';

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
                        <div>FUN FACTS</div>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item>
                                <p>
                                    Water makes up about 65 percent of
                                    the human body.
                                </p>
                            </Grid>
                            <Grid item>
                                <img
                                    src={Body}
                                    alt="body"
                                    width="250"
                                    height="150"
                                ></img>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item>
                                <p>
                                    Did you know that one slice of
                                    bread requires approximately 40
                                    liters of water.
                                </p>
                            </Grid>
                            <Grid item>
                                <img
                                    src={Bread}
                                    alt="bread"
                                    width="250"
                                    height="150"
                                ></img>
                            </Grid>
                        </Grid>

                        <div> INTERESTING EXPERIMENTS</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <p>
                                You need: bucket, timer and
                                measurement cup
                            </p>
                            <p>
                                Take the bucket, put it under the
                                faucet. Let the water run for exactly
                                one minute. Then measure how much
                                water you have in the bucket. Compare
                                several faucets at your home! Time as
                                well how long the water is running
                                while you wash your hands. Calculate
                                how much water is used!
                            </p>
                            <p>
                                Time how long the water is running
                                while you wash your hands. Calculate
                                how much water is used with Dropli!
                            </p>
                            <p>
                                Then use that water collected in the
                                buckets and use it to water the
                                garden.
                            </p>
                        </Grid>
                        <div>BATHROOM TIPS</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Did you know that the we use an
                                average of 9 liters per minute in the
                                shower?
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
                                When we turn off the tap while
                                brushing our teeth, we save about 6
                                litres of water each minute.
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
                                Turn off the water if you brush your
                                teeth in the shower or sink to save
                                time
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
                        <div>KITCHEN TIPS</div>
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
                        <div>LAUNDRY TIPS</div>
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
                        <div>DIET TIPS</div>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={1}
                        >
                            <Box pt={1.75}>
                                <OpacityIcon color="primary" />
                            </Box>
                            <p>
                                Try Meatless Monday and go vegetarian
                                one day a week. It could significantly
                                lower your water footprint.
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
                                Choose pasture-raised products: When
                                you do eat meat, dairy and eggs, opt
                                for pasture-raised products.
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
                                Avoid processed foods: A lot of water
                                goes into processing foods. Opt for
                                more fruits, vegetables, leafy greens
                                (like spinach and kale) and whole
                                grains.
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
