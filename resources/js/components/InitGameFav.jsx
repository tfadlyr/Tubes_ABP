import React, { useEffect } from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import { useState } from "react";
import { auto } from "@popperjs/core";
import { usePage } from '@inertiajs/inertia-react';

import Loading from "./Loading";
import Game_Component from "./Game_Component";

import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";

const InitGameFav = ({dataFav}) => {
    const { auth } = usePage().props;

    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setImageSource(darkMode ? LightMode : DarkMode);
    };

    const keyAuth = "un5uh3r9jrx2702cnegws69bm5k1fi";
    

    const [dataGame, setDataGame] = useState([])
    const [loadGame, setLoadGame] = useState(true)

    function getDataGame(){
        dataFav.length != 0 ?
        dataFav.map(
            (game, index) => {
                const response = fetch(
                    "http://127.0.0.1:8000/https://api.igdb.com/v4/games",
                    {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Client-ID": "dssjkvlpsxeqevzscna95z2abuz7ij",
                            "Authorization": "Bearer " + keyAuth,
                        },
                        body: "fields name, cover.*, rating, release_dates.human, involved_companies.*, platforms.name, summary, videos.*, genres.name, age_ratings.category; where id="+game.id_game+";"
                    }
                )
                .then(request => request.json())
                .then((data) => {
                    setDataGame(dataGame => [...dataGame, data[0]])
                    if(index === dataFav.length - 1){
                        setLoadGame(false)
                    }
                })
            }
        ) : null
    }

    const [dataPeak, setDataPeak] = useState(null);
    const [loadPeak, setLoadPeak] = useState(true);

    async function loadPeakGame(){
        const request = await fetch(
            "/gamePeak",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataPeak(data)
                setLoadPeak(false)
            }).catch(err => console.log(err))
    }

    const [dataStat, setDataStat] = useState(null);
    const [loadStat, setLoadStat] = useState(true);

    async function loadStatGame(){
        const response = await fetch(
            "/cekStatistik",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataStat(data)
                setLoadStat(false)
            }).catch(err => console.log(err))
    }

    useEffect(()=>{
        getDataGame()
        loadPeakGame()
        loadStatGame()
    }, [])

    if(loadGame || loadPeak || loadStat){
        return <Loading/>
    }

    return(
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
                <Grid container>
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
                                {
                                    dataGame.map(
                                        (game, index) => {
                                            for(var i = 0; i < dataPeak.length; i++){
                                                if(dataPeak[i].id_game == game.id){
                                                    for(var j = 0; j < dataStat.length; j++){
                                                        if(dataStat[j].id_game == game.id){
                                                            return <Game_Component darkMode={darkMode} dataGame={game} dataPeak={dataPeak[i]} cekStat={true} key={index}/>
                                                        }
                                                    }
                                                    return <Game_Component darkMode={darkMode} dataGame={game} dataPeak={dataPeak[i]} cekStat={false} key={index}/>
                                                }
                                            }
                                            return <Game_Component darkMode={darkMode} dataGame={game} dataPeak={null} cekStat={false} key={index}/>
                                        }
                                    )
                                }
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default InitGameFav;