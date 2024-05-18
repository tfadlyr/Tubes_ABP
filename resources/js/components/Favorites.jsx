import React, { useEffect } from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import { useState } from "react";
import { auto } from "@popperjs/core";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";
import Game_Component from "./Game_Component";

import { usePage } from '@inertiajs/inertia-react';
import Loading from "./Loading";

const Favorites = () => {
    const { auth } = usePage().props;
    const keyAuth = "un5uh3r9jrx2702cnegws69bm5k1fi";

    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);

    const[data, setData] = useState([]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      setImageSource(darkMode ? LightMode : DarkMode);
    };

    const [dataFav, setDataFav] = useState(null)
    const [loadFav, setLoadFav] = useState(true)

    async function getDataFav(){
        const response = await fetch(
            "/showGameFav/" + auth.user.id,
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataFav(data)
                setLoadFav(false)
            }).catch(err => console.log(err))
    }

    
    useEffect(()=>{
        getDataFav()
    }, [])

    if(loadFav){
        return (<Loading/>)
    }

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
                <Stack spacing={1} sx={{margin: 5, marginX: 8}}>
                    <Typography variant="h4" sx={{color: "#FFFFFF", fontWeight: "bold"}}>My Favorites</Typography>
                    <Typography sx={{color: "#FFFFFF"}}>We keep track with your favorites if you just click the star button form the gamepage</Typography>
                    <Typography sx={{color: "#FFFFFF"}}>Simple and easy enough to track your game statistics, no?</Typography>
                </Stack>
                <Grid Container>
                    <Grid item xs={12}>
                        <Stack alignItems='center' justifyContent='center' flex={1}>
                            <Box sx={{backgroundColor: darkMode ? '#232738' : '#B9602E', height: 400, width: 950, borderRadius: 3}}>
                                <Box sx={{backgroundColor: darkMode ? '#272E47' : '#D67138', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                                    <Grid container>
                                        <Grid item xs={7}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Your saved games</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>Peak players</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{color: "#FFFFFF", textAlign: 'center'}}>In-game</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {/* {
                                    dataFav.map(async(data)=>{
                                        await fetch(
                                            "http://127.0.0.1:8000/https://api.igdb.com/v4/games",
                                            {
                                                method: "POST",
                                                headers: {
                                                    "Accept": "application/json",
                                                    "Client-ID": "dssjkvlpsxeqevzscna95z2abuz7ij",
                                                    "Authorization": "Bearer " + keyAuth,
                                                },
                                                body: "fields name, cover.*, rating, release_dates.human, involved_companies.*, platforms.name, summary, videos.*, genres.name, age_ratings.category; sort rating desc; where id = "+data.id_game+";"
                                            }
                                        )
                                        .then(request => request.json())
                                        .then((data) => {
                                            
                                        })
                                    })
                                } */}
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Favorites;