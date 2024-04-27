import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { InertiaLink } from "@inertiajs/inertia-react";
import CardCekStat from "./CardCekStat";


const Game_Component = ({ id }) => {
    /*API*/
    const [dataApi, setDataApi] = useState(null)
    const [dataDB, setDataDB] = useState(null)
    const [cekStat, setCekStat] = useState(null)
    const [loadingApi, setLoadingApi] = useState(true)
    const [loadingDB, setLoadingDB] = useState(true)
    const [loadingStat, setLoadingStat] = useState(true)

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

    async function loadDataApi(){
        const request = await fetch(
            "https://api.rawg.io/api/games/"+id+"?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataApi(data)
                setLoadingApi(false)
            })
            .catch(err => console.log(err))
    }

    async function loadDataDB(){
        const request = await fetch(
            "/gamePeak/"+id+"",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataDB(data)
                setLoadingDB(false)
            })
            .catch(err => console.log(err))
    }

    async function cekStatistik(){
        const request = await fetch(
            "/cekStatistik/"+id+"",
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setCekStat(data)
                setLoadingStat(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadDataApi()
    }, [])

    useEffect(() => {
        loadDataDB()
    }, [])

    useEffect(() => {
        cekStatistik()
    }, [])

    /*Loading page*/
    if(loadingApi || loadingDB || loadingStat){
        return (<div>Loading...</div>)
    }

    const directTo = "/game/"+id;

    return (
        <>
            <Box sx={{backgroundColor: '#232738', height: 50, maxWidth: 850, marginY: 1, '&:hover': { cursor: 'pointer'}}}>
                {
                    cekStat.response == 200 ? 
                    <InertiaLink href={directTo}>
                        <Stack direction='row' >
                            <Grid container sx={{marginX: 2, marginY: 1}}>
                                <Grid item xs={7}>
                                    <Stack direction='row' alignItems='center' spacing={2}>
                                        <img height={44} width={94} src={dataApi.background_image}/>
                                        <Typography sx={{color: "#FFFFFF"}}>{dataApi.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataDB.response == 200 ? dataDB.dataPeak[0].peak_player : 0}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataDB.response == 200 ? dataDB.dataPeak[0].in_game_peak : 0}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </InertiaLink> :
                    <Box onClick={toggleVisibility}>
                        <Stack direction='row' >
                            <Grid container sx={{marginX: 2, marginY: 1}}>
                                <Grid item xs={7}>
                                    <Stack direction='row' alignItems='center' spacing={2}>
                                        <img height={44} width={94} src={dataApi.background_image}/>
                                        <Typography sx={{color: "#FFFFFF"}}>{dataApi.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataDB.response == 200 ? dataDB.dataPeak[0].peak_player : 0}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataDB.response == 200 ? dataDB.dataPeak[0].in_game_peak : 0}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                        {
                            isVisible && (
                                <CardCekStat idGame={id}/>
                            )
                        }
                    </Box>
                }
            </Box>
        </>
    )
}

export default Game_Component;