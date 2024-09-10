import React from 'react';
import sunIcon from '/sun.png';
import moonIcon from '/moon.png';

const ThemeToggle = ({ darkMode, toggleMode }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <img 
        src={darkMode ? moonIcon : sunIcon}
        alt={darkMode ? "Ay" : "Güneş"}
        onClick={toggleMode}
        style={{ width: '32px', height: '32px', cursor: 'pointer' }}
      />
    </div>
  );
};

export default ThemeToggle;
