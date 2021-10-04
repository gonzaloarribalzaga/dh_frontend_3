import { useContext } from "react";
import styles from "./Header.module.css";
import Link from "./Link";
import ThemeContext from "../../context/ThemeContext";

export default function Header() {
  // Una forma más sencilla de consumir un context para componentes
  // funcionales es mediante el hook use context
  // a la cual debemos especificarle el context que deseamos consumir
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: theme.mainColor }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Blog Loco</h1>
        <div className={styles.navBar}>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </div>
        <div className={styles.userBar}>
          <Link>Log In</Link>
        </div>
      </div>
    </header>
  );
}
