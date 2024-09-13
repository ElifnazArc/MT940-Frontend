import React, { useState } from "react";
import axios from "axios"; // You can use axios for API calls, or fetch if you prefer

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
      // Replace with your actual backend API URL
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
      setUploadSuccess(true); // Set upload success if needed
    } catch (error) {
      console.error("File upload failed:", error);
      setUploadSuccess(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dosya Seçiniz</h2>

      {/* File input */}
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />

      {/* Label acts as a styled button */}
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

      {/* Upload button */}
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
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Yükle
      </button>

      {/* Show success message if file is uploaded */}
      {uploadSuccess && (
        <p style={{ color: "green" }}>Dosya başarıyla yüklendi!</p>
      )}
    </div>
  );
};

export default Update;
