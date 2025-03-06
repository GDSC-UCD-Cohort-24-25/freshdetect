// import React, { useState, useEffect } from 'react';
// // import ImgIn from './components/ImgIn';

// function Result(){
//     // const location = useLocation();
//     // const{ image, result } = location.state || {};
//     // const navigate = useNavigate();
//     // const handleNav = () =>{
//     //     navigate("/");
//     // }
//     const location = useLocation();
//     const navigate = useNavigate();
//     const image = location.state?.image;


//     return(
//     <>
//     <h2>result</h2>
//     <div className = "resultCard"
//         style = {{
//             backgroundColor: "gray"
//         }}
//     >
//         pop
//     </div>
//     {image ? (
//         <img src={image} alt="Uploaded" style={{ width: "300px", height: "300px", objectFit: "cover" }} />
//       ) : (
//         <p>No image uploaded.</p>
//       )}

//     </> e
//     );
// }

// export default Result;

import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  return (
    <div 
        className="resultComponent"
        style={{
            textAlign: "center",
            backgroundColor: ""
        }}
    >
        <h2>TEST RESULT</h2>
        <div className="imageCard">
            {image ? (
                <img src={image} alt="Uploaded" style={{ width: "300px", height: "300px", objectFit: "cover" }} />
            ) : (
                <p>No image uploaded.</p>
            )}
        </div>
        <div className="resultCard"
            style={{
                textAlign: "center"
            }}
        >
            <p>result</p>
            <p><b>TEST_RESULT_HERE</b></p>

        </div>

      
        <button 
            onClick={() => navigate("/")}
            style={{
                width:"80px",
                height:"80px",
                backgroundColor:"#D9D9D9",
                border:"none",
                borderRadius: "50px"
                
            }}
        >
            Go Back
        </button>
    </div>
  );
}

export default Result;
