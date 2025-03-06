import React, { useState, useEffect }from 'react';
import ImgIn from './components/ImgIn';

function ResultCard(){
    const location = useLocation();
    const{ image, result } = location.state || {};
    const navigate = useNavigate();
    const handleNav = () =>{
        navigate('/ImageIn');
    }

    return(
    <>
    <div className = "ResultCard" style={{position: "relative", height: "100vh"}}>
        <div className = "image" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: 1 }}>
            <img src = {image} alt = "Uploaded" style = {{ width: "100%", height: "60%", objectFit: 'cover'}} />
        </div>
        <div
            className = "result"
            style = {{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "50%",
                borderRadius: "40px 40px 0px 0px",
                backgroundcolor: "white",
                zIndex: 2,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className = "result-body" style = {{ padding: "10px", textAlign: "center",}}>
                <p style = {{fontSize: "20px", marginBottom: "5px", color: rgba(0, 0, 0, 0.70)}}>result</p>
                <p className="result-sentense" style = {{ fontsize: "48px", color: "black", marginBottom: "5px" }}>
                    {result}
                </p>
                <button 
                    onClick =  {handleNav}
                    style={{
                        padding: "12px 24px",
                        color: "black",
                        backgroundColor: "#D9D9D9",
                        boarderRadius: "50px",
                        fontSize: "18px",

                    }}
                >
                    back
                </button>
            </div>
        </div>
    </div>
    </>
    );
}

export default ResultCard;