import React from "react";

const Update = () => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("Seçilen Dosya:", selectedFile.name); 
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dosya Seçiniz</h2>
      <input 
        type="file" 
        accept=".txt" 
        onChange={handleFileChange} 
        style={{ display: 'none' }}
        id="file-upload" 
      />
      <label htmlFor="file-upload" style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}>
        Dosya Seç
      </label>
    </div>
  );
};

export default Update;
