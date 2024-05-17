import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import Sign_up from "./Sign_up";
import Login from "./Login";
import Game_Component from "./Game_Component";
import { useState, useEffect } from "react";
import Game from "./Game";
import { Head, InertiaLink, usePage, Inertia } from '@inertiajs/inertia-react';
import { auto } from "@popperjs/core";
import NewReleasedComponent from "./NewReleasedComponent";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";


const Dashboard = () => {
    const { auth } = usePage().props;

    /*API*/
    const [dataApi, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const [upcoming, setDataApi] = useState(null)
    const [loadingUpcoming, setLoadingApi] = useState(true)

    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setImageSource(darkMode ? LightMode : DarkMode);
    };

    // const [search, setSearch] = useState(null)
    // const [loadingSearch, setLoadingSearch] = useState(null)

    // const [searchGame, setSearchGame] = useState(null);

    // async function searchingGame(){
    //     const request = await fetch(
    //         "https://api.rawg.io/api/games?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa&search='"+searchGame+"'",
    //         {headers: {'Accept': 'application/json'}})
    //         .then(request => request.json())
    //         .then((data) => {
    //             setSearch(data)
    //             setLoadingSearch(false)
    //         })
    //         .catch(err => console.log(err))
    // }

    // const handleKeyPress = async (event) => {
    //     if (event.key === 'Enter') {
    //         await searchingGame()

    //         if(loadingSearch){
    //             return (<div>Loading...</div>)
    //         }
    //         console.log(search)
    //         //Inertia.get('/game/'+search.results[0].id)
    //     }
    // }
    
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
    
    async function loadDataApi(){
        const date = new Date();

        let getDate = "" + date.getFullYear() + "-" + (
            date.getMonth() < 10 ? ("0"+date.getMonth()) : date.getMonth()
        ) + "-" + (
            date.getDate() < 10 ? ("0"+date.getDate()) : date.getDate()
        ) +"";
        
        let nextYear = "" + (date.getFullYear() + 1) + "-" + (
            date.getMonth() < 10 ? ("0"+date.getMonth()) : date.getMonth()
        ) + "-" + (
            date.getDate() < 10 ? ("0"+date.getDate()) : date.getDate()
        ) +"";

        const request = await fetch(
            "https://api.rawg.io/api/games?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa&dates="+getDate+","+nextYear+"",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataApi(data)
                setLoadingApi(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadDataApi()
    }, [])

    useEffect(() => {
        loadData()
    }, [])

    /*Loading page*/
    if(loading || loadingUpcoming){
        return (<div>Loading...</div>)
    }


    return (
        <>
            <Box sx={{backgroundColor: darkMode ? '#13151E' : "#F09D30", width: auto, height: auto }}>
                <Paper elevation={3} sx={{backgroundColor: darkMode ? '#1A1D28' : '#C37F25', height: 90, paddingX: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                        <Grid item xs={9.5}>
                            <Typography variant="h4" sx={{color:  '#FFFFFF', fontWeight: "bold"}}>Sustraplay Library</Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                            {/* <TextField onChange={(e) => setSearchGame(e.target.value)} onKeyPress={handleKeyPress} id="outlined-basic" placeholder="Search" variant="outlined" sx={{backgroundColor: '#FFFFFF', borderRadius: 2, width: 384}}/> */}
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
                            <Box sx={{backgroundColor: darkMode ? '#232738' : '#B9602E', height: 600, maxWidth: 850, marginLeft: 30, borderRadius: 3}}>
                                <Box sx={{backgroundColor: darkMode ? '#272E47' : 'D67138', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
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
                                {
                                    dataApi.results.slice(0, 9).map((data, index) => <Game_Component darkMode={darkMode} id={data.id} key={index} />)
                                }
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{backgroundColor: darkMode ? '#232738' : '#B9602E', height: 600, width: 600, marginRight: 0, borderRadius: 3}}>
                            <Box sx={{backgroundColor: darkMode ? '#272E47' : '#D67138', height: 40, paddingTop: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                                <Grid container>
                                    <Typography sx={{color: "#FFFFFF", textAlign: 'center'}} paddingX={16.5}>Upcoming Games</Typography>
                                </Grid>
                            </Box>
                            {/*Upcoming Games*/}
                            {
                                upcoming.results.slice(0, 4).map((data, index) => <NewReleasedComponent darkMode={darkMode} dataApi={data} key={index}/>)
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={imageSource} style={{height: 100}} onClick={toggleDarkMode}/>
                    </Grid>
                </Grid>
                
            </Box>
        </>
    )
}

export default Dashboard;