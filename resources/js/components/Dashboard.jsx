import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import Sign_up from "./Sign_up";
import Login from "./Login";
import Game_Component from "./Game_Component";
import { useState, useEffect } from "react";
import Game from "./Game";
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';
import { auto } from "@popperjs/core";


const Dashboard = () => {
    const { auth } = usePage().props;

    /*API*/
    const [dataApi, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    async function loadData(){
        const request = await fetch(
            "https://api.rawg.io/api/games?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa&-ordering=rating",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setProductData(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])

    /*Loading page*/
    if(loading){
        return (<div>Loading...</div>)
    }

    return (
        <>
            <Box sx={{backgroundColor: '#13151E', width: auto, height: '100vh' }}>
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
                            {
                                auth.user != null ? 
                                <div>
                                    <Typography sx={{color: "#FFFFFF"}}>Welcome, {auth.user.name}</Typography>
                                    <InertiaLink href="/logout">
                                    <Typography sx={{color: "#FFFFFF", textAlign: 'right'}}>Logout</Typography>
                                    </InertiaLink>
                                </div> :
                                <div>
                                    <div>
                                        <Typography sx={{color: "#FFFFFF"}}>You're not logged in, </Typography>
                                    </div>
                                    <div style={{display: 'flex', gap: '8px'}}>
                                        <Login/>
                                        <Typography sx={{color: "#FFFFFF"}}>or</Typography>
                                        <Sign_up/>
                                    </div>
                                </div>
                            }
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
                            <Box sx={{backgroundColor: '#232738', height: 600, maxWidth: 850, marginLeft: 8, borderRadius: 3}}>
                                <Box sx={{backgroundColor: '#272E47', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                                    <Grid container>
                                        <Grid item xs={7}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Best Game of All Time</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Peak players</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>In-game</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {/*Best Game of All Time*/}
                                {/* {peakData.map(data => <Game_Component key={data.id_game} id={data.id_game} peak={data.peak_player} current={data.in_game_peak}/>)} */}
                                {
                                    dataApi.results.slice(0, 9).map((data, index) => <Game_Component id={data.id} key={index} />)
                                }
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{backgroundColor: '#232738', height: 600, maxWidth: 850, marginRight: 8, borderRadius: 3}}>
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
                            {/*List Game New Released*/}
                        </Box>
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