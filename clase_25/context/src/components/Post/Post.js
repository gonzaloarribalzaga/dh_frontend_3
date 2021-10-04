import Avatar from "./Avatar";
import styles from "./Post.module.css";
import Message from "./Message";
import UserActions from "./UserActions";

function Post({ author, message, likes, dislikes }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <Avatar image={author.avatar} name={author.name} />
      </div>
      <div className={styles.messageContainer}>
        <Message authorName={author.name} message={message} />
        <UserActions likes={likes} dislikes={dislikes} />
      </div>
    </div>
  );
}

export default Post;
