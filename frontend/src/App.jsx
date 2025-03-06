import React, { useState, useEffect }from 'react';
import ImgIn from './components/ImgIn.jsx';
import Result from './components/Result.jsx';
// import ".styles/App.css"
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <>
        {/* <h1>Hello</h1>  */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<ImgIn />} />
                <Route path="/result" element = {<Result />} />
            </Routes>
        </BrowserRouter>

        {/* <div className = "AppContainer">
        <ImgIn/>
        </div> */}
        </>
    );
}

export default App;