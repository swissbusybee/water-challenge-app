import React from 'react';
import WaterDrops from '../images/waterDrops.png';
import Grid from '@mui/material/Grid';

export default function TipContainer(props) {
    const { tipText } = props;

    return (
        <Grid
            container
            direction={'row'}
            pt={1}
            justifyContent="flex-start"
            alignItems="center"
        >
            <img
                src={WaterDrops}
                alt="water drops"
                width="30"
                height="35"
            ></img>
            <p className="tip-text">{tipText}</p>
        </Grid>
    );
}
