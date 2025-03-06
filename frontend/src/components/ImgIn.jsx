import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';

function ImgIn() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/next', { state: { image: file } });
    }

    return (
    <>
    <div className = "imgUploadComponent">
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />

        {file && <img src={file} alt="Uploaded" />}

        <button onClick={handleNavigate}>check</button>
    </div>
    </>
    );
}

export default ImgIn;