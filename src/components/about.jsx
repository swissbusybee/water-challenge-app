import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

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
                <div>PROBLEM</div>
                <p>
                    Water is essential for life. In household and
                    industry, some water is lost or polluted in the
                    favour of production.
                </p>
                <div>SOLUTION</div>
                <p>
                    WaterCount is a water usage calculator that shows
                    how much water is consumed with a visual
                    reference. It is easy enough for a child to use
                    and should help all to understand how much water
                    they consume and remind them how they can conserve
                    water.
                </p>
                <p>
                    It can very surprising to learn how much water
                    you're using in a day. Have you ever thought about
                    how much water your shower uses? Or how much
                    running the dishwasher every night contributes to
                    your bill? It's good to be aware of how much water
                    your daily activities are using - once you know
                    you're a lot more conscious of how you can save
                    water.
                </p>
            </Container>
        </React.Fragment>
    );
}
