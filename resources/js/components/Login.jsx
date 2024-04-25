import { Box, Button, Card, CardContent, Popover, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Login() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'login-popover' : undefined;

    // Calculate the center position of the screen
    const centerTop = (window.innerHeight - 600) / 2; // Subtracting the height of the popover
    const centerLeft = (window.innerWidth - 440) / 2; // Subtracting the width of the popover

  return (
    <>
      <Typography onClick={handleClick} sx={{ color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' } }}>Login</Typography>
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
            height: 592,
            width: 401
          },
        }}
      >
        <Card>
                    <CardContent>
                        <Box sx={{height: 550, width: 368, backgroundColor: "#5972CA", padding: 4, borderRadius: 4}}>
                            <Stack justifyConstent='center' alignItems='center' spacing={2}>
                                <Typography variant="h4" sx={{color: "#FFFFFF"}}>Login</Typography> 
                                <Typography sx={{color: '#FFFFFF'}}>Welcome back, soldier.</Typography>
                                <TextField label="Username"></TextField>
                                <TextField label="Password" type="password" ></TextField>
                                <Button variant="contained" onClick={handleClose} sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Login</Button>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
      </Popover>
    </>
  );
}

