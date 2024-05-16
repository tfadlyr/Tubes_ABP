import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack, colors, Divider } from '@mui/material'
import '../../css/app.css';
import { auto } from "@popperjs/core";
import { Link } from "react-router-dom";

const Game =({ darkMode }) => {
    return (
        <>
            <Box sx={{backgroundColor: '#13151E', width: auto, height: 90 }}>
                <Paper elevation={3} sx={{backgroundColor: '#1A1D28', height: 90, paddingX: 3 }}>
                        <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                            <Grid item xs={9.5}>
                                <Link to={`/`}>
                                    <Typography variant="h4" sx={{color: '#FFFFFF', fontWeight: "bold"}}>Sustraplay Library</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={2.5}>
                                <TextField id="outlined-basic" label="Search" variant="outlined" sx={{backgroundColor: '#FFFFFF', borderRadius: 2, width: 384}}/>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Grid container>
                        <Grid item xs= {12} sx={{padding: 2}}>
                            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
                                <Typography sx={{color: "#FFFFFF"}}>You're not logged in, </Typography>
                                <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' }}}>Login</Typography>
                                <Typography sx={{color: "#FFFFFF"}}>or</Typography>
                                <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' }}}>Sign up</Typography>
                            </Stack>
                        </Grid>
                    </Grid>

            </Box>
            <Box sx={{backgroundColor: 'var(--main-background-color)', maxHeight: auto, width: auto, padding: 10, g: 10 }}>
                <Stack direction="column" justifyContent="flex-start" spacing={1}>
                    <Typography sx={{color: "var(--main-text-color)", fontSize: 48, fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>Counter-Strike 2</Typography>
                </Stack>
                <Grid container sx={{display: 'flex', justifyContent:'space-between', paddingTop: 10}} spacing={10}>
                    <Grid item xs={2.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <img src="https://via.placeholder.com/300x300" alt="Dummy Image"/>
                        <Grid sx={{color: 'var(--main-text-color)', textAlign: 'center', }}>
                            <Typography variant="h6">Users rating:</Typography>
                            <Typography variant="h6">8,7 of 10</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Grid sx={{color: 'var(--main-text-color)'}}>
                            <Typography variant="h3">Game Description </Typography>
                            <Typography variant="h6" sx={{ overflow: 'auto', maxHeight: 250 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos molestias laudantium saepe distinctio aliquam provident est delectus ullam repellendus. ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quae inventore quas cupiditate dolor, velit aperiam nulla quo qui adipisci consequatur illo beatae tempore perferendis eum natus ratione veritatis deleniti ducimus reiciendis nihil nostrum modi? Possimus harum delectus sit totam minus sequi a. Veniam ea aperiam, fuga commodi quasi eum consequatur molestias natus nobis libero voluptas rem quibusdam sed reiciendis illum incidunt ipsa perspiciatis nisi voluptatibus! Facilis provident tempore totam?
                            </Typography>

                        </Grid>
                        <Grid sx={{color: 'var(--main-text-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">In-game</Typography>
                                <Typography variant="h6">809,142</Typography>
                            </Grid>
                            <Typography sx={{fontSize: 32}}>|</Typography>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">Peak players</Typography>
                                <Typography variant="h6">1,121,309</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack sx={{color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', justifyContent: 'space-between', padding: 0.5}}>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Developer</Typography>
                                <Typography variant="h6">Valve Industries</Typography>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Publisher</Typography>
                                <Typography variant="h6">Valve Industries</Typography>
                            </Grid>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Supported Systems</Typography>
                                <Typography variant="h6">Wingodswes</Typography>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Technologies / Game engine</Typography>
                                <Typography variant="h6">Source 3.0</Typography>
                            </Grid>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Last update</Typography>
                                <Typography variant="h6">teuing iraha</Typography>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Release date</Typography>
                                <Typography variant="h6">teu apal</Typography>
                            </Grid>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Game Genre</Typography>
                                <Typography variant="h6">teuing</Typography>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Age rating</Typography>
                                <Typography variant="h6">22+</Typography>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid sx={{paddingTop: 10}}>
                    <Box sx={{border: '1px solid white', borderRadius: 10, paddingX: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        <Typography sx={{fontSize: 32, color: 'var(--main-text-color)'}}>Game Statistic</Typography>
                        <Stack direction='row' sx={{gap: 1}}>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Year</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Month</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Peak</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Gain</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-around', color: 'var(--main-text-color)', marginTop: 4}}>
                        <Grid>
                            <Grid sx={{display: 'flex', gap: 5.5, marginBottom: 2}}>
                                <Typography>Year</Typography>
                                <Typography>Month</Typography>
                            </Grid>
                            <Grid sx={{display: 'flex', gap: 5}}>
                                <Typography>2024</Typography>
                                <Stack sx={{gap: 1, marginBottom: 2}}>
                                    <Typography>April</Typography>
                                    <Typography>March</Typography>
                                    <Typography>February</Typography>
                                    <Typography>January</Typography>
                                </Stack>
                            </Grid>
                            <Grid sx={{display: 'flex', gap: 5}}>
                                <Typography>2023</Typography>
                                <Stack sx={{gap: 1, marginBottom: 2}}>
                                    <Typography>December</Typography>
                                    <Typography>November</Typography>
                                    <Typography>October</Typography>
                                    <Typography>September</Typography>
                                    <Typography>August</Typography>
                                    <Typography>July</Typography>
                                    <Typography>June</Typography>
                                    <Typography>May</Typography>
                                    <Typography>April</Typography>
                                    <Typography>March</Typography>
                                    <Typography>February</Typography>
                                    <Typography>January</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid sx={{display: 'flex', gap: 16}}>
                            <Stack sx={{gap: 1}}>
                                <Typography>Peak</Typography>
                                <Typography>809,142</Typography>
                                <Typography>701,954</Typography>
                                <Typography>1,121,309</Typography>
                                <Typography>991,911</Typography>
                            </Stack>
                            <Stack sx={{gap: 1}}>
                                <Typography>Gain</Typography>
                                <Typography>+[...]%</Typography>
                                <Typography>=-[...]%</Typography>
                                <Typography>+[...]%</Typography>
                                <Typography>+/-[...]%</Typography>
                            </Stack>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Game;
