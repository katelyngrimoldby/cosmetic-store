import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";

const About = () => {
  return (
    <main>
      <header>
        <h1>About Us</h1>
      </header>
      <section id="about">
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
          <img src={about1} alt="" />
          <img src={about2} alt="" />
        </div>
      </section>
      <div>
        <div id="values">
          <span>Worldwide shipping</span>
          <p>
            Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
            rutrum mauris ligula tempor risus. Quisque in interdum ante.
          </p>
        </div>
        <div>
          <span>24/7 Support</span>
          <p>
            Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
            rutrum mauris ligula tempor risus. Quisque in interdum ante.
          </p>
        </div>
        <div>
          <span>Satisfaction Guaranteed</span>
          <p>
            Nunc porta, elit id placerat dignissim, lectus elit dictum enim, nec
            rutrum mauris ligula tempor risus. Quisque in interdum ante.
          </p>
        </div>
      </div>
      <section id="team">
        <h2>Our Team</h2>
        {/* add team members */}
      </section>
      <section id="reviews">
        <span>What Our Customers Say</span>
        <h2>Latest Reviews</h2>
        {/* To be done later */}
      </section>
    </main>
  );
};

export default About;
