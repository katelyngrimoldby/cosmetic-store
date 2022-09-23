import { useState } from "react";
import styles from "../styles/Carousel.module.css";

const Carousel = ({ slides }: { slides: JSX.Element[][] }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % slides.length);
  };

  const previous = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };
  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={previous}>
          {"<"}
        </button>
        <div className={styles.carousel}>
          <div
            className={styles.window}
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {slides.map((e, i) => (
              <div key={i} className={styles.slide}>
                {slides[i].map((e) => e)}
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={next}>
          {">"}
        </button>
      </div>

      <div className={styles.dots}>
        <button type="button" onClick={previous}>
          {"<"}
        </button>
        {slides.map((e, i) => (
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

export default Carousel;
