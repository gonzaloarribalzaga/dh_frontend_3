import styles from "./Buttons.module.css";
import ThemeContext from "../../context/ThemeContext";

export default function Button({ children }) {
  return (
    // El componente necesita consumir el value asociado al context the theme
    // Para ello debe hacer uso del componente Consumer de context Provider
    // Una de las formas de utilzarlo es definiendo como hijo del componente una función
    // que recibe como parámetro el valor de "value" definido en el provider
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <button
            className={styles.button}
            style={{ backgroundColor: theme.mainColor, color: theme.textColor }}
          >
            {children}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}
