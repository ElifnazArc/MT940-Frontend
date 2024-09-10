import React from 'react';
import optionsIcon from '/options.png';

const OptionsMenu = ({ showOptions, toggleOptions }) => {
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
              <button onClick={() => alert('Dosya Yükle')}>
                Dosya Yükle
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button onClick={() => alert('Metin Gir')}>
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
    </>
  );
};

export default OptionsMenu;
