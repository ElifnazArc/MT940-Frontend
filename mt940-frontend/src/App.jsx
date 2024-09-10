import React, { useState, useEffect } from "react";
import ListOfComponent from "./components/ListOfComponent.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import OptionsMenu from "./components/OptionsMenu.jsx";
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleOptions = () => {
    setShowOptions(prevShow => !prevShow);
  };

  return (
    <div className="App">
      <header>
        <h1>MT940 SHOWCASE</h1>
        <ThemeToggle darkMode={darkMode} toggleMode={toggleMode} />
        <OptionsMenu showOptions={showOptions} toggleOptions={toggleOptions} />
      </header>
      <main>
        <ListOfComponent darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
