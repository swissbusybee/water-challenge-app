import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import WashingMachine from '../images/washingMachine.png';
import BathroomSink from '../images/bathroomSink.png';
import Bathtub from '../images/bathtub.png';
import DishWasher from '../images/dishWasher.png';
import KitchenSink from '../images/kitchenSink.png';
import Shower from '../images/shower.png';
import People from '../images/people.png';
import WaterContainerJug from './waterContainerJug';

export default function CalculateWaterUsageModal() {
    const [open, setOpen] = React.useState(false);
    const [showerDuration, setShowerDuration] = React.useState('');
    const [bathroomFaucetDuration, setBathroomFaucetDuration] =
        React.useState('');
    const [kitchenFaucetDuration, setKitchenFaucetDuration] =
        React.useState('');
    const [dishwasher, setDishwasher] = React.useState('');
    const [washingMachine, setWashingMachine] = React.useState('');
    const [bathtub, setBathtub] = React.useState('');
    const [people, setPeople] = React.useState('');

    const handleChangeShower = (event) => {
        setShowerDuration(event.target.value);
    };

    const handleChangeBathroom = (event) => {
        setBathroomFaucetDuration(event.target.value);
    };

    const handleChangeKitchen = (event) => {
        setKitchenFaucetDuration(event.target.value);
    };

    const handleChangeDishwasher = (event) => {
        setDishwasher(event.target.value);
    };

    const handleChangeWashingMachine = (event) => {
        setWashingMachine(event.target.value);
    };

    const handleChangeBathtub = (event) => {
        setBathtub(event.target.value);
    };

    const handleChangePeople = (event) => {
        setPeople(event.target.value);
    };

    const handleReset = (event) => {
        setPeople('');
        setBathtub('');
        setWashingMachine('');
        setDishwasher('');
        setKitchenFaucetDuration('');
        setBathroomFaucetDuration('');
        setShowerDuration('');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const weeklyShowerDuration = showerDuration * 7;
    const weeklyBathroomFaucetDuration = bathroomFaucetDuration * 7;
    const weeklykitchenFaucetDuration = kitchenFaucetDuration * 7;
    const numberOfPeople = people ? people : 1;

    const numberOfWaterContainers = Math.round(
        ((weeklyShowerDuration +
            weeklyBathroomFaucetDuration +
            weeklykitchenFaucetDuration +
            dishwasher +
            washingMachine +
            bathtub) *
            numberOfPeople) /
            15,
    ); //each jug is 15 liters of water

    const numberOfWaterLiters = Math.round(
        (weeklyShowerDuration +
            weeklyBathroomFaucetDuration +
            weeklykitchenFaucetDuration +
            dishwasher +
            washingMachine +
            bathtub) *
            numberOfPeople,
    );

    return (
        <div>
            <Button
                size="large"
                variant={'contained'}
                onClick={handleClickOpen}
            >
                How much water do you use?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'md'}
            >
                <DialogTitle>Calculate Water Usage</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={People}
                                    alt="people"
                                    width="64"
                                    height="45"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="people-select-label">
                                        How many people are in your
                                        household?
                                    </InputLabel>
                                    <Select
                                        labelId="people-select-label"
                                        id="people-select"
                                        value={people}
                                        label="People"
                                        onChange={handleChangePeople}
                                    >
                                        <MenuItem value={1}>
                                            1 Person
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            2 People
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            3 People
                                        </MenuItem>
                                        <MenuItem value={4}>
                                            4 People
                                        </MenuItem>
                                        <MenuItem value={5}>
                                            5 People
                                        </MenuItem>
                                        <MenuItem value={6}>
                                            6 People
                                        </MenuItem>
                                        <MenuItem value={7}>
                                            7 People
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={Shower}
                                    alt="shower"
                                    width="65"
                                    height="75"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="shower-select-label">
                                        How long is the average shower
                                        in your household?
                                    </InputLabel>
                                    <Select
                                        labelId="shower-select-label"
                                        id="shower-select"
                                        value={showerDuration}
                                        label="Shower Duration"
                                        onChange={handleChangeShower}
                                    >
                                        {/* 9 liters per minute */}
                                        <MenuItem value={45}>
                                            Under 5 Min
                                        </MenuItem>
                                        <MenuItem value={90}>
                                            5-10 Min
                                        </MenuItem>
                                        <MenuItem value={135}>
                                            11-15 Min
                                        </MenuItem>
                                        <MenuItem value={180}>
                                            Over 15 Min
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={BathroomSink}
                                    alt="bathroom sink"
                                    width="65"
                                    height="75"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="bathroom-faucet-select-label">
                                        How long do the bathroom
                                        faucets run each day?
                                    </InputLabel>
                                    <Select
                                        labelId="bathroom-faucet-select-label"
                                        id="bathroom-faucet-select"
                                        value={bathroomFaucetDuration}
                                        label="Bathroom Faucet Duration"
                                        onChange={
                                            handleChangeBathroom
                                        }
                                    >
                                        {/* 6 liters per minute */}
                                        <MenuItem value={30}>
                                            Under 5 Min
                                        </MenuItem>
                                        <MenuItem value={60}>
                                            5-10 Min
                                        </MenuItem>
                                        <MenuItem value={90}>
                                            11-15 Min
                                        </MenuItem>
                                        <MenuItem value={120}>
                                            Over 15 Min
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={KitchenSink}
                                    alt="kitchen sink"
                                    width="65"
                                    height="75"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="kitchen-faucet-select-label">
                                        How long do the kitchen
                                        faucets run each day?
                                    </InputLabel>
                                    <Select
                                        labelId="kitchen-faucet-select-label"
                                        id="kitchen-faucet-select"
                                        value={kitchenFaucetDuration}
                                        label="Kitchen Faucet Duration"
                                        onChange={handleChangeKitchen}
                                    >
                                        {/* 7 liters per minute */}
                                        <MenuItem value={35}>
                                            Under 5 Min
                                        </MenuItem>
                                        <MenuItem value={70}>
                                            5-10 Min
                                        </MenuItem>
                                        <MenuItem value={140}>
                                            11-30 Min
                                        </MenuItem>
                                        <MenuItem value={210}>
                                            Over 30 Min
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={DishWasher}
                                    alt="dishwasher"
                                    width="65"
                                    height="75"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="dishwasher-select-label">
                                        How often to you use a
                                        dishwasher per week?
                                    </InputLabel>
                                    <Select
                                        labelId="dishwasher-select-label"
                                        id="dishwasher-select"
                                        value={dishwasher}
                                        label="Dishwasher"
                                        onChange={
                                            handleChangeDishwasher
                                        }
                                    >
                                        {/* 20 liters per cycle */}
                                        <MenuItem value={0}>
                                            I don't use a dishwasher
                                        </MenuItem>
                                        <MenuItem value={40}>
                                            1 to 2 times per week
                                        </MenuItem>
                                        <MenuItem value={80}>
                                            3 to 4 times per week
                                        </MenuItem>
                                        <MenuItem value={120}>
                                            5 to 6 times per week
                                        </MenuItem>
                                        <MenuItem value={140}>
                                            7 or more times per week
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={WashingMachine}
                                    alt="washing machine"
                                    width="65"
                                    height="75"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="washing-machine-select-label">
                                        How often to you use a washing
                                        machine per week?
                                    </InputLabel>
                                    <Select
                                        labelId="washing-machine-select-label"
                                        id="washing-machine-select"
                                        value={washingMachine}
                                        label="Washing Machine"
                                        onChange={
                                            handleChangeWashingMachine
                                        }
                                    >
                                        {/* 50 liters per cycle */}
                                        <MenuItem value={0}>
                                            I don't use a washing
                                            machine
                                        </MenuItem>
                                        <MenuItem value={100}>
                                            1 to 2 times per week
                                        </MenuItem>
                                        <MenuItem value={200}>
                                            3 to 4 times per week
                                        </MenuItem>
                                        <MenuItem value={300}>
                                            5 to 6 times per week
                                        </MenuItem>
                                        <MenuItem value={400}>
                                            7 or more times per week
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <img
                                    src={Bathtub}
                                    alt="bathtub"
                                    width="65"
                                    height="75"
                                ></img>
                                <FormControl
                                    sx={{ m: 1, width: 450 }}
                                    variant="standard"
                                >
                                    <InputLabel id="bathtub-select-label">
                                        How often to you take a bath
                                        per week?
                                    </InputLabel>
                                    <Select
                                        labelId="bathtub-select-label"
                                        id="bathtub-select"
                                        value={bathtub}
                                        label="Bathtub"
                                        onChange={handleChangeBathtub}
                                    >
                                        {/* 100 liters per fill */}
                                        <MenuItem value={0}>
                                            I don't use a bathtub
                                        </MenuItem>
                                        <MenuItem value={200}>
                                            1 to 2 times per week
                                        </MenuItem>
                                        <MenuItem value={400}>
                                            3 to 4 times per week
                                        </MenuItem>
                                        <MenuItem value={600}>
                                            5 to 6 times per week
                                        </MenuItem>
                                        <MenuItem value={800}>
                                            7 or more times per week
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container direction={'row'}>
                                <h4>
                                    {showerDuration ||
                                    bathroomFaucetDuration ||
                                    kitchenFaucetDuration ||
                                    dishwasher ||
                                    washingMachine ||
                                    bathtub
                                        ? numberOfWaterLiters +
                                          ' Liters per week'
                                        : ''}
                                </h4>
                                <div className="water-container-legend">
                                    <WaterContainerJug />
                                    {' = 15 liters'}
                                </div>
                            </Grid>
                            <Grid container direction={'row'}>
                                {[
                                    ...Array(numberOfWaterContainers),
                                ].map((e, i) => (
                                    <WaterContainerJug key={i} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
