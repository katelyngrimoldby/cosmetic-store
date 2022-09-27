import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { data } from "../apiTypes";
import ButtonLink from "../components/ButtonLink";
import Carousel from "../components/Carousel";
import ReviewCard from "../components/ReviewCard";
import ProductCard from "../components/ProductCard";
import instagram1 from "../assets/instagram-1.jpg";
import instagram2 from "../assets/instagram-2.jpg";
import instagram3 from "../assets/instagram-3.jpg";
import instagram4 from "../assets/instagram-4.jpg";
import styles from "../styles/home.module.css";

async function get<T>(path: string): Promise<T> {
  const { data } = await axios.get(path);
  return data;
}

const Home = () => {
  const [data, setData] = useState<null | data>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get<data>("./products.json");
      setData(data);
    };

    fetchData().catch(console.error);
  }, []);

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
        <div className={styles.bestsellers}>
          {data && (
            <Carousel
              slides={[
                [
                  <ProductCard
                    brand={data[0].brand}
                    name={data[0].name}
                    price={data[0].price}
                    imgSrc={data[0].api_featured_image}
                    key="0"
                  />,
                  <ProductCard
                    brand={data[1].brand}
                    name={data[1].name}
                    price={data[1].price}
                    imgSrc={data[1].api_featured_image}
                    key="1"
                  />,
                  <ProductCard
                    brand={data[2].brand}
                    name={data[2].name}
                    price={data[2].price}
                    imgSrc={data[2].api_featured_image}
                    key="2"
                  />,
                ],
                [
                  <ProductCard
                    brand={data[3].brand}
                    name={data[3].name}
                    price={data[3].price}
                    imgSrc={data[3].api_featured_image}
                    key="3"
                  />,
                  <ProductCard
                    brand={data[4].brand}
                    name={data[4].name}
                    price={data[4].price}
                    imgSrc={data[4].api_featured_image}
                    key="4"
                  />,
                  <ProductCard
                    brand={data[5].brand}
                    name={data[5].name}
                    price={data[5].price}
                    imgSrc={data[5].api_featured_image}
                    key="5"
                  />,
                ],
                [
                  <ProductCard
                    brand={data[6].brand}
                    name={data[6].name}
                    price={data[6].price}
                    imgSrc={data[6].api_featured_image}
                    key="6"
                  />,
                  <ProductCard
                    brand={data[7].brand}
                    name={data[7].name}
                    price={data[7].price}
                    imgSrc={data[7].api_featured_image}
                    key="7"
                  />,
                  <ProductCard
                    brand={data[8].brand}
                    name={data[8].name}
                    price={data[8].price}
                    imgSrc={data[8].api_featured_image}
                    key="8"
                  />,
                ],
                [
                  <ProductCard
                    brand={data[9].brand}
                    name={data[9].name}
                    price={data[9].price}
                    imgSrc={data[9].api_featured_image}
                    key="9"
                  />,
                  <ProductCard
                    brand={data[10].brand}
                    name={data[10].name}
                    price={data[10].price}
                    imgSrc={data[10].api_featured_image}
                    key="10"
                  />,
                  <ProductCard
                    brand={data[11].brand}
                    name={data[11].name}
                    price={data[11].price}
                    imgSrc={data[11].api_featured_image}
                    key="11"
                  />,
                ],
              ]}
            />
          )}
          <ButtonLink location="/shop" value="View More" />
        </div>
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
        <Carousel
          slides={[
            [<ReviewCard name="1" key="1" />, <ReviewCard name="2" key="2" />],
            [<ReviewCard name="3" key="1" />, <ReviewCard name="4" key="2" />],
            [<ReviewCard name="5" key="1" />, <ReviewCard name="6" key="2" />],
          ]}
        />
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
