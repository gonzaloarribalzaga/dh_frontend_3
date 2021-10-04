import styles from "./Header.module.css";

export default function Link({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.link}>
      {children}
    </button>
  );
}
