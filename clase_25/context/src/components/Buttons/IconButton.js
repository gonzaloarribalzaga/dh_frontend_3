import styles from "./Buttons.module.css";

export default function IconButton({ icon: IconComponent, children }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.iconButton}>
        <IconComponent />
      </button>
      <span className={styles.count}>{children}</span>
    </div>
  );
}
