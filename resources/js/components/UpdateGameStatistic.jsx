import { Box, Button, Card, CardContent, Grid, Popover, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';

export default function UpdateGameStatistic({idGame, idPeak, peakPlayer}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [peak, setPeak] = useState('');
  const [date, setDate] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const postDelete = async(e) => {
    e.preventDefault();
    
    Inertia.get('/deleteStats/'+idGame+'/'+idPeak+'');
  } 

  const postUpdate = async(e) => {
    e.preventDefault();
    
    Inertia.get('/updateStats/'+idGame+'/'+idPeak+'/'+date+'/'+peak);
  } 

  const open = Boolean(anchorEl);
  const id = open ? 'login-popover' : undefined;

    // Calculate the center position of the screen
    const centerTop = (window.innerHeight - 400) / 2; // Subtracting the height of the popover
    const centerLeft = (window.innerWidth - 440) / 2; // Subtracting the width of the popover

  return (
    <>
      <Button onClick={handleClick} variant="contained" sx={{width: 150, height: 25, fontSize: 10}}>Update or Delete</Button>
      <div style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% opacity black
                zIndex: open ? 999 : -1, // Show overlay only when open
                opacity: open ? 1 : 0, // Full opacity when open, hidden otherwise
                transition: 'opacity 0.5s ease', // Smooth transition effect
            }}></div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: centerTop, left: centerLeft }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // 50% opacity white
            borderRadius: 8,
            height: 340,
            width: 401
          },
        }}
      >
        <Card>
          <CardContent>
              <Box sx={{height: 300, width: 368, backgroundColor: "#5972CA", padding: 4, borderRadius: 4}}>
                  <Stack justifyContent='center' alignItems='center' spacing={2}>
                      <Typography variant="h5" sx={{color: "#FFFFFF"}}>Update Game Statistic</Typography> 
                      <TextField label="Date" onChange={(e) => {setDate(e.target.value)}}></TextField>
                      <TextField label="Peak" value={peakPlayer} onChange={(e) => {setPeak(e.target.value)}}></TextField>
                      <Grid sx={{display: 'flex', gap: 1}}>
                        <Button variant="contained" onClick={postUpdate} sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Update</Button>
                        <Button variant="contained" onClick={postDelete} sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Delete</Button>
                      </Grid>
                  </Stack>
              </Box>
          </CardContent>
        </Card>
      </Popover>
    </>
  );
}
