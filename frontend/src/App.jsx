import React, { useState, useEffect } from 'react'
// import ImgIn from './components/ImgIn';
import TopPage from './components/TopPage'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Vanta from './components/vanta';
import Loading from './components/Loading';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000)
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
                    {/* <ImgIn/> */}
                    <TopPage />
                    </div>
                    
        </>
    );
}

export default App;