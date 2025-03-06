import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';

// function ImgIn() {



// }

function ImgIn() {
  const [file, setFile] = useState();
  const navigate = useNavigate();

//   const handleChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFile(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

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
    <div className="imgUploadComponent">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      {file && <img src={file} alt="Uploaded" style={{ width: "200px", height: "200px", objectFit: "cover" }} />}
      <button onClick={handleNav} disabled={!file}>Check</button>
    </div>
  );
}

export default ImgIn;