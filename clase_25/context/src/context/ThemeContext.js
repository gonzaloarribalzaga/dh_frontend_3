import { createContext } from "react";

// Creo un context para inyectar un theme en mi aplicación utilizando la función createContext de react
const ThemeContext = createContext();

// Defino un nombre para identificar el context en el inspector de componentes
ThemeContext.displayName = "Theme";

export default ThemeContext;
