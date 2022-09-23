import { Link } from "react-router-dom";
import astronaut from "../assets/astronaut.jpg";
import styles from "../styles/noMatch.module.css";

const NoMatch = () => {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.content}>
          <h1>The Page Has Gone Far, Far Away</h1>
          <p>
            We can&apos;t find the page you&apos;re looking for. It may have
            been moved or no longer exists.
          </p>
          <span>
            Go to the <Link to="/">homepage</Link> instead
          </span>
        </div>
        <img src={astronaut} alt="Astronaut" width="788" height="1116" />
      </header>
    </main>
  );
};

export default NoMatch;
