import { useState } from "react";
import styles from "../styles/Question.module.css";

const Question = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.wrapper}>
      <div className={open ? styles.questionActive : styles.question}>
        <button type="button" onClick={clickHandler}>
          {open ? "-" : "+"}
        </button>
        <span> Morbi viverra odio quam, non sodales neque volutpat in?</span>
      </div>
      <div className={open ? styles.visible : styles.invisible}>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Etiam non ex magna. Etiam ac massa sed dui
          cursus condimentum lobortis sit amet sem. Cras dignissim justo massa,
          in accumsan ex finibus sed.
        </p>
      </div>
    </div>
  );
};

export default Question;
