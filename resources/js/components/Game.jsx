import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, TextField, Grid, Paper, Stack} from '@mui/material'
import '../../css/app.css';
import { auto } from "@popperjs/core";
import UpdateInGame from "./UpdateInGame";
import UpdatePeakPlayer from "./UpdatePeakPlayer";
import UpdateGameStatistic from "./UpdateGameStatistic";
import InsertGameStatistic from "./InsertGameStatistic";

import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";
import FilledStarD from "../../../public/yellow_star.png";
import FilledStarL from "../../../public/filled_star.png";
import BlankStar from "../../../public/blank_star.png";


const Game = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);
    const [darkModeS, setDarkModeS] = useState(true);
    const [imageSourceF, setImageSourceF] = useState(FilledStarD);
    const [changeStar, setChangeStar] = useState(BlankStar);
    const [keyImg, setKeyImg] = useState(2);  

    useEffect(() => {
        setImageSource(darkMode ? DarkMode : LightMode);
        setImageSourceF(darkMode ? FilledStarD : FilledStarL);
        if (changeStar !== BlankStar) {
            setChangeStar(darkMode ? FilledStarD : FilledStarL);
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        setDarkModeS(prevMode => !prevMode);
        setImageSource(darkMode ? LightMode : DarkMode);
        setImageSourceF(darkModeS ? FilledStarL : FilledStarD);
        if (changeStar !== BlankStar) {
            setChangeStar(darkMode ? FilledStarL : FilledStarD);
        }
    };
    
    const toggleChangeStar = () => {
    if (changeStar === BlankStar) {
        setChangeStar(imageSourceF);
        setKeyImg(2);
    } else {
        setChangeStar(BlankStar);
        setKeyImg(1);
    }
    };

    return (
        <>
            <Box sx={{backgroundColor: darkMode ? '#13151e' : '#f09d30', width: auto}}>
                <Paper elevation={3} sx={{backgroundColor: darkMode ? '#1A1D28' : '#C37F25', height: 90, paddingX: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                        <Grid item xs={9.5}>
                            <Typography variant="h4" sx={{color: '#FFFFFF'}}>Sustraplay Library</Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{backgroundColor: '#FFFFFF', borderRadius: 2, width: 384}}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Box sx={{backgroundColor: darkMode ? '#13151e' : '#f09d30', width: auto, maxHeight: auto, padding: 10, g: 10 }}>
                <Grid sx={{display: 'flex', gap: 10}}>
                    <Stack direction="column" justifyContent="flex-start" spacing={1}>
                        <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027', fontSize: 48, fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>Counter-Strike 2</Typography>
                    </Stack>
                    <Stack display='flex' direction="row" alignItems='center' justifyContent="flex-start" spacing={1}>
                        <img src={changeStar} key={keyImg} style={{width: 50, height: 50}} onClick={toggleChangeStar}/>
                        <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027', fontSize: 48, fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>Favorites</Typography>
                    </Stack>
                </Grid>
                <Grid container sx={{display: 'flex', justifyContent:'space-between', paddingTop: 10}} spacing={10}>
                    <Grid item xs={2.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <img src="https://via.placeholder.com/300x300" alt="Dummy Image"/>
                        <Grid sx={{color: darkMode ? "var(--main-text-color)" : '#985027', textAlign: 'center', }}>
                            <Typography variant="h6">Users rating:</Typography>
                            <Typography variant="h6">8,7 of 10</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Grid sx={{color: darkMode ? "var(--main-text-color)" : '#985027', marginBottom: 2}}>
                            <Typography variant="h3">Game Description </Typography>
                            <Typography variant="h6" sx={{ overflow: 'auto', maxHeight: 250 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos molestias laudantium saepe distinctio aliquam provident est delectus ullam repellendus. ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quae inventore quas cupiditate dolor, velit aperiam nulla quo qui adipisci consequatur illo beatae tempore perferendis eum natus ratione veritatis deleniti ducimus reiciendis nihil nostrum modi? Possimus harum delectus sit totam minus sequi a. Veniam ea aperiam, fuga commodi quasi eum consequatur molestias natus nobis libero voluptas rem quibusdam sed reiciendis illum incidunt ipsa perspiciatis nisi voluptatibus! Facilis provident tempore totam?
                            </Typography>
                        </Grid>
                        <Grid sx={{color: darkMode ? "var(--main-text-color)" : '#985027', display: 'flex', justifyContent: 'center', gap: 10, }}>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">In-game</Typography>
                                <Typography variant="h6">809,142</Typography>
                                <UpdateInGame/>
                            </Grid>
                            <Typography sx={{fontSize: 32}}>|</Typography>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">Peak players</Typography>
                                <Typography variant="h6">1,121,309</Typography>
                                <UpdatePeakPlayer/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack sx={{color: darkMode ? "var(--main-text-color)" : '#985027', justifyContent: 'space-between', padding: 0.5}}>
                            <Grid item className="var1GamePage" sx={{backgroundColor: darkMode ? 'var(--var1-gamepage)' : '#D67138'}}>
                                <Typography variant="h6">Developer</Typography>
                                <Typography variant="h6">Valve Industries</Typography>
                            </Grid>
                            <Grid item className="var2GamePage" sx={{backgroundColor: darkMode ? 'var(--var2-gamepage)' : '#B9602E'}}>
                                <Typography variant="h6">Publisher</Typography>
                                <Typography variant="h6">Valve Industries</Typography>
                            </Grid>
                            <Grid item className="var1GamePage" sx={{backgroundColor: darkMode ? 'var(--var1-gamepage)' : '#D67138'}}>
                                <Typography variant="h6">Supported Systems</Typography>
                                <Typography variant="h6">Wingodswes</Typography>
                            </Grid>
                            <Grid item className="var2GamePage" sx={{backgroundColor: darkMode ? 'var(--var2-gamepage)' : '#B9602E'}}>
                                <Typography variant="h6">Technologies / Game engine</Typography>
                                <Typography variant="h6">Source 3.0</Typography>
                            </Grid>
                            <Grid item className="var1GamePage" sx={{backgroundColor: darkMode ? 'var(--var1-gamepage)' : '#D67138'}}>
                                <Typography variant="h6">Last update</Typography>
                                <Typography variant="h6">teuing iraha</Typography>
                            </Grid>
                            <Grid item className="var2GamePage" sx={{backgroundColor: darkMode ? 'var(--var2-gamepage)' : '#B9602E'}}>
                                <Typography variant="h6">Release date</Typography>
                                <Typography variant="h6">teu apal</Typography>
                            </Grid>
                            <Grid item className="var1GamePage" sx={{backgroundColor: darkMode ? 'var(--var1-gamepage)' : '#D67138'}}>
                                <Typography variant="h6">Game Genre</Typography>
                                <Typography variant="h6">teuing</Typography>
                            </Grid>
                            <Grid item className="var2GamePage" sx={{backgroundColor: darkMode ? 'var(--var2-gamepage)' : '#B9602E'}}>
                                <Typography variant="h6">Age rating</Typography>
                                <Typography variant="h6">22+</Typography>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid sx={{paddingTop: 10}}>
                <Box sx={{border: `1px solid ${darkMode ? '#FFFFFF' : '#985027'}`,borderRadius: 10, paddingX: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Typography sx={{fontSize: 32, color: darkMode ? 'var(--main-text-color)' : '#985027'}}>Game Statistic</Typography>
                    <Grid sx={{display: 'flex', alignItems: 'center', gap: 5}} >
                        <Stack direction='row' sx={{ gap: 1 }}>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>Year</Typography>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>|</Typography>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>Month</Typography>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>|</Typography>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>Peak</Typography>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>|</Typography>
                        <Typography sx={{ color: darkMode ? 'var(--main-text-color)' : '#985027' }}>Gain</Typography>
                        </Stack>
                        <InsertGameStatistic />
                    </Grid>
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-around', marginTop: 4}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TableContainer>
                                    <Table sx={{backgroundColor: darkMode ? '#13151e' : '#f09d30'}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>Year</TableCell>
                                                <TableCell sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>Month</TableCell>
                                                <TableCell sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>Month</TableCell>
                                                <TableCell sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>Month</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>2024</TableCell>
                                                <TableCell>
                                                    <Stack spacing={1}>
                                                        <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>April</Typography>
                                                        <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>March</Typography>
                                                        <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>February</Typography>
                                                        <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>January</Typography>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>2023</TableCell>
                                                <TableCell>
                                                <Stack spacing={1}>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>December</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>November</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>October</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>September</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>August</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>July</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>June</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>May</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>April</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>March</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>February</Typography>
                                                    <Typography sx={{color: darkMode ? "var(--main-text-color)" : '#985027'}}>January</Typography>
                                                </Stack>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                    <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/>
                </Grid>
            </Box>
        </>
    )
}

export default Game;
