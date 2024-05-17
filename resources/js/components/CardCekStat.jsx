import { Box, Button, Card, CardContent, Popover, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';

export default function CardCekStat({idGame}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const postCreate = async(e) => {
    e.preventDefault();
    
    Inertia.put('/createStatistik/'+idGame+'');
  } 

  const open = true;
  const id = open ? 'login-popover' : undefined;

    // Calculate the center position of the screen
    const centerTop = (window.innerHeight - 600) / 2; // Subtracting the height of the popover
    const centerLeft = (window.innerWidth - 440) / 2; // Subtracting the width of the popover

  return (
    <>
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
            height: 300,
            width: 450
          },
        }}
      >
        <Card>
                    <CardContent>
                        <Box sx={{height: 260, width: 418, backgroundColor: "#5972CA", borderRadius: 4}}>
                              <Stack justifyContent='center' alignItems='center' spacing={2} paddingTop={6}>
                                  <Typography variant="h5" sx={{color: "#FFFFFF"}}>Tambahkan Statistik untuk Game ini?</Typography> 
                                  <Button onClick={postCreate} variant="contained" sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Iya</Button>
                                  <Button onClick={handleClose} variant="contained" sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Tidak</Button>
                              </Stack>
                        </Box>
                    </CardContent>
                </Card>
      </Popover>
    </>
  );
}
