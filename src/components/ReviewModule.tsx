import { useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from "../styles/ReviewModule.module.css";

const reviews = [
  [<ReviewCard name="1" key="1" />, <ReviewCard name="2" key="2" />],
  [<ReviewCard name="3" key="1" />, <ReviewCard name="4" key="2" />],
  [<ReviewCard name="5" key="1" />, <ReviewCard name="6" key="2" />],
];

const ReviewModule = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % reviews.length);
  };

  const previous = () => {
    setIndex((index - 1 + reviews.length) % reviews.length);
  };
  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={previous}>
          {"<"}
        </button>
        {reviews.map((e, i) => (
          <div key={i} className={index === i ? styles.active : styles.hidden}>
            {reviews[i].map((e) => e)}
          </div>
        ))}
        <button type="button" onClick={next}>
          {">"}
        </button>
      </div>

      <div className={styles.dots}>
        <button type="button" onClick={previous}>
          {"<"}
        </button>
        {reviews.map((e, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={index === i ? styles.active : styles.inactive}
          />
        ))}
        <button type="button" onClick={next}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default ReviewModule;
