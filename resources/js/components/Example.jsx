import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import Game from './Game';
import Loading from './Loading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';
import SignUp_page from "./SignUp_page"
import Login_page from './Login_page';
import Search_page from './Search_page'

function Example() {
    return (
        <>
            {/* <Router>
                <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/game" element={<Game/>} />
                </Routes>
            </Router> */}
            {/* <Loading/> */}
            {/* <Favorites/> */}
            {/* <SignUp_page/> */}
            {/* <Login_page/> */}
            <Search_page/>
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
