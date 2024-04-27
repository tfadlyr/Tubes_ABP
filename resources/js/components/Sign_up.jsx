import { Box, Button, Card, CardContent, Popover, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Sign_up() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { errors } = usePage().props;

    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const postRegister = async(e) => {
      e.preventDefault();
      
      Inertia.post(
        '/register', 
        {
          name: name,
          email: email,
          password: password,
          username: username,
          role: "user"
      });
    } 

    const open = Boolean(anchorEl);
    const id = open ? 'login-popover' : undefined;
  
      // Calculate the center position of the screen
      const centerTop = (window.innerHeight - 600) / 2; // Subtracting the height of the popover
      const centerLeft = (window.innerWidth - 440) / 2; // Subtracting the width of the popover
  
    return (
      <>
        <Typography onClick={handleClick} sx={{ color: "#FFFFFF", fontWeight: 'bold', '&:hover': { cursor: 'pointer', textDecoration: 'underline' } }}>Sign up</Typography>
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
                          <Box sx={{height: 550, width: 368, backgroundColor: "#5972CA", borderRadius: 4}}>
                              <form onSubmit={postRegister}>
                                <Stack justifyConstent='center' alignItems='center' spacing={2} paddingTop={3}>
                                    <Typography variant="h4" sx={{color: "#FFFFFF"}}>Sign up</Typography> 
                                    <Typography sx={{color: '#FFFFFF'}}>Let's get along, friend!</Typography>

                                    <TextField label="Name" onChange={(e) => setName(e.target.value)} size="small"></TextField>
                                    {
                                      errors.name && (
                                        <div className="alert alert-danger" style={{color: '#A30004'}}>{errors.name}</div>
                                      )
                                    }
                                    <TextField label="Email" onChange={(e) => setEmail(e.target.value)} size="small"></TextField>
                                    {
                                      errors.email && (
                                        <div className="alert alert-danger" style={{color: '#A30004'}}>{errors.email}</div>
                                      )
                                    }
                                    <TextField label="Username" onChange={(e) => setUsername(e.target.value)} size="small"></TextField>
                                    {
                                      errors.username && (
                                        <div className="alert alert-danger" style={{color: '#A30004'}}>{errors.username}</div>
                                      )
                                    }
                                    <TextField label="Password" onChange={(e) => setPassword(e.target.value)} type="password" size="small"></TextField>
                                    {
                                      errors.password && (
                                        <div className="alert alert-danger" style={{color: '#A30004'}}>{errors.password}</div>
                                      )
                                    }
                                    <Button type="submit" variant="contained" sx={{height: 34, width: 104, backgroundColor: '#D9D9D9', padding: 1}}>Sign up</Button>
                                </Stack>
                              </form>
                          </Box>
                      </CardContent>
                  </Card>
        </Popover>
      </>
    );
  }