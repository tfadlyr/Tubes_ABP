import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Game_Component = ({ id, peak, current}) => {
    /*API*/
    const [data, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    async function loadData(){
        const request = await fetch(
            "https://api.rawg.io/api/games/"+id+"?key=d7ce6c6f63ef4dfab77dc0bbc3cf21aa",
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

    const directTo = "/game/"+id;

    return (
        <>
            <Box sx={{backgroundColor: '#232738', height: 50, maxWidth: 850, marginY: 1, '&:hover': { cursor: 'pointer'}}}>
                {
                    <a href={directTo}>
                        <Stack direction='row' >
                            <Grid container sx={{marginX: 2, marginY: 1}}>
                                <Grid item xs={7}>
                                    <Stack direction='row' alignItems='center' spacing={2}>
                                        <img height={44} width={94} src={data.background_image}/>
                                        <Typography sx={{color: "#FFFFFF"}}>{data.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>{peak}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>{current}</Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </a>
                }
            </Box>
        </>
    )
}

export default Game_Component;