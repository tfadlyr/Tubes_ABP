import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Game_Componenet = ({ pic, name, peak, current}) => {
    return (
        <>
            <Box sx={{backgroundColor: '#232738', height: 50, maxWidth: 850, marginY: 1, '&:hover': { cursor: 'pointer'}}}>
                <Stack direction='row' >
                    <Grid container sx={{marginX: 2, marginY: 1}}>
                        <Grid item xs={7}>
                            <Stack direction='row' alignItems='center' spacing={2}>
                                <img src={pic}/>
                                <Typography sx={{color: "#FFFFFF"}}>{name}</Typography>
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
            </Box>
        </>
    )
}

export default Game_Componenet;