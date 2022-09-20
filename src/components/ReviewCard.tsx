import profilePic from "../assets/profile-pic.svg";
import styles from "../styles/ReviewCard.module.css";

const ReviewCard = ({ name }: { name: string }) => {
  return (
    <div className={styles.card}>
      <span className={styles.name}>
        <img src={profilePic} alt="Profile picture" width="99" height="99" />{" "}
        {name}
      </span>
      <p>
        Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
        rutrum mauris ligula tempor risus. Quisque in interdum ante.
      </p>
      <span className={styles.date}>June 16, 2021</span>
    </div>
  );
};

export default ReviewCard;
