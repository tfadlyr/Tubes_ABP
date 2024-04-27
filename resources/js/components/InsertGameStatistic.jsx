import { Box, Button, Card, CardContent, Popover, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';

export default function InsertGameStatistic({idGame, peakPlayer}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [peak, setPeak] = useState('');
  const [date, setDate] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const postInsert = async(e) => {
    e.preventDefault();
    
    Inertia.get('/insertStats/'+idGame+'/'+date+'/'+peak+'');
  } 

  const open = Boolean(anchorEl);
  const id = open ? 'login-popover' : undefined;

    // Calculate the center position of the screen
    const centerTop = (window.innerHeight - 400) / 2; // Subtracting the height of the popover
    const centerLeft = (window.innerWidth - 440) / 2; // Subtracting the width of the popover
    

  return (
    <>
      <Button onClick={handleClick} variant="contained">Insert</Button>
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
                      <Typography variant="h5" sx={{color: "#FFFFFF"}}>Insert Game Statistic</Typography> 
                      <TextField label="Date" onChange={(e) => {setDate(e.target.value)}}></TextField>
                      <TextField label="Peak" onChange={(e) => {setPeak(e.target.value)}}></TextField>
                      <Button variant="contained" onClick={postInsert} sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Insert</Button>
                  </Stack>
              </Box>
          </CardContent>
        </Card>
      </Popover>
    </>
  );
}
