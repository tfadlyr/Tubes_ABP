import React from "react";
import { Box, Typography, TextField, Grid, Paper } from '@mui/material'


const Dashboard = () => {
    return (
        <>
            <Box sx={{backgroundColor: '#1E1E1E', width: '100vw', height: '100vh' }}>
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