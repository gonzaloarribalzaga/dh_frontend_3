import styles from "./Buttons.module.css";
import LikeIcon from "../Icons/LikeIcon";

export default function LikeButton({ count }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.iconButton}>
        <LikeIcon />
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
