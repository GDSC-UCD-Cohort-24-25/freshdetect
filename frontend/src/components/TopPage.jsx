import React, { useRef, useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import '../styles/TopPage.css'

const TopPage = () => {
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
      }
    };
  
    const handleWrapperClick = () => {
      fileInputRef.current.click();
    };  

  return (
    <>

    <div className="container">
        <div className="text text-center accent fs-1 mb-2">
            Upload Photo
        </div>

        <div className="image-wrapper mb-5 shadow-lg" onClick={handleWrapperClick}>
            {imageSrc ? (
                <img src={imageSrc} alt="Uploaded" className="uploaded-image" />
            ) : (
                <FaCamera className="camera-icon" />
            )}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
        </div>


        <button className="m-auto">
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
        


    </div>

    </>
  )
}

export default TopPage
