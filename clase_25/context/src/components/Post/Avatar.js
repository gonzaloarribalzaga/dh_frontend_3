import styles from "./Avatar.module.css";

function Avatar(props) {
  return <img className={styles.avatar} src={props.image} alt={props.name} />;
}

export default Avatar;
