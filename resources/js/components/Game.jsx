import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, TextField, Grid, Paper, Stack, colors, Divider, Button } from '@mui/material'
import '../../css/app.css';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';
import { auto } from "@popperjs/core";

import Sign_up from "./Sign_up";
import Login from "./Login";
import UpdateInGame from "./UpdateInGame";
import UpdatePeakPlayer from "./UpdatePeakPlayer";
import UpdateGameStatistic from "./UpdateGameStatistic";
import InsertGameStatistic from "./InsertGameStatistic";

const Game =({dataStat}) => {
    const { auth } = usePage().props;

    /*API*/
    const [data, setProductData] = useState(null)
    const [dataDB, setDataDB] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingDB, setLoadingDB] = useState(true)

    async function loadDataApi(){
        const request = await fetch(
            "https://api.rawg.io/api/games/"+dataStat.idGame+"?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setProductData(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    async function loadDataDB(){
        const request = await fetch(
            "/gamePeak/"+dataStat.idGame+"",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataDB(data)
                setLoadingDB(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadDataApi()
    }, [])

    useEffect(() => {
        loadDataDB()
    }, [])

    if(loading || loadingDB){
        return (<div>Loading...</div>)
    }

    return (
        <>
            <Box sx={{backgroundColor: '#13151E', width: auto, height: 90 }}>
                <Paper elevation={3} sx={{backgroundColor: '#1A1D28', height: 90, paddingX: 3 }}>
                        <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                            <Grid item xs={9.5}>
                                {<a href="/"><Typography variant="h4" sx={{color: '#FFFFFF'}}>Sustraplay Library</Typography></a>}
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
                    </Grid>

            </Box>
            <Box sx={{backgroundColor: 'var(--main-background-color)', maxHeight: auto, width: auto, padding: 10, g: 10 }}>
                <Stack direction="column" justifyContent="flex-start" spacing={1}>
                    <Typography sx={{color: "var(--main-text-color)", fontSize: 48, fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>{data.name}</Typography>
                </Stack>
                <Grid container sx={{display: 'flex', justifyContent:'space-between', paddingTop: 10}} spacing={10}>
                    <Grid item xs={2.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <img src={data.background_image} height={300} width={300}/>
                        <Grid sx={{color: 'var(--main-text-color)', textAlign: 'center', }}>
                            <Typography variant="h6">Users rating:</Typography>
                            <Typography variant="h6">{data.rating} / {data.rating_top}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Grid sx={{color: 'var(--main-text-color)', marginBottom: 5}}>
                            <Typography variant="h3">Game Description </Typography>
                            <Typography variant="h6" sx={{ overflow: 'auto', maxHeight: 250 }}>
                                {data.description_raw}
                            </Typography>

                        </Grid>
                        <Grid sx={{color: 'var(--main-text-color)', display: 'flex', justifyContent: 'center', gap: 10, }}>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">In-game</Typography>
                                <Typography variant="h6">
                                {dataDB.response == 200 ? dataDB.dataPeak[0].in_game_peak : 0}
                                </Typography>
                                {auth.user.role == 'admin' && <UpdateInGame idGame={dataStat.idGame}/>}
                            </Grid>
                            <Typography sx={{fontSize: 32}}>|</Typography>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">Peak players</Typography>
                                <Typography variant="h6">
                                    {dataDB.response == 200 ? dataDB.dataPeak[0].peak_player : 0}
                                </Typography>
                                {auth.user.role == 'admin' && <UpdatePeakPlayer idGame={dataStat.idGame}/>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack sx={{color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', justifyContent: 'space-between', padding: 0.5}}>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Developer</Typography>
                                <Grid className="dataTypography">
                                    {
                                        data.developers.map((dev, index) =>{
                                            if(index === data.developers.length - 1){
                                                return <Typography variant="h6" key={dev.id}>{dev.name}</Typography>
                                            }
                                            return <Typography variant="h6" key={dev.id}>{dev.name}, </Typography>
                                        })
                                    }
                                </Grid>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Publisher</Typography>
                                <Grid className="dataTypography">
                                    {
                                        data.publishers.map((pub, index) => {
                                            if(index === data.publishers.length - 1){
                                                return <Typography variant="h6" key={pub.id}>{pub.name}</Typography>
                                            }
                                            return <Typography variant="h6" key={pub.id}>{pub.name}, </Typography>
                                        })    
                                    }
                                </Grid>
                            </Grid>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Supported Systems</Typography>
                                <Grid className="dataTypography">
                                    {
                                        data.parent_platforms.map((plat, index) => {
                                            if(index === data.parent_platforms.length - 1){
                                                return <Typography variant="h6" key={plat.platform.id}>{plat.platform.name}</Typography>
                                            }
                                            return <Typography variant="h6" key={plat.platform.id}>{plat.platform.name}, </Typography>
                                        })
                                    }
                                </Grid>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Release date</Typography>
                                <Grid className="dataTypography">
                                    <Typography variant="h6">{data.released}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Game Genre</Typography>
                                <Grid className="dataTypography">
                                    {
                                        data.genres.map((genre, index) => {
                                            if(index === data.genres.length - 1){
                                                return <Typography variant="h6" key={genre.id}>{genre.name}</Typography>
                                            }
                                            return <Typography variant="h6" key={genre.id}>{genre.name}, </Typography>
                                        })
                                    }
                                </Grid>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Age rating</Typography>
                                <Grid className="dataTypography">
                                    <Typography variant="h6">{data.esrb_rating.name}</Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid sx={{paddingTop: 10}}>
                    <Box sx={{border: '1px solid white', borderRadius: 10, paddingX: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        <Typography sx={{fontSize: 32, color: 'var(--main-text-color)'}}>Game Statistic</Typography>
                        <Grid sx={{display: 'flex',  alignItems: 'center', gap: 5}}>
                            <Stack direction='row' sx={{gap: 1}}>
                                <Typography sx={{color: 'var(--main-text-color)'}}>Year</Typography>
                                <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                                <Typography sx={{color: 'var(--main-text-color)'}}>Month</Typography>
                                <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                                <Typography sx={{color: 'var(--main-text-color)'}}>Peak</Typography>
                                <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                                <Typography sx={{color: 'var(--main-text-color)'}}>Gain</Typography>
                            </Stack>
                            {auth.user.role == 'admin' && <InsertGameStatistic idGame={dataStat.idGame} peakPlayer={dataStat.yearsStat[0].peaks[0].peakPlayer}/>}
                        </Grid>
                    </Box>
                    <Box sx={{display: 'flex', alignContent: 'center', marginTop: 4}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TableContainer>
                                    <Table sx={{backgroundColor: 'var(--main-background-color)'}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{color: 'var(--main-text-color)'}}>Year</TableCell>
                                                <TableCell sx={{color: 'var(--main-text-color)'}}>Month</TableCell>
                                                <TableCell sx={{color: 'var(--main-text-color)'}}>Peak</TableCell>
                                                <TableCell sx={{color: 'var(--main-text-color)'}}>Gain</TableCell>
                                                {auth.user.role == 'admin' && <TableCell sx={{color: 'var(--main-text-color)'}}>Update or Delete</TableCell>}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                dataStat.yearsStat.map(
                                                    (stats, indexStat) => {
                                                        return (
                                                            <TableRow>
                                                                <TableCell sx={{color: 'var(--main-text-color)'}} key={indexStat}>{stats.year}</TableCell>
                                                                <TableCell>
                                                                    <Stack spacing={1}>
                                                                        {
                                                                            stats.peaks.map(
                                                                                (peak, indexPeak) => {
                                                                                    return <Typography sx={{color: 'var(--main-text-color)'}} key={indexPeak}>{peak.month}</Typography>
                                                                                }
                                                                            )
                                                                        }
                                                                    </Stack>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Stack spacing={1}>
                                                                        {
                                                                            stats.peaks.map(
                                                                                (peak, indexPeak) => {
                                                                                    return <Typography sx={{color: 'var(--main-text-color)'}} key={indexPeak}>{peak.peakPlayer}</Typography>
                                                                                }
                                                                            )
                                                                        }
                                                                    </Stack>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Stack spacing={1}>
                                                                        {
                                                                            stats.peaks.map(
                                                                                (peak, indexPeak) => {
                                                                                    return <Typography sx={{color: 'var(--main-text-color)'}} key={indexPeak}>{peak.gainPlayer}</Typography>
                                                                                }
                                                                            )
                                                                        }
                                                                    </Stack>
                                                                </TableCell>
                                                                {auth.user.role == 'admin' && (
                                                                    <TableCell>
                                                                        <Stack spacing={1}>
                                                                            {
                                                                                stats.peaks.map(
                                                                                    (peak, indexPeak) => {
                                                                                        return <UpdateGameStatistic 
                                                                                        key={indexPeak} 
                                                                                        idGame={dataStat.idGame} 
                                                                                        idPeak={peak.idPeak}
                                                                                        />
                                                                                    }
                                                                                )
                                                                            }
                                                                        </Stack>
                                                                    </TableCell>
                                                                )}
                                                            </TableRow>
                                                        )
                                                    }
                                                )
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Game;
