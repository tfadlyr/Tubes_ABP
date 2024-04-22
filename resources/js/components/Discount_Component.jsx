import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Discount_Component = ({ pic, name, original, discounted, end_date}) => {
    return (
        <>
            <Box sx={{backgroundColor: '#232738', height: 50, width: 500}}>
                <Stack direction='row' >
                    <Grid container>
                        <Grid item xs={6}>
                            <Stack direction='row'>
                                <img src={pic}/>
                                <Typography>{name}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>{original}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>{discounted}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>{end_date}</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}

export default Discount_Component;