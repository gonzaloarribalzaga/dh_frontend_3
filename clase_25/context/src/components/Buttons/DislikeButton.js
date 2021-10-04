import styles from "./Buttons.module.css";
import DislikeIcon from "../Icons/DislikeIcon";

export default function DislikeButton({ count }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.iconButton}>
        <DislikeIcon className={`${styles.icon} ${styles.dislike}`} />
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
