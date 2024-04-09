import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import Sign_up from "./Sign_up";
import Login from "./Login";
import Game_Componenet from "./Game_Component";


const Dashboard = () => {
    

    return (
        <>
            <Box sx={{backgroundColor: '#13151E', width: '100vw', height: '100vh' }}>
                <Paper elevation={3} sx={{backgroundColor: '#1A1D28', height: 90, paddingX: 3 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{padding: 2}}>
                        <Grid item xs={9.5}>
                            <Typography variant="h4" sx={{color: '#FFFFFF'}}>Sustraplay Library</Typography>
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
                            <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>Login</Typography>
                            <Typography sx={{color: "#FFFFFF"}}>or</Typography>
                            <Typography sx={{color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>Sign up</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard;