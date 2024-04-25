import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';

function showGame() {
    return (
        <>
            <Game/>
        </>
    );
}

export default showGame;

if (document.getElementById('showGame')) {
    const Index = ReactDOM.createRoot(document.getElementById("showGame"));

    Index.render(
        <React.StrictMode>
            <showGame/>
        </React.StrictMode>
    )
}
