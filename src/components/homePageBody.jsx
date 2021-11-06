import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CalculateWaterUsageModal from './calculateWaterUsageModal';
import Dropli from '../images/dropli.png';

export default function HomePageBody() {
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
                component="main"
                sx={{ pt: 8, pb: 6 }}
            >
                <div className="header">
                    {/* Content before waves */}
                    <div className="inner-header flex-column">
                        <div className="flex-row">
                            <div className="dropli">
                                <img
                                    src={Dropli}
                                    alt="dropli"
                                    width="400"
                                    height="250"
                                ></img>
                            </div>
                            <div className="title">
                                <h1>WaterCount Digital Calculator</h1>
                            </div>
                        </div>
                        <CalculateWaterUsageModal />
                    </div>

                    {/* <!--Waves Container--> */}
                    <div>
                        <svg
                            className="waves"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28"
                            preserveAspectRatio="none"
                            shapeRendering="auto"
                        >
                            <defs>
                                <path
                                    id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                />
                            </defs>
                            <g className="parallax">
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="0"
                                    fill="rgba(255,255,255,0.7"
                                />
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="3"
                                    fill="rgba(255,255,255,0.5)"
                                />
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="5"
                                    fill="rgba(255,255,255,0.3)"
                                />
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="7"
                                    fill="#fff"
                                />
                            </g>
                        </svg>
                    </div>
                    {/* <!--Waves end--> */}
                </div>
                {/* <!--Header ends--> */}
            </Container>
        </React.Fragment>
    );
}
