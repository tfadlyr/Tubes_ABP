import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography, Popover } from "@mui/material";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import CardCekStat from "./CardCekStat";

const SearchGame_Component = ({dataGame, cekStat}) => {
    const { auth } = usePage().props;

    const [isVisible, setIsVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    const open = Boolean(anchorEl);
    
    return (
        <>
            <Box
                sx={{
                height: 50,
                maxWidth: 850,
                marginTop: 5,
                marginBottom: 20,
                '&:hover': { cursor: 'pointer' }
                }}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
            >
                {
                    cekStat ?
                    <InertiaLink href={("/game/"+dataGame.id)}>
                        <Grid container alignItems='center'>
                            <Grid item xs={3.5}>
                                <Stack alignItems="center">
                                    {
                                        dataGame.cover != null 
                                        ? <img src={dataGame.cover.url} style={{width: 150 }}/>
                                        : <img src="https://via.placeholder.com/150x150?text=Image+Not+Found" style={{width: 150}}/>
                                    }
                                </Stack>
                            </Grid>
                            <Grid item xs={8.5}>
                                <Stack sx={{paddingTop: 2}}>
                                    <Typography variant="h6" sx={{color: '#FFFFFF'}}>
                                        {dataGame.name}
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </InertiaLink> : 
                    <Box onClick={auth.user ? auth.user.role == "admin" && toggleVisibility : null}>
                        <Grid container alignItems='center'>
                            <Grid item xs={3.5}>
                                <Stack alignItems="center">
                                    {
                                        dataGame.cover != null 
                                        ? <img src={dataGame.cover.url} style={{width: 150 }}/>
                                        : <img src="https://via.placeholder.com/150x150?text=Image+Not+Found" style={{width: 150}}/>
                                    }
                                </Stack>
                            </Grid>
                            <Grid item xs={8.5}>
                                <Stack sx={{paddingTop: 2}}>
                                    <Typography variant="h6" sx={{color: '#FFFFFF'}}>
                                        {dataGame.name}
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
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
                            {
                                dataGame.cover != null 
                                ? <img src={dataGame.cover.url} style={{width: 142}}/>
                                : <img src="https://via.placeholder.com/142x142?text=Image+Not+Found" style={{width: 142}}/>
                            }
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                            {dataGame.name}
                        </Typography>
                        <Typography variant="body2">
                            User rating: {
                                dataGame.rating != null
                                ? (dataGame.rating).toFixed(2)
                                : "Not rated yet / Not Found"
                            }
                        </Typography>
                        <Typography variant="body2">
                            Genres: {
                                dataGame.genres != null ?
                                dataGame.genres.map(
                                    (data, index) => {
                                        if(index === dataGame.genres.length - 1){
                                            return data.name
                                        }
                                        return (data.name+", ")
                                    }
                                )
                                : "Not Found"
                            }
                        </Typography>
                        <Typography variant="body2">
                            Platforms: {
                                dataGame.platforms != null ?
                                dataGame.platforms.map(
                                    (data, index) => {
                                        if(index === dataGame.platforms.length - 1){
                                            return data.name
                                        }
                                        return (data.name+", ")
                                    }
                                ) : "Not Found"
                            }
                        </Typography>
                        <Typography variant="body2">
                            Release date: {dataGame.realase_date != null ? dataGame.release_dates[0].human : "Not Found"}
                        </Typography>
                    </Stack>
                </Box>
            </Popover>
        </>
    )
}

export default SearchGame_Component;
