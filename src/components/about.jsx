import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Dropli from '../images/dropli.png';
import Grid from '@mui/material/Grid';

export default function About() {
    return (
        <React.Fragment>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: 'none' },
                }}
            />
            <CssBaseline />
            <Container
                disableGutters
                maxWidth="md"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                sx={{ p: 6 }}
            >
                <Grid container direction={'row'}>
                    <Grid item xs={2}>
                        <div className="dropli-about">
                            <img
                                src={Dropli}
                                alt="dropli"
                                width="400"
                                height="250"
                            ></img>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <p>
                            Dropli is a fun & easy app that helps
                            educate children on how to conserve water.
                        </p>
                        <p>
                            It includes a calculator that calculates
                            how much water is consumed with a visual
                            references. It raises awareness of water
                            consumption and engages children to learn
                            about water conservation to empower them
                            to influence the future.
                        </p>
                        <p>
                            It can very surprising to learn how much
                            water you're using in a day. Have you ever
                            thought about how much water your shower
                            uses? Or how much eating beef impacts
                            water conservation? It's good to be aware
                            of how much water you consume - once you
                            know you're a lot more conscious of how
                            you can save water.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
