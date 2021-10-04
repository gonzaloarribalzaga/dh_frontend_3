import { useContext } from "react";
import styles from "./HomePage.module.css";
import Post from "../components/Post/Post";
import ThemeContext from "../context/ThemeContext";

export default function HomePage() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div className={styles.pageContainer}>
      <Post
        author={{ name: "Woodrow", avatar: "./img/woodrow.png" }}
        message="Me llamo woodrow, me gusta pasear de la mano de una dama y cenar a la luz de las velas, y odio los yoyos."
        likes={10}
        dislikes={5}
      />

      <Post
        author={{ name: "Homero", avatar: "./img/homero.png" }}
        message="A lo hecho pecho"
        likes={15}
        dislikes={2}
      />
      <button
        onClick={() => {
          changeTheme("teal");
        }}
      >
        Teal
      </button>
      <button
        onClick={() => {
          changeTheme("salmon");
        }}
      >
        Salmon
      </button>
    </div>
  );
}
