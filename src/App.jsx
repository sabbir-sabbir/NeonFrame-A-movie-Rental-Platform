import "./App.css";
import { useState } from "react";
import { movieContext, ThemeContext } from "./context";
import Pages from "./Pages";
import Swal from 'sweetalert2'


function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <movieContext.Provider value={{ cardData, setCardData }}>
          <Pages />
        </movieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
