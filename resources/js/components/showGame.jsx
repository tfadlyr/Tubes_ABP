import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';

function ShowGame() {
    return (
        <>
            <Game dataStat={dataStat}/>
        </>
    );
}

export default ShowGame;

if (document.getElementById('showGame')) {
    const Index = ReactDOM.createRoot(document.getElementById("showGame"));

    Index.render(
        <React.StrictMode>
            <ShowGame/>
        </React.StrictMode>
    )
}
