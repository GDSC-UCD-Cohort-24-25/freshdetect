// 

import { useLocation, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  return (
    <div 
        className="resultComponent"
        style={{
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            backgroundColor: "#FAF9F6",
            padding: "60px",
            borderRadius: "15px",
            display: "flex",
            boxShadow: "40px 40px 600px rgba(0, 0, 0, 0.8)" 
        }}
    >

        <div className="imageCard"
            style={{
                width: "420px", 
                height: "420px",
                backgroundColor: "white",
                display: "flex",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                marginBottom: "20px",
            }}
        >
            {image ? (
                <img src={image} alt="Uploaded" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
                <p>No image uploaded.</p>
            )}
        </div>

        <div className="resultCard"
            style={{
                width: "80%",
                maxWidth: "600px",
                textAlign: "center",               
                padding: "20px",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0px 10px 80px rgba(0, 0, 0, 0.2)"
            }}
        >
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Result</p>
            <p style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
            >
                TEST_RESULT_HERE
            </p>

            <button 
                onClick={() => navigate("/")}
                style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    borderRadius: "50%",
                    marginTop: "20px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FaCamera size="40" />
            </button>

        </div>
    </div>
  );
}

export default Result;
