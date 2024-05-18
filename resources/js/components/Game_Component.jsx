import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography, Popover } from "@mui/material";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import CardCekStat from "./CardCekStat";


const Game_Component = ({ darkMode, dataGame, dataPeak, cekStat }) => {
    const { auth } = usePage().props;

    const [isVisible, setIsVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const directTo = "/game/"+dataGame.id;

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
                {
                    cekStat ? 
                    <InertiaLink href={directTo}>
                        <Stack direction='row' >
                            <Grid container sx={{marginX: 2, marginY: 1}}>
                                <Grid item xs={7}>
                                    <Stack direction='row' alignItems='center' spacing={2}>
                                        <img height={44} width={94} src={dataGame.cover.url}/>
                                        <Typography sx={{color: "#FFFFFF"}}>{dataGame.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataPeak ? dataPeak.peak_player : 0}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataPeak ? dataPeak.in_game_peak : 0}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </InertiaLink> :
                    <Box onClick={auth.user ? auth.user.role == "admin" && toggleVisibility : null}>
                        <Stack direction='row' >
                            <Grid container sx={{marginX: 2, marginY: 1}}>
                                <Grid item xs={7}>
                                    <Stack direction='row' alignItems='center' spacing={2}>
                                    <img height={44} width={94} src={dataGame.cover.url}/>
                                        <Typography sx={{color: "#FFFFFF"}}>{dataGame.name}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataPeak ? dataPeak.peak_player : 0}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{color: "#FFFFFF" , textAlign: 'center'}}>
                                        {dataPeak ? dataPeak .in_game_peak : 0}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                        {
                            isVisible && (
                                <CardCekStat idGame={dataGame.id}/>
                            )
                        }
                    </Box>
                }
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
                        <img src={dataGame.cover.url} alt={`${name} thumbnail`} width="285" height="162" />
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                            {dataGame.name}
                        </Typography>
                        <Typography variant="body2">
                            User rating: {(dataGame.rating).toFixed(2)}
                        </Typography>
                        <Typography variant="body2">
                            Genres: {
                                dataGame.genres.map(
                                    (data, index) => {
                                        if(index === dataGame.genres.length - 1){
                                            return data.name
                                        }
                                        return (data.name+", ")
                                    }
                                )
                            }
                        </Typography>
                        <Typography variant="body2">
                            Platforms: {
                                dataGame.platforms.map(
                                    (data, index) => {
                                        if(index === dataGame.platforms.length - 1){
                                            return data.name
                                        }
                                        return (data.name+", ")
                                    }
                                )
                            }
                        </Typography>
                        <Typography variant="body2">
                            Release date: {dataGame.release_dates[0].human}
                        </Typography>
                    </Stack>
                </Box>
            </Popover>
        </>
    )
}

export default Game_Component;