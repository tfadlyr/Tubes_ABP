import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import { useState } from "react";
import { auto } from "@popperjs/core";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";
import { useParams, Link } from "react-router-dom";

const Search_page = () => {
    const {search} = useParams();
    
    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      setImageSource(darkMode ? LightMode : DarkMode);
    };

    return(
        <>
            <Box sx={{backgroundColor: darkMode ? '#13151E' : "#F09D30", width: auto, height: auto, minHeight: '100vh' }}>
                <Paper elevation={3} sx={{backgroundColor: darkMode ? '#1A1D28' : '#C37F25', height: 90, paddingX: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                        <Grid item xs={9.5}>
                            <Stack direction="row" spacing={5} alignItems="center">
                                <Link to={`/`}>
                                    <Typography variant="h4" sx={{color:  '#FFFFFF', fontWeight: "bold"}}>Sustraplay Library</Typography>
                                </Link>
                                <Typography variant="h6" sx={{color: '#FFFFFF', textAlign: "center",'&:hover': { cursor: 'pointer' }}}>
                                    My Favorites
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={2.5}>
                            <Stack flex={1}>
                                <TextField id="outlined-basic" label="Search" variant="outlined" sx={{backgroundColor: '#FFFFFF', borderRadius: 2, maxWidth: 384}}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <Stack  alignItems="center" spacing={3} sx={{paddingTop: 10}}>
                            <Typography variant="h4" sx={{color: "#FFFFFF", fontWeight: "bold"}}>
                                Game Search Result
                            </Typography>
                            <Typography variant="h5" sx={{color: "#FFFFFF"}}>
                                You've searched for " {search} "
                            </Typography>
                            <Box sx={{backgroundColor: darkMode ? "#232738" : "#B9602E", width: 930, height: 610, padding: 10, borderRadius: 3}}>
                                <Grid container>
                                    <Grid item xs={3.5}>
                                        <Stack alignItems="center">
                                            <img src="https://via.placeholder.com/93x44" style={{width: 142}}/>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={8.5}>
                                        <Stack sx={{paddingTop: 2}}>
                                            <Typography variant="h6" sx={{color: '#FFFFFF'}}>
                                                CS
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{marginX: 20, marginTop:5}}>
                        <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Search_page;