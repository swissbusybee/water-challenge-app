import * as React from 'react';

export default function WaterUsageTips(props) {
    const {
        weeklyShowerDuration,
        weeklyBathroomFaucetDuration,
        weeklykitchenFaucetDuration,
        dishwasher,
        washingMachine,
        bathtub,
    } = props;
    return (
        <React.Fragment>
            {weeklyShowerDuration}
            {weeklyBathroomFaucetDuration}
            {weeklykitchenFaucetDuration}
            {dishwasher}
            {washingMachine}
            {bathtub}
        </React.Fragment>
    );
}
