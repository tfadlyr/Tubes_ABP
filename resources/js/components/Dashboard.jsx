import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import Sign_up from "./Sign_up";
import Login from "./Login";
import Game_Component from "./Game_Component";
import { useState } from "react";
import { auto } from "@popperjs/core";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";


const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      setImageSource(darkMode ? LightMode : DarkMode);
    };

    return (
        <>
            <Box sx={{backgroundColor: darkMode ? '#13151E' : "#F09D30", width: auto, height: auto, minHeight: '100vh' }}>
                <Paper elevation={3} sx={{backgroundColor: darkMode ? '#1A1D28' : '#C37F25', height: 90, paddingX: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                        <Grid item xs={9.5}>
                            <Typography variant="h4" sx={{color:  '#FFFFFF'}}>Sustraplay Library</Typography>
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
                            <Login/>
                            <Typography sx={{color: "#FFFFFF"}}>or</Typography>
                            <Sign_up/>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack alignItems="center" justifyContent="center">
                            <Typography variant="h5" sx={{color: "#FFFFFF"}}>Welcome to Sustraplay Library, Gamers!</Typography>
                            <Typography sx={{color: "#FFFFFF"}}>Sales, Active Players, Most Played, News, and So on. Find your game here at once</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{padding: 5, paddingX: 10}}>
                    <Grid item xs={6}>
                        <Stack flex={1}>
                            <Box sx={{backgroundColor: darkMode ? '#232738' : '#38623B', height: 298, maxWidth: 850, marginLeft: 8, borderRadius: 3}}>
                                <Box sx={{backgroundColor: darkMode ? '#272E47' : '#3D6C41', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                                    <Grid container>
                                        <Grid item xs={7}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Most Played Amongst Gamers</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Peak players</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>In-game</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Game_Component darkMode={darkMode} pic="https://via.placeholder.com/93x44" name="CS" peak="100" current="20" />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{backgroundColor: darkMode ? '#232738' : '#38623B', height: 298, maxWidth: 850, marginRight: 8, borderRadius: 3}}>
                            <Box sx={{backgroundColor: darkMode ? '#272E47' : '#3D6C41', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                                <Grid container>
                                    <Grid item xs={7}>
                                        <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>New Released Games</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Peak players</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>In-game</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Game_Component darkMode={darkMode} pic="https://via.placeholder.com/93x44" name="CS" peak="100" current="20" />
                            <Game_Component darkMode={darkMode} pic="https://via.placeholder.com/93x44" name="CS" peak="100" current="20" />
                        </Box>
                    </Grid>
                    {/* <Grid item alignItems='center' justifyContent='center' xs={12}>
                        <Stack alignItems='center' justifyContent='center' flex={1}>
                            <Box sx={{backgroundColor: '#232738', height: 298, width: 950, borderRadius: 3}}>
                                <Box sx={{backgroundColor: '#272E47', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                                    
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Games on Discount</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Original price</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>On discount</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Ends on</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid> */}
                    <Grid item xs={2}>
                        <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/>
                    </Grid>
                </Grid>
                
            </Box>
        </>
    )
}

export default Dashboard;