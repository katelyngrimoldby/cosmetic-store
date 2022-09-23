import TeamCard from "../components/TeamCard";
import Carousel from "../components/Carousel";
import ReviewCard from "../components/ReviewCard";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <main>
      <header className={styles.hero}>
        <h1>About Us</h1>
      </header>
      <section id="about" className={styles.about}>
        <article>
          <h2>We Are Miralou!</h2>
          <p>
            Nam at quam pellentesque, vehicula mi vel, tempus nulla. Nulla porta
            nulla vitae dolor ultrices malesuada. Aenean dignissim justo congue,
            pellentesque eros a, congue sem. Praesent dui sem, elementum vel
            ante sit amet, dignissim aliquam velit. In nec rutrum purus, ac
            interdum lorem. Phasellus viverra condimentum risus, in fermentum
            nisl accumsan vel. Aenean rhoncus dui ex, in viverra velit feugiat
            eget.
          </p>
        </article>
        <div>
          <img
            src={about1}
            alt="Girl in pink sweater"
            width="500"
            height="517"
          />
          <img src={about2} alt="Makeup on a table" width="640" height="640" />
        </div>
      </section>
      <div id="values" className={styles.cardWrapper}>
        <div className={styles.card}>
          <span>Worldwide shipping</span>
          <p>
            Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
            rutrum mauris ligula tempor risus. Quisque in interdum ante.
          </p>
        </div>
        <div className={styles.card}>
          <span>24/7 Support</span>
          <p>
            Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
            rutrum mauris ligula tempor risus. Quisque in interdum ante.
          </p>
        </div>
        <div className={styles.card}>
          <span>Constant Savings</span>
          <p>
            Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
            rutrum mauris ligula tempor risus. Quisque in interdum ante.
          </p>
        </div>
      </div>
      <section id="team">
        <h2>Our Team</h2>
        <div className={styles.team}>
          <TeamCard
            name="Jason Stewardt"
            role="Founder"
            email="jstewardt@example.com"
          />
          <TeamCard
            name="Lisa Mount"
            role="Co Founder"
            email="lmount@example.com"
          />
          <TeamCard name="Jack Cray" role="CEO" email="jcray@example.com" />
          <TeamCard
            name="Max Niklsen"
            role="Marketing"
            email="mniklsen@example.com"
          />
          <TeamCard
            name="Cliff Johnson"
            role="Developer"
            email="cjohnson@example.com"
          />
          <TeamCard
            name="Carl Adams"
            role="Design"
            email="cadams@example.com"
          />
        </div>
      </section>
      <section id="reviews" className={styles.reviews}>
        <span className={styles.tag}>What Our Customers Say</span>
        <h2>Latest Reviews</h2>
        <Carousel
          slides={[
            [<ReviewCard name="1" key="1" />, <ReviewCard name="2" key="2" />],
            [<ReviewCard name="3" key="1" />, <ReviewCard name="4" key="2" />],
            [<ReviewCard name="5" key="1" />, <ReviewCard name="6" key="2" />],
          ]}
        />
      </section>
    </main>
  );
};

export default About;
