import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import Game from './Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Example() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/game" element={<Game/>} />
                </Routes>
            </Router>
        </>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
