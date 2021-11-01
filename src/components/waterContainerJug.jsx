import * as React from 'react';
import WaterContainer from '../images/waterContainer.png';
import Box from '@mui/material/Box';

export default function WaterContainerJug() {
    return (
        <React.Fragment>
            <Box sx={{ m: 1 }}>
                <img
                    src={WaterContainer}
                    alt="water-container"
                    width="30"
                    height="50"
                ></img>
            </Box>
        </React.Fragment>
    );
}
