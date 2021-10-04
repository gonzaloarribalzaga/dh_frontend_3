import styles from "./Post.module.css";
import Button from "../Buttons/Button";
import LikeIcon from "../Icons/LikeIcon";
import DislikeIcon from "../Icons/DislikeIcon";
import IconButton from "../Buttons/IconButton";

export default function UserActions({ likes, dislikes }) {
  return (
    <div className={styles.actions}>
      <div className={styles.likeButtons}>
        <IconButton icon={LikeIcon}>{likes}</IconButton>
        <IconButton icon={DislikeIcon}>{dislikes}</IconButton>
      </div>
      <div>
        <Button>Reply</Button>
      </div>
    </div>
  );
}
