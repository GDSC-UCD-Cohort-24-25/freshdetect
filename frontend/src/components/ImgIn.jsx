import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ImgIn.css'; // Import the new CSS file

function ImgIn() {
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
    <div className="app-container">
      <h1 className="title">Meat Freshness Classification</h1>
      
      <form className="upload-form" onSubmit={handleSubmit}>
        <input 
          type="file" 
          className="file-input" 
          onChange={handleFileChange} 
        />
        <button type="submit" className="submit-btn">Classify</button>
      </form>

      {imageUrl && (
        <div className="image-preview">
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
        </div>
      )}

      {result && <h2 className="result">Result: {result}</h2>}
    </div>
  );
}

export default ImgIn;
