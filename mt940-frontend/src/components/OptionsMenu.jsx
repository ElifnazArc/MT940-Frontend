import React, { useState } from 'react';
import optionsIcon from '/options.png';

const OptionsMenu = ({ showOptions, toggleOptions }) => {
  const [file, setFile] = useState(null);
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log("Selected file:", event.target.files[0]);
  };

  const handleFileUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt'; // Sadece txt dosyalarını kabul et
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };

  const handleTextInputToggle = () => {
    setTextInputVisible(!textInputVisible); // Metin giriş çerçevesinin görünürlüğünü değiştir
  };

  const handleTextSubmit = () => {
    if (inputText) {
      console.log("Entered text:", inputText);
      // Burada metni işlemek için istediğiniz kodu ekleyebilirsiniz.
      setInputText(''); // Girişi temizle
      setTextInputVisible(false); // Çerçeveyi kapat
    }
  };

  return (
    <>
      <img 
        src={optionsIcon} 
        alt="Seçenekler"
        onClick={toggleOptions}
        style={{
          width: '32px',
          height: '32px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      />
      {showOptions && (
        <div style={{
          position: 'absolute', 
          top: '50px', 
          left: '10px', 
          backgroundColor: 'white', 
          padding: '10px', 
          border: '1px solid black',
          zIndex: 1000
        }}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <button onClick={handleFileUpload}>
                Dosya Yükle
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button onClick={handleTextInputToggle}>
                Metin Gir
              </button>
            </li>
            <li>
              <button onClick={() => alert('Çıktıları Seç')}>
                Görünecek Çıktıları Seç
              </button>
            </li>
          </ul>
        </div>
      )}
      {textInputVisible && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          border: '1px solid black',
          zIndex: 2000,
          width: '300px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          <h4>Metin Girişi</h4>
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="5"
            style={{ width: '100%' }}
          />
          <button onClick={handleTextSubmit} style={{ marginTop: '10px' }}>
            Tamam
          </button>
          <button onClick={handleTextInputToggle} style={{ marginTop: '10px', marginLeft: '10px' }}>
            İptal
          </button>
        </div>
      )}
    </>
  );
};

export default OptionsMenu;

