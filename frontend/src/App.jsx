import React, { useState, useEffect } from 'react'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImgIn from './components/ImgIn'
import Navbar from './components/Navbar';
import Vanta from './components/Vanta';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer);
    }, [])

    if(loading){
        return <Loading />;
    }

    return (
        <>
        <Vanta />
        <Navbar />
            <div className="main-content">
            <ImgIn />
            </div>
        <Footer />   
        </>
    );
}

export default App;