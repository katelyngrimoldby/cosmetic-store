import profilePic from "../assets/profile-pic.svg";
import phoneIcon from "../assets/phone-outline.svg";
import emailIcon from "../assets/email-outline.svg";
import styles from "../styles/TeamCard.module.css";

type TeamCardProps = {
  name: string;
  role: string;
  email: string;
};

const TeamCard = ({ name, role, email }: TeamCardProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={profilePic} alt="Profile picture" width="99" height="99" />
      <span className={styles.name}>{name}</span>
      <span className={styles.role}>{role}</span>
      <span className={styles.contact}>
        <img src={phoneIcon} alt="Phone icon" width="24" height="24" /> (805)
        235-1414
      </span>
      <span className={styles.contact}>
        <img src={emailIcon} alt="Email icon" width="24" height="24" /> {email}
      </span>
    </div>
  );
};

export default TeamCard;
