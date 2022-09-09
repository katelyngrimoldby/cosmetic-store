import { Link } from "react-router-dom";
import styles from "../styles/ButtonLink.module.css";

type ComponentProps = {
  location: string;
  value: string;
};

const ButtonLink = ({ location, value }: ComponentProps) => {
  return (
    <Link to={location} className={styles.link}>
      {value}
    </Link>
  );
};

export default ButtonLink;
