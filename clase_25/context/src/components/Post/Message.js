import styles from "./Post.module.css";

export default function Message({ authorName, message }) {
  return (
    <>
      <h3 className={styles.author}>{authorName}</h3>
      <p className={styles.message}>{message}</p>
    </>
  );
}
