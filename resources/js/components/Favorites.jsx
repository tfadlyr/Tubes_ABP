import React, { useEffect } from "react";
import { Box, Typography, TextField, Grid, Paper, Stack } from '@mui/material'
import { useState } from "react";
import { auto } from "@popperjs/core";
import LightMode from "../../../public/Light_Mode.png";
import DarkMode from "../../../public/Dark_Mode.png";
import Game_Component from "./Game_Component";

import { usePage } from '@inertiajs/inertia-react';
import Loading from "./Loading";
import InitGameFav from "./InitGameFav";

const Favorites = () => {
    const { auth } = usePage().props;
    const keyAuth = "un5uh3r9jrx2702cnegws69bm5k1fi";

    const [darkMode, setDarkMode] = useState(true);
    const [imageSource, setImageSource] = useState(DarkMode);

    const[data, setData] = useState([]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      setImageSource(darkMode ? LightMode : DarkMode);
    };

    const [dataFav, setDataFav] = useState(null)
    const [loadFav, setLoadFav] = useState(true)

    async function getDataFav(){
        const response = await fetch(
            "/showGameFav/" + auth.user.id,
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataFav(data)
                setLoadFav(false)
            }).catch(err => console.log(err))
    }

    useEffect(()=>{
        getDataFav()
    }, [])

    if(loadFav){
        return (<Loading/>)
    }

    return (
        <>
            <InitGameFav dataFav={dataFav}/>
        </>
    )
}

export default Favorites;