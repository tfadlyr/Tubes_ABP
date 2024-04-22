import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Game_Componenet = ({ pic, name, peak, current}) => {
    return (
        <>
            <Box sx={{backgroundColor: '#232738', height: 50, maxWidth: 850, '&:hover': { cursor: 'pointer'}}}>
                <Stack direction='row' >
                    <Grid container>
                        <Grid item xs={7}>
                            <Stack direction='row'>
                                <img src={pic}/>
                                <Typography sx={{color: "#FFFFFF"}}>{name}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{color: "#FFFFFF"}}>{peak}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{color: "#FFFFFF"}}>{current}</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}

export default Game_Componenet;