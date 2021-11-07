import * as React from 'react';
import Grid from '@mui/material/Grid';
import TipContainer from './tipContainer';

export default function WaterUsageTips(props) {
    const {
        showerDuration,
        bathroomFaucetDuration,
        kitchenFaucetDuration,
        dishwasher,
        washingMachine,
        bathtub,
        beef,
    } = props;

    const showerDurationTips = (duration) => {
        switch (duration) {
            case 45:
                return (
                    <TipContainer
                        tipText={
                            'Challenge yourself and get your shower time down to a single song'
                        }
                    />
                );
            case 90:
                return (
                    <TipContainer
                        tipText={
                            'Keep your shower time to the length of two songs'
                        }
                    />
                );
            case 135:
                return (
                    <TipContainer
                        tipText={
                            'The average shower lasts 8 minutes. Keep your shower time to the length of two songs'
                        }
                    />
                );
            case 180:
                return (
                    <TipContainer
                        tipText={
                            'The average shower lasts 8 minutes. Keep your shower time to the length of two songs'
                        }
                    />
                );
            default:
                return '';
        }
    };

    const bathroomFaucetDurationTips = (duration) => {
        switch (duration) {
            case 30:
                return (
                    <TipContainer
                        tipText={
                            'Use cold water to brush your teeth because saving energy, saves water'
                        }
                    />
                );
            case 60:
                return (
                    <TipContainer
                        tipText={
                            'Each time you run the faucet while you brush your teeth you’re wasting about 6 liters per minute'
                        }
                    />
                );
            case 90:
                return (
                    <TipContainer
                        tipText={
                            'Each time you run the faucet while you brush your teeth you’re wasting about 6 liters per minute'
                        }
                    />
                );
            case 120:
                return (
                    <TipContainer
                        tipText={
                            'Each time you run the faucet while you brush your teeth you’re wasting about 6 liters per minute'
                        }
                    />
                );
            default:
                return '';
        }
    };

    const kitchenFaucetDurationTips = (duration) => {
        switch (duration) {
            case 35:
                return (
                    <TipContainer
                        tipText={
                            'Boil food in as little water as possible to save water & energy'
                        }
                    />
                );
            case 70:
                return (
                    <TipContainer
                        tipText={
                            'Turn off the faucet while you cook or clean. 7 liters is used each minute it is on'
                        }
                    />
                );
            case 140:
                return (
                    <TipContainer
                        tipText={
                            'Turn off the faucet while you cook or clean. 7 liters is used each minute it is on'
                        }
                    />
                );
            case 210:
                return (
                    <TipContainer
                        tipText={
                            'Turn off the faucet while you cook or clean. 7 liters is used each minute it is on'
                        }
                    />
                );
            default:
                return '';
        }
    };

    const dishwasherTips = (duration) => {
        switch (duration) {
            case 40:
                return (
                    <TipContainer
                        tipText={
                            'Check for clogs. This will help save water by cleaning dishes more effectively'
                        }
                    />
                );
            case 80:
                return (
                    <TipContainer
                        tipText={
                            'Check for clogs. This will help save water by cleaning dishes more effectively'
                        }
                    />
                );
            case 120:
                return (
                    <TipContainer
                        tipText={
                            'Check for clogs. This will help save water by cleaning dishes more effectively'
                        }
                    />
                );
            case 140:
                return (
                    <TipContainer
                        tipText={
                            'Check for clogs. This will help save water by cleaning dishes more effectively'
                        }
                    />
                );
            default:
                return '';
        }
    };

    const washingMachineTips = (duration) => {
        switch (duration) {
            case 100:
                return (
                    <TipContainer
                        tipText={
                            'Use your washing machine only when it’s full to save water while doing the laundry'
                        }
                    />
                );
            case 200:
                return (
                    <TipContainer
                        tipText={
                            'Use your washing machine only when it’s full to save water while doing the laundry'
                        }
                    />
                );
            case 300:
                return (
                    <TipContainer
                        tipText={
                            'Use your washing machine only when it’s full to save water while doing the laundry'
                        }
                    />
                );
            case 400:
                return (
                    <TipContainer
                        tipText={
                            'Use your washing machine only when it’s full to save water while doing the laundry'
                        }
                    />
                );
            default:
                return '';
        }
    };

    const bathtubTips = (duration) => {
        switch (duration) {
            case 200:
                return (
                    <TipContainer
                        tipText={
                            'Baths are nice but it takes about 100 liters of water to fill. Reduce baths if possible'
                        }
                    />
                );
            case 400:
                return (
                    <TipContainer
                        tipText={
                            'Baths are nice but it takes about 100 liters of water to fill. Reduce baths if possible'
                        }
                    />
                );
            case 600:
                return (
                    <TipContainer
                        tipText={
                            'Baths are nice but it takes about 100 liters of water to fill. Reduce baths if possible'
                        }
                    />
                );
            case 800:
                return (
                    <TipContainer
                        tipText={
                            'Baths are nice but it takes about 100 liters of water to fill. Reduce baths if possible'
                        }
                    />
                );
            default:
                return '';
        }
    };

    const beefTips = (duration) => {
        switch (duration) {
            case 4800:
                return (
                    <TipContainer
                        tipText={
                            'Eat more veggies. It takes a huge amount of water to produce animal products.'
                        }
                    />
                );
            case 9600:
                return (
                    <TipContainer
                        tipText={
                            'Eat more veggies. It takes a huge amount of water to produce animal products.'
                        }
                    />
                );
            case 14400:
                return (
                    <TipContainer
                        tipText={
                            'Eat more veggies. It takes a huge amount of water to produce animal products.'
                        }
                    />
                );
            case 19200:
                return (
                    <TipContainer
                        tipText={
                            'Eat more veggies. It takes a huge amount of water to produce animal products.'
                        }
                    />
                );
            default:
                return '';
        }
    };

    return (
        <Grid container direction={'column'} spacing={1} pt={2}>
            <Grid item>{showerDurationTips(showerDuration)}</Grid>
            <Grid item>
                {bathroomFaucetDurationTips(bathroomFaucetDuration)}
            </Grid>
            <Grid item>
                {kitchenFaucetDurationTips(kitchenFaucetDuration)}
            </Grid>
            <Grid item>{dishwasherTips(dishwasher)}</Grid>
            <Grid item>{washingMachineTips(washingMachine)}</Grid>
            <Grid item>{bathtubTips(bathtub)}</Grid>
            <Grid item>{beefTips(beef)}</Grid>
        </Grid>
    );
}
