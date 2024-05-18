import React, { useEffect } from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import { useState } from "react";
import { auto } from "@popperjs/core";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import SearchGame_Component from "./SearchGame_Component";

const Search_page = () => {
    const {search} = useParams();

    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      setImageSource(darkMode ? LightMode : DarkMode);
    };

    const keyAuth = "un5uh3r9jrx2702cnegws69bm5k1fi";

    const [dataSearch, setDataSearch] = useState(null);
    const [loadSearch, setLoadSearch] = useState(true);

    async function getDataSearch(){
        const request = await fetch(
            "http://127.0.0.1:8000/https://api.igdb.com/v4/games",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Client-ID": "dssjkvlpsxeqevzscna95z2abuz7ij",
                    "Authorization": "Bearer " + keyAuth,
                },
                body: 'fields name, cover.*, rating, release_dates.human, involved_companies.*, platforms.name, summary, videos.*, genres.name, age_ratings.*; where name ~ "'+search+'"*;',
            }
        )
        .then(request => request.json())
        .then((data) => {
            setDataSearch(data),
            setLoadSearch(false)
        })
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

    useEffect(() => {
        getDataSearch()
        loadStatGame()
    }, [])

    if(loadSearch){
        return (<Loading/>)
    }

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
                    </Grid>
                </Paper>
                
                {
                dataSearch.length != 0 
                ? //Conds True
                <Grid container>
                    <Grid item xs={12}>
                        <Stack  alignItems="center" spacing={3} sx={{paddingTop: 10}}>
                            <Typography variant="h4" sx={{color: "#FFFFFF", fontWeight: "bold"}}>
                                Game Search Result
                            </Typography>
                            <Typography variant="h5" sx={{color: "#FFFFFF"}}>
                                You've searched for " {search} "
                            </Typography>
                            <Box sx={{backgroundColor: darkMode ? "#232738" : "#B9602E", width: 930, height: 610, paddingX: 10, borderRadius: 3, overflow: auto}}>
                                {
                                    dataSearch.map(
                                        (data, index) => {
                                            if(dataStat != null){
                                                dataStat.map((stat)=>{
                                                    if(stat.id_game === data.id){
                                                        return <SearchGame_Component dataGame={data} key={index} cekStat={true}/>
                                                    }
                                                })
                                            }
                                            return <SearchGame_Component dataGame={data} key={index} cekStat={false}/>
                                        }
                                    )
                                }
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{marginX: 20, marginTop:5}}>
                        <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/>
                    </Grid>
                </Grid> 
                : //Conds False
                <Stack direction="column" alignItems="center" justifyContent="center" sx={{marginY: 50}}>
                    <Typography variant='h4' sx={{color: "#FFFFFF", fontWeight: "bold"}}>YANG LU CARI GAK ADA BOS</Typography>
                    <Typography sx={{color: "#FFFFFF"}}>ANTARA LU TYPO/EMANG GAK ADA AE</Typography>
                    <Typography sx={{color: "#FFFFFF"}}>BYE BYE 🤫</Typography>
                </Stack>
                }
            </Box>
        </>
    )
}

export default Search_page;