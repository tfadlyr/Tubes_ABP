import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const NewReleasedComponent = ({ darkMode, dataApi}) => {

    return (
        <>
            <Box sx={{backgroundColor: darkMode ? '#232738' : '#38623B', height: 50, maxWidth: 850, marginY: 1, '&:hover': { cursor: 'pointer'}}}>
                <Stack direction='row' >
                    <Grid container sx={{marginX: 2, marginY: 1}}>
                        <Grid item xs={7}>
                            <Stack direction='row' alignItems='center' spacing={2}>
                                <img height={44} width={94} src={dataApi.background_image}/>                                       
                                <Typography sx={{color: "#FFFFFF"}}>{dataApi.name}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                {dataApi.released}
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}

export default NewReleasedComponent;