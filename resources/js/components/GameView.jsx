import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, TextField, Grid, Paper, Stack, colors, Divider, Button } from '@mui/material'
import '../../css/app.css';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';
import { auto } from "@popperjs/core";

import UpdateInGame from "./UpdateInGame";
import UpdatePeakPlayer from "./UpdatePeakPlayer";
import UpdateGameStatistic from "./UpdateGameStatistic";
import InsertGameStatistic from "./InsertGameStatistic";
import Loading from "./Loading.jsx"

const GameView =({ dataStat, data, dataPeak }) => {
    const { auth } = usePage().props;
    var publisher = [];
    var developerer = [];

    data.involved_companies.map(
        (company) => {
            if(company.publisher){
                publisher.push(company)
            }else if(company.developer){
                developerer.push(company)
            }
        }
    )

    const keyAuth = "un5uh3r9jrx2702cnegws69bm5k1fi";

    const [dataPublish, setDataPublish] = useState(null)
    const [loadPublish, setLoadPublish] = useState(true)

    async function getDataPublish(){
        if(publisher.length != 0){
            var body = "fields name; where ";
            publisher.map(
                (data, index) => {
                    if(index === publisher.length - 1){
                        body += ("changed_company_id = " + data.company + ";")
                    }else{
                        body += ("changed_company_id = " + data.company + " | ")
                    }
                }
            )

            const response = await fetch(
                "http://127.0.0.1:8000/https://api.igdb.com/v4/companies",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Client-ID": "dssjkvlpsxeqevzscna95z2abuz7ij",
                        "Authorization": "Bearer " + keyAuth,
                    },
                    body: body
                }
            )
            .then(request => request.json())
            .then((data) => {
                setDataPublish(data),
                setLoadPublish(false)
            })
        }else{
            setLoadPublish(false)
        }
    }

    const [dataDev, setDataDev] = useState(null)
    const [loadDev, setLoadDev] = useState(true)

    async function getDataDev(){
        if(developerer.length != 0){
            var body = "fields name; where ";
            developerer.map(
                (data, index) => {
                    if(index === developerer.length - 1){
                        body += ("changed_company_id = " + data.company + ";")
                    }else{
                        body += ("changed_company_id = " + data.company + " | ")
                    }
                }
            )

            const response = await fetch(
                "http://127.0.0.1:8000/https://api.igdb.com/v4/companies",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Client-ID": "dssjkvlpsxeqevzscna95z2abuz7ij",
                        "Authorization": "Bearer " + keyAuth,
                    },
                    body: body
                }
            )
            .then(request => request.json())
            .then((data) => {
                setDataDev(data),
                setLoadDev(false)
            })
        }else{
            setLoadDev(false)
        }
    }

    useEffect(()=>{
        getDataPublish()
        getDataDev()
    }, [])

    if(loadDev || loadPublish){
        return (<Loading/>)
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
                                            <Typography sx={{color: "#FFFFFF"}}>or</Typography>
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
                            <img src={data.cover.url} height={300} width={300}/>
                            <Grid sx={{color: 'var(--main-text-color)', textAlign: 'center', }}>
                                <Typography variant="h6">Users rating:</Typography>
                                <Typography variant="h6">{(data.rating).toFixed(2)}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Grid sx={{color: 'var(--main-text-color)', marginBottom: 5}}>
                                <Typography variant="h3">Game Description </Typography>
                                <Typography variant="h6" sx={{ overflow: 'auto', maxHeight: 250 }}>
                                    {data.summary}
                                </Typography>

                            </Grid>
                            <Grid sx={{color: 'var(--main-text-color)', display: 'flex', justifyContent: 'center', gap: 10, }}>
                                <Grid sx={{textAlign: 'center'}}>
                                    <Typography variant="h6">In-game</Typography>
                                    <Typography variant="h6">
                                        {dataPeak ? dataPeak.in_game_peak : 0}
                                    </Typography>
                                    {auth.user ? auth.user.role == "admin" && <UpdateInGame idGame={dataStat.idGame}/> : null}
                                </Grid>
                                <Typography sx={{fontSize: 32}}>|</Typography>
                                <Grid sx={{textAlign: 'center'}}>
                                    <Typography variant="h6">Peak players</Typography>
                                    <Typography variant="h6">
                                        {dataPeak ? dataPeak.peak_player : 0}
                                    </Typography>
                                    {auth.user ? auth.user.role == "admin" && <UpdatePeakPlayer idGame={dataStat.idGame}/> : null}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Stack sx={{color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', justifyContent: 'space-between', padding: 0.5}}>
                                <Grid item className="var1GamePage">
                                    <Typography variant="h6">Developer</Typography>
                                    <Grid className="dataTypography">
                                        {
                                            dataDev ? dataDev.length != 0 ? dataDev.map(
                                                (dev, index) => {
                                                    if(index === dataDev.length - 1){
                                                        return <Typography variant="h6" key={dev.id}>{dev.name}</Typography>
                                                    }
                                                    return <Typography variant="h6" key={dev.id}>{dev.name}, </Typography>
                                                }
                                            ) : <Typography variant="h6">Not Found</Typography> : <Typography variant="h6">Not Found</Typography>
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item className="var2GamePage">
                                    <Typography variant="h6">Publisher</Typography>
                                    <Grid className="dataTypography">
                                        {
                                            dataPublish ? dataPublish.length != 0 ? dataPublish.map(
                                                (pub, index) => {
                                                    if(index === dataPublish.length - 1){
                                                        return <Typography variant="h6" key={pub.id}>{pub.name}</Typography>
                                                    }
                                                    return <Typography variant="h6" key={pub.id}>{pub.name}, </Typography>
                                                }
                                            ) : <Typography variant="h6">Not Found</Typography> : <Typography variant="h6">Not Found</Typography>
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item className="var1GamePage">
                                    <Typography variant="h6">Supported Systems</Typography>
                                    <Grid className="dataTypography">
                                        {
                                            data.platforms.map((plat, index) => {
                                                if(index === data.platforms.length - 1){
                                                    return <Typography variant="h6" key={plat.id}>{plat.name}</Typography>
                                                }
                                                return <Typography variant="h6" key={plat.id}>{plat.name}, </Typography>
                                            })
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item className="var2GamePage">
                                    <Typography variant="h6">Release date</Typography>
                                    <Grid className="dataTypography">
                                        <Typography variant="h6">{data.release_dates[0].human}</Typography>
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
                                        {
                                            data.age_ratings.map(
                                                (data, index)=>{
                                                    var age = data.rating
                                                    if(age === 1 || age === 2 || age === 7 ||age === 8 || age === 13 || age === 18 || age === 23 || age === 28 || age === 34){
                                                        return <Typography variant="h6" key={index}>E | Everyone</Typography>
                                                    }else if(age === 3 || age === 10 || age === 20 || age === 24 || age === 30 || age === 36){
                                                        return <Typography variant="h6" key={index}>T | Teen</Typography>
                                                    }else if(age === 4 || age === 11 || age === 15 || age === 21 || age === 25 || age === 31 || age === 36){
                                                        return <Typography variant="h6" key={index}>M | Mature</Typography>
                                                    }else if(age === 5 || age === 12 || age === 16 || age === 17 || age === 22 || age === 26 || age === 33 || age === 38){
                                                        return <Typography variant="h6" key={index}>AO | Adults Only</Typography>
                                                    }else{
                                                        return <Typography variant="h6" key={index}>RP | Rating Pending</Typography>
                                                    }
                                                }
                                            )
                                        }
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
                                {auth.user ? auth.user.role == "admin" && <InsertGameStatistic idGame={dataStat.idGame} peakPlayer={dataStat.yearsStat[0].peaks[0].peakPlayer}/> : null}
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
                                                    {auth.user ? auth.user.role == "admin" && <TableCell sx={{color: 'var(--main-text-color)'}}>Update or Delete</TableCell> : null}
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
                                                                    {
                                                                        auth.user ? 
                                                                        auth.user.role == "admin" && (
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
                                                                        ) 
                                                                        : null
                                                                    }
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


export default GameView;