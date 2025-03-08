import React, { useState, useEffect }from 'react';
import ImgIn from './components/ImgIn.jsx';
import Result from './components/Result.jsx';
import "./styles/App.css";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { GiChickenOven } from "react-icons/gi";


function Header(){
    return (
        <header className="header">
            <GiChickenOven className="icon" />
            <h1 style={{marginLeft: "12px" ,marginTop: "10px" ,fontFamily:"Pacifico" }}>meetchecker</h1>
        </header>
    );
}


function App() {

    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element = {<ImgIn />} />
                <Route path="/result" element = {<Result />} />
            </Routes>
        </BrowserRouter>
        
        </>
    );
}

export default App;