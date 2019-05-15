import React, { useState } from "react";
import useClickAway from "react-click-away";
import "./App.css";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [ref] = useClickAway(() => {
    setMenuOpen(false);
  });

  return (
    <div className="App">
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        Toggle Menu
      </button>

      {menuOpen ? (
        <div className="menu" ref={ref}>
          <p>Inside here you might put some options that have low importance</p>
        </div>
      ) : null}
    </div>
  );
};

export default App;
