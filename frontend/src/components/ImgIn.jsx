import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { FaCamera } from 'react-icons/fa'
import '../styles/ImgIn.css'

const ImgIn = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
        setImageUrl(URL.createObjectURL(selectedFile));
    }
    };
      
    const handleWrapperClick = () => {
      fileInputRef.current.click();
    };  

    useEffect(() => {
        return () => {
          if (imageUrl) {
            URL.revokeObjectURL(imageUrl);
          }
        };
      }, [imageUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await axios.post('http://127.0.0.1:5000/classify', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          setResult(response.data.class);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

  return (
    <>

    <div className="container">
        <div className="text text-center fs-1 mb-2">
            Upload Photo
        </div>

        <div className="image-wrapper-container mb-5">
            <div className="image-wrapper shadow-lg" onClick={handleWrapperClick}>
                {imageUrl ? (
                    <div className="image-preview">
                        <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
                        <div className="image-label text-center mt-2">Your photo</div>
                    </div>
                ) : (
                    <FaCamera className="camera-icon" />
                )}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>
        </div>


        <button className="btn m-auto" type="submit" onClick={handleSubmit}>
        <div className="svg-wrapper-1">
            <div className="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
            >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
        </div>
        <span>Classify</span>
        </button>
        
        {result && <h2 className="result">Result: {result}</h2>}

    </div>

    </>
  )
}

export default ImgIn
