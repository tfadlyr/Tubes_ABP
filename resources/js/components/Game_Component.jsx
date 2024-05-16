import React from "react";
import { Box, Grid, Stack, Typography, Popover } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Game_Component = ({ darkMode, pic, name, peak, current}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    return (
        <>
            <Box
                sx={{
                backgroundColor: darkMode ? '#232738' : '#B9602E',
                height: 50,
                maxWidth: 850,
                marginY: 1,
                '&:hover': { cursor: 'pointer' }
                }}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
            >
                <Link to={`/game/`}>
                    <Stack direction='row' >
                        <Grid container sx={{marginX: 2, marginY: 1}}>
                            <Grid item xs={7}>
                                <Stack direction='row' alignItems='center' spacing={2}>
                                    <img src={pic}/>
                                    <Typography sx={{color: "#FFFFFF"}}>{name}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>{peak}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>{current}</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Link>
            </Box>
            <Popover
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'center',
                horizontal: 'center'
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Box sx={{ p: 2, borderRadius: 5, width: 322, height: 388 }}>
                    <Stack spacing={0.5}>
                        <img src={pic} alt={`${name} thumbnail`} width="285" height="162" />
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            Developer: 
                        </Typography>
                        <Typography variant="body2">
                            Release date:
                        </Typography>
                        <Typography variant="body2">
                            Peak player:
                        </Typography>
                        <Typography variant="body2">
                            Supported systems:
                        </Typography>
                        <Typography variant="body2">
                            User rating:
                        </Typography>
                    </Stack>
                </Box>
            </Popover>
        </>
    )
}

export default Game_Component;