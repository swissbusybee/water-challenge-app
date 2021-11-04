import React from 'react';

export default function WaveFooter() {
    return (
        <React.Fragment>
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
                            fill="#11B5E4"
                            opacity="0.2"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="6"
                            fill="rgba(255,255,255,0.5)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="8"
                            fill="rgba(255,255,255,0.3)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="10"
                            fill="#11B5E4"
                            opacity="0.2"
                        />
                    </g>
                </svg>
            </div>
            {/* <!--Waves end--> */}
        </React.Fragment>
    );
}
