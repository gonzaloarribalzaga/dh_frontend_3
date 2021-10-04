import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import appData from "./api/appConfig.json";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTheme(appData.themes.teal);
      setLoading(false);
    }, 1000);
  }, []);

  const changeTheme = (themeName) => {
    setTheme(appData.themes[themeName]);
  };

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        // Defino el conext provider seteando su prop value
        // el valor seteado para value estará disponible para los componentes que lo consuman
        <ThemeContext.Provider
          value={{ theme: theme, changeTheme: changeTheme }}
        >
          <div className={styles.App}>
            <Header />
            <HomePage />
          </div>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default App;
