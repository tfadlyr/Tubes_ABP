import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Grid, Paper, Stack, colors, Divider } from '@mui/material'
import '../../css/app.css';
import { auto } from "@popperjs/core";
import { Link, useParams } from "react-router-dom";

const Game =() => {
    /*API*/
    const [data, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)
    const idGame = useParams().idGame;

    async function loadData(){
        const request = await fetch(
            "https://api.rawg.io/api/games/"+idGame+"?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa",
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

    if(loading){
        return (<div>Loading...</div>)
    }

    return (
        <>
            <Box sx={{backgroundColor: '#13151E', width: '100vw', height: 90 }}>
                <Paper elevation={3} sx={{backgroundColor: '#1A1D28', height: 90, paddingX: 3 }}>
                        <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                            <Grid item xs={9.5}>
                                <Link to={`/`}>
                                    <Typography variant="h4" sx={{color: '#FFFFFF'}}>Sustraplay Library</Typography>
                                </Link>
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
                                <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' }}}>Login</Typography>
                                <Typography sx={{color: "#FFFFFF"}}>or</Typography>
                                <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' }}}>Sign up</Typography>
                            </Stack>
                        </Grid>
                    </Grid>

            </Box>
            <Box sx={{backgroundColor: 'var(--main-background-color)', maxHeight: auto, width: '100vw', padding: 10, g: 10 }}>
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
                        <Grid sx={{color: 'var(--main-text-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">In-game</Typography>
                                <Typography variant="h6">809,142</Typography>
                            </Grid>
                            <Typography sx={{fontSize: 32}}>|</Typography>
                            <Grid sx={{textAlign: 'center'}}>
                                <Typography variant="h6">Peak players</Typography>
                                <Typography variant="h6">1,121,309</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack sx={{color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', justifyContent: 'space-between', padding: 0.5}}>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Developer</Typography>
                                <Grid className="dataTypography">
                                    {data.developers.map(dev => <Typography variant="h6" key={dev.id}>{dev.name}</Typography>)}
                                </Grid>
                            </Grid>
                            <Grid item className="var2GamePage">
                                <Typography variant="h6">Publisher</Typography>
                                <Grid className="dataTypography">
                                    {data.publishers.map(pub => <Typography variant="h6" key={pub.id}>{pub.name}</Typography>)}
                                </Grid>
                            </Grid>
                            <Grid item className="var1GamePage">
                                <Typography variant="h6">Supported Systems</Typography>
                                <Grid className="dataTypography">
                                    {data.parent_platforms.map(plat => <Typography variant="h6" key={plat.platform.id}>{plat.platform.name}</Typography>)}
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
                                    {data.genres.map(genre => <Typography variant="h6" key={genre.id}>{genre.name}</Typography>)}
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
                        <Stack direction='row' sx={{gap: 1}}>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Year</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Month</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Peak</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>|</Typography>
                            <Typography sx={{color: 'var(--main-text-color)'}}>Gain</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-around', color: 'var(--main-text-color)', marginTop: 4}}>
                        <Grid>
                            <Grid sx={{display: 'flex', gap: 5.5, marginBottom: 2}}>
                                <Typography>Year</Typography>
                                <Typography>Month</Typography>
                            </Grid>
                            <Grid sx={{display: 'flex', gap: 5}}>
                                <Typography>2024</Typography>
                                <Stack sx={{gap: 1, marginBottom: 2}}>
                                    <Typography>April</Typography>
                                    <Typography>March</Typography>
                                    <Typography>February</Typography>
                                    <Typography>January</Typography>
                                </Stack>
                            </Grid>
                            <Grid sx={{display: 'flex', gap: 5}}>
                                <Typography>2023</Typography>
                                <Stack sx={{gap: 1, marginBottom: 2}}>
                                    <Typography>December</Typography>
                                    <Typography>November</Typography>
                                    <Typography>October</Typography>
                                    <Typography>September</Typography>
                                    <Typography>August</Typography>
                                    <Typography>July</Typography>
                                    <Typography>June</Typography>
                                    <Typography>May</Typography>
                                    <Typography>April</Typography>
                                    <Typography>March</Typography>
                                    <Typography>February</Typography>
                                    <Typography>January</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid sx={{display: 'flex', gap: 16}}>
                            <Stack sx={{gap: 1}}>
                                <Typography>Peak</Typography>
                                <Typography>809,142</Typography>
                                <Typography>701,954</Typography>
                                <Typography>1,121,309</Typography>
                                <Typography>991,911</Typography>
                            </Stack>
                            <Stack sx={{gap: 1}}>
                                <Typography>Gain</Typography>
                                <Typography>+[...]%</Typography>
                                <Typography>=-[...]%</Typography>
                                <Typography>+[...]%</Typography>
                                <Typography>+/-[...]%</Typography>
                            </Stack>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Game;
