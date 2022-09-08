import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

const Home = () => {
  return (
    <main>
      <header>
        <h1>Makeup is for everyone</h1>
        <p>
          We offer a wide range of products so everyone can find their perfect
          match.
        </p>
        <ButtonLink location="/shop" value="Shop Now" />
      </header>
      <section>
        <h2>Our Bestsellers</h2>
        <ButtonLink location="/shop" value="View More" />
      </section>
      <section>
        <h2>Categories</h2>
        {/* To be inputted later */}
      </section>
      <section>
        <h2>About Miralou</h2>
        <div>
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
      <section>
        <span>What Our Customers Say</span>
        <h2>Latest Reviews</h2>
        {/* To be done later */}
      </section>
      <section>
        <h2>Follow Us On Instagram</h2>
        <span>@miralou</span>
      </section>
      <section>
        <h2>Subscribe to Get More Fun</h2>
        <p>
          Subscribe to rcieve 10% off your next purchase and continue recieve
          exclusive offers
        </p>
      </section>
    </main>
  );
};

export default Home;
