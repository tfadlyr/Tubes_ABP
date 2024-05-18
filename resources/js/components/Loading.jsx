import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import { useState } from 'react';
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";
import { auto } from "@popperjs/core";

const Loading = () => {
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
                            <Typography variant="h4" sx={{color:  '#FFFFFF', fontWeight: "bold"}}>Sustraplay Library</Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                            <Stack flex={1}>
                                <TextField id="outlined-basic" label="Search" variant="outlined" sx={{backgroundColor: '#FFFFFF', borderRadius: 2, maxWidth: 384}}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
                <Stack direction="column" alignItems="center" justifyContent="center" sx={{marginY: 50}}>
                    <Typography variant='h4' sx={{color: "#FFFFFF", fontWeight: "bold"}}>We're loading our data, please wait...</Typography>
                    <Typography sx={{color: "#FFFFFF"}}>We're cooking your needs so you can enjoy our service</Typography>
                    <Typography sx={{color: "#FFFFFF"}}>(Who let us cook???)</Typography>
                </Stack>
                {/* <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/> */}
            </Box>
        </>
    )
}


export default Loading;