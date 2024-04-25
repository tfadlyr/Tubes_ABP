import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import Sign_up from "./Sign_up";
import Login from "./Login";
import Game_Component from "./Game_Component";
import { useState } from "react";


const Dashboard = () => {
    const [openLogin, setOpenLogin] = React.useState(false);

    const handleLoginClick = () => {
        setOpenLogin(!openLogin); // Toggle nilai openFilter
      };
    
      const handleCloseLogin = () => {
        setOpenLogin(false); // Tutup FilterPopover dengan mengatur openFilter ke false
      };

    return (
        <>
            <Box sx={{backgroundColor: '#13151E', width: '100vw', height: '100vh' }}>
                <Paper elevation={3} sx={{backgroundColor: '#1A1D28', height: 90, paddingX: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                        <Grid item xs={9.5}>
                            <Typography variant="h4" sx={{color: '#FFFFFF'}}>Sustraplay Library</Typography>
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
                            <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' }}} onClick={handleLoginClick}> 
                                Login
                                <Login open={openLogin} onClose={handleCloseLogin} />    
                            </Typography>
                            <Typography sx={{color: "#FFFFFF"}}>or</Typography>
                            <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' }}}>Sign up</Typography>
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
                            <Box sx={{backgroundColor: '#232738', height: 298, maxWidth: 850, marginLeft: 8, borderRadius: 3}}>
                                <Box sx={{backgroundColor: '#272E47', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
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
                                <Game_Component pic="https://via.placeholder.com/93x44" name="CS" peak="100" current="20" />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{backgroundColor: '#232738', height: 298, maxWidth: 850, marginRight: 8, borderRadius: 3}}>
                            <Box sx={{backgroundColor: '#272E47', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
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
                            <Game_Component pic="https://via.placeholder.com/93x44" name="CS" peak="100" current="20" />
                            <Game_Component pic="https://via.placeholder.com/93x44" name="CS" peak="100" current="20" />
                        </Box>
                    </Grid>
                    <Grid item alignItems='center' justifyContent='center' xs={12}>
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
                    </Grid>
                    <Grid item xs={12}>
                        {/* <img src={}/> */}
                    </Grid>
                </Grid>
                
            </Box>
        </>
    )
}

export default Dashboard;