import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack, Button } from '@mui/material'
import { useState } from "react";
import { auto } from "@popperjs/core";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";

const SignUp_page = () => {
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
                            <Typography variant="h4" sx={{color:  '#FFFFFF', fontWeight: "bold"}}>Sustraplay Library</Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{backgroundColor: '#FFFFFF', borderRadius: 2, width: 384}}/>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid container >
                    <Grid item xs={7} sx={{paddingY: 40, paddingX: 30}}>
                        <Typography variant="h4" sx={{color: "#FFFFFF", fontWeight: "bold", textAlign: 'center'}}>
                            Welcome to Sustraplay Library, Gamers!
                        </Typography>
                        <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>
                            Active players, most played, and so on.
                        </Typography>
                        <Typography sx={{color: "#FFFFFF", textAlign: "center"}}>
                            Find your games here at once
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sx={{marginY: 20}}>
                        <Box sx={{height: 610, width: 430, backgroundColor: "#FFFFFF", padding: 4, borderRadius: 4}}>
                            <Box sx={{height: 550, width: 368, backgroundColor: "#5972CA", padding: 4, borderRadius: 4}}>
                                <Stack justifyConstent='center' alignItems='center' spacing={2}>
                                    <Typography variant="h4" sx={{color: "#FFFFFF"}}>Sign up</Typography> 
                                    <Typography sx={{color: '#FFFFFF'}}>Let's get along, friend!</Typography>
                                    <TextField label="Username"></TextField>
                                    <TextField label="Password" type="password" ></TextField>
                                    <TextField label="Email"></TextField>
                                    <Button variant="contained"  sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Sign up</Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sx={{marginX: 20}}>
                        <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default SignUp_page;