import React, { useEffect, useState } from "react";
import '../../css/app.css';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';
import { auto } from "@popperjs/core";

import UpdateInGame from "./UpdateInGame";
import UpdatePeakPlayer from "./UpdatePeakPlayer";
import UpdateGameStatistic from "./UpdateGameStatistic";
import InsertGameStatistic from "./InsertGameStatistic";
import Loading from "./Loading.jsx";
import GameView from "./GameView.jsx";


const Game =({ dataStat }) => {
    const { auth } = usePage().props;

    /*API*/
    const keyAuth = "un5uh3r9jrx2702cnegws69bm5k1fi";

    const [data, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)

    async function loadDataApi(){
        const request = await fetch(
            "http://127.0.0.1:8000/https://api.igdb.com/v4/games",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Client-ID": "dssjkvlpsxeqevzscna95z2abuz7ij",
                    "Authorization": "Bearer " + keyAuth,
                },
                body: "fields name, cover.*, rating, release_dates.human, involved_companies.*, platforms.name, summary, videos.*, genres.name, age_ratings.*; sort rating desc; where id = "+dataStat.idGame+";"
            }
        )
        .then(request => request.json())
        .then((data) => {
            setProductData(data[0]),
            setLoading(false)
        })
    }

    const [dataPeak, setDataPeak] = useState(null);
    const [loadPeak, setLoadPeak] = useState(true);

    async function loadPeakGame(){
        const request = await fetch(
            "/searchPeak/"+dataStat.idGame,
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setDataPeak(data[0])
                setLoadPeak(false)
            }).catch(err => console.log(err))
    }

    const [favGame, setFavGame] = useState(null);
    const [loadFav, setLoadFav] = useState(true);

    async function getFavGame(){
        const response = await fetch(
            "/getFavorit/"+dataStat.idGame+"/"+auth.user.id,
            {headers: {'Accept': 'application/json'}})
            .then(request => request.json())
            .then((data) => {
                setFavGame(data)
                setLoadFav(false)
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        loadDataApi()
        loadPeakGame()
        if(auth.user != null){
            getFavGame()
        }else{
            setLoadFav(true)
        }
    }, [])

    if(loading || loadPeak || loadFav){
        return (<Loading/>)
    }

    return (
        <>
            <GameView data={data} dataPeak={dataPeak} dataStat={dataStat} dataFav={favGame}/>
        </>
    )
}

export default Game;
