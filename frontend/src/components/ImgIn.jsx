import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillPicture } from "react-icons/ai";

function ImgIn() {
  const [file, setFile] = useState();
  const navigate = useNavigate();

function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

  const handleNav = () => {
    if (file) {
      navigate("/result", { state: { image: file } });
    }
  };

  return (
    <div className="imgUploadComponent"
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

      <div style={{ position: "relative", textAlign: "center" }}>
        <input
          type="file"
          id="fileInput"
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <label
          htmlFor="fileInput"
          style={{
            display: "inline-block",
            backgroundColor: "#D9D9D9",
            color: "black",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            position: "relative",
            width: "420px",
            height: "420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
            {!file && <AiFillPicture size="40" />}
            {file && <img src={file} alt="Uploaded" style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px"
            }} />}
        </label>
      </div>

      <p style={{ fontSize: "28px", fontWeight: "bold" }}>Add Image</p>

      <button 
        onClick={handleNav} 
        disabled={!file}
        style = {{
          width: "80px",
          height: "80px",
          border: "none",
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
          color: "black",
          fontSize: "18px",
          marginTop: "60px", 
          marginBottom: "20px",
          fontWeight: "bold",
        }}
        onMouseEnter={(e) => {
          if (file) e.target.style.backgroundColor = "#BFBFBF"; // ホバー時の色
        }}
        onMouseLeave={(e) => {
          if (file) e.target.style.backgroundColor = "#D9D9D9"; // 元の色に戻す
        }}
      >
        Check
      </button>
    </div>
  );
}

export default ImgIn;