import axios from "axios";
import React, { useState } from "react";

const Update = () => {
  const [file, setFile] = useState(null); 
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]); // Logs the selected file to the console
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Lütfen bir dosya seçin.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("File upload success:", response.data);
      setUploadSuccess(true);
    } catch (error) {
      console.error("File upload failed:", error);
      setUploadSuccess(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dosya Seçiniz</h2>

      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />

      <label
        htmlFor="file-upload"
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Dosya Seç
      </label>

      <button
        onClick={handleUpload}
        style={{
          display: "block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "20px auto", // Centered button
        }}
      >
        Yükle
      </button>

      {uploadSuccess && (
        <p style={{ color: "green" }}>Dosya başarıyla yüklendi!</p>
      )}
    </div>
  );
};

export default Update;
