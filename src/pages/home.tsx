import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import ReviewModule from "../components/ReviewModule";
import instagram1 from "../assets/instagram-1.jpg";
import instagram2 from "../assets/instagram-2.jpg";
import instagram3 from "../assets/instagram-3.jpg";
import instagram4 from "../assets/instagram-4.jpg";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Makeup is for everyone</h1>
          <p>
            We offer a wide range of products so everyone can find their perfect
            match.
          </p>
          <ButtonLink location="/shop" value="Shop Now" />
        </div>
      </header>
      <section id="bestsellers" className={styles.section}>
        <h2>Our Bestsellers</h2>
        <ButtonLink location="/shop" value="View More" />
      </section>
      <section id="categories" className={styles.section}>
        <h2>Categories</h2>
        {/* To be inputted later */}
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.header}>
          <h2>About Miralou</h2>
        </div>
        <div className={styles.content}>
          <p>
            Nam at quam pellentesque, vehicula mi vel, tempus nulla. Nulla porta
            nulla vitae dolor ultrices malesuada. Aenean dignissim justo congue,
            pellentesque eros a, congue sem. Praesent dui sem, elementum vel
            ante sit amet, dignissim aliquam velit. In nec rutrum purus, ac
            interdum lorem. Phasellus viverra condimentum risus, in fermentum
            nisl accumsan vel. Aenean rhoncus dui ex, in viverra velit feugiat
            eget.
          </p>
          <Link to="/about">Learn More</Link>
        </div>
      </section>
      <section id="reviews" className={styles.section}>
        <span className={styles.tag}>What Our Customers Say</span>
        <h2>Latest Reviews</h2>
        <ReviewModule />
      </section>
      <section id="instagram" className={styles.instagram}>
        <h2>Follow Us On Instagram</h2>
        <span className={styles.tag}>@miralou</span>
        <div>
          <img
            src={instagram1}
            alt="Girl holding fragrance box"
            width="640"
            height="640"
          />
          <img src={instagram2} alt="Makeup brushes" width="640" height="640" />
          <img src={instagram3} alt="Girl posing" width="640" height="640" />
          <img
            src={instagram4}
            alt="Makeup on counter"
            width="640"
            height="640"
          />
        </div>
      </section>
      <section id="newsletter" className={styles.newsletter}>
        <div className={styles.text}>
          <h2>Subscribe to Get More Fun</h2>
          <p>
            Subscribe to recieve 10% off your next purchase and continue recieve
            exclusive offers
          </p>
        </div>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <button onClick={(e) => e.preventDefault()}>Subscribe</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
