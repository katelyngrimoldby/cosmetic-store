import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectData } from "../redux/slices/dataSlice";
import { addToCart } from "../redux/slices/cartSlice";
import {
  selectWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/wishlistSlice";
import { obj } from "../apiTypes";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import star from "../assets/star.svg";
import starOutline from "../assets/star-outline.svg";
import profile from "../assets/profile-pic.svg";
import styles from "../styles/product.module.css";

interface cartItem {
  product: {
    id: number;
    brand: string;
    name: string;
    img: string;
    price: number;
    color: null | {
      hex: string;
      name: string;
    };
  };
  quantity: number;
}

const ProductPage = ({ item }: { item: obj }) => {
  const [open, setOpen] = useState([false, false]);
  const [inWishlist, setInWishlist] = useState(false);
  const [cartItem, setCartItem] = useState<cartItem>({
    product: {
      id: item.id,
      brand: item.brand,
      name: item.name,
      img: item.api_featured_image,
      price: parseInt(item.price),
      color: null,
    },
    quantity: 1,
  });
  const data = useAppSelector(selectData);
  const wishlist = useAppSelector(selectWishlist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCartItem({
      product: {
        id: item.id,
        brand: item.brand,
        name: item.name,
        img: item.api_featured_image,
        price: parseInt(item.price),
        color: null,
      },
      quantity: 1,
    });
    setInWishlist(false);
  }, [item]);

  const handleCollapse = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = parseInt(event.currentTarget.id);
    const copy = [...open];
    copy[id] = !copy[id];
    setOpen(copy);
  };

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCartItem({ ...cartItem, quantity: parseInt(event.target.value) });
  };

  const handleCart = () => {
    dispatch(addToCart(cartItem));
  };

  const handleWishlist = () => {
    if (inWishlist) {
      dispatch(removeFromWishlist(cartItem.product));
      setInWishlist(false);
    } else {
      dispatch(addToWishlist(cartItem.product));
      setInWishlist(true);
    }
  };

  return (
    <main>
      <header className={styles.hero}>
        <h1>{item.name}</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.coreWrapper}>
          <img src={item.api_featured_image} alt={item.name} />
          <div className={styles.coreContent}>
            <span className={styles.brand}>{item.brand}</span>
            <h2>{item.name}</h2>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={cartItem.quantity}
              onChange={handleQuantity}
            />
            <div className={styles.colors}>
              {item.product_colors.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={
                      cartItem.product.color &&
                      cartItem.product.color.hex == e.hex_value
                        ? styles.colorActive
                        : styles.color
                    }
                  >
                    <button
                      type="button"
                      style={{ backgroundColor: `${e.hex_value}` }}
                      onClick={() => {
                        setCartItem({
                          ...cartItem,
                          product: {
                            ...cartItem.product,
                            color: { hex: e.hex_value, name: e.colour_name },
                          },
                        });
                        const color = e.hex_value;
                        setInWishlist(
                          wishlist.find((e) => e.color && e.color.hex === color)
                            ? true
                            : false
                        );
                      }}
                    />
                    <span>{e.colour_name}</span>
                  </div>
                );
              })}
            </div>
            <span className={styles.price}>{`$${item.price}`}</span>
            <div className={styles.buttonWrapper}>
              <button
                onClick={handleCart}
                disabled={cartItem.product.color ? false : true}
              >
                + Add to the Cart
              </button>
              <button
                className={styles.favourites}
                onClick={handleWishlist}
                disabled={cartItem.product.color ? false : true}
              >
                <img
                  src={inWishlist ? star : starOutline}
                  alt="Add to favourites"
                  width="24"
                  height="24"
                />
              </button>
            </div>
            {!cartItem.product.color && (
              <span>Please select a colour first</span>
            )}
          </div>
        </div>
        <div className={styles.collapsible}>
          <div className={styles.banner}>
            <span>Description</span>
            <button type="button" id="1" onClick={handleCollapse}>
              {open[1] ? "-" : "+"}
            </button>
          </div>
          <div className={open[1] ? styles.visible : styles.invisible}>
            <p>{item.description}</p>
          </div>
        </div>
        <div className={styles.collapsible}>
          <div className={styles.banner}>
            <span>Reviews</span>
            <button type="button" id="2" onClick={handleCollapse}>
              {open[2] ? "-" : "+"}
            </button>
          </div>
          <div className={open[2] ? styles.visible : styles.invisible}>
            <div className={styles.reviewWrapper}>
              <img src={profile} alt="Reviewer Image" />
              <article className={styles.reviewText}>
                <span>Jane Doe</span>
                <p>
                  Aliquam sollicitudin sollicitudin odio in hendrerit. Donec
                  commodo facilisis justo faucibus aliquet. Mauris non felis
                  eget lacus convallis varius. Aenean vel libero lacinia, porta
                  elit blandit, feugiat eros.
                </p>
              </article>
            </div>
          </div>
        </div>
        <section className={styles.other}>
          <h2>Other Products</h2>
          {data.length != 0 && (
            <Carousel
              slides={[
                [
                  <ProductCard
                    id={data[0].id}
                    brand={data[0].brand}
                    name={data[0].name}
                    price={data[0].price}
                    imgSrc={data[0].api_featured_image}
                    key="0"
                  />,
                  <ProductCard
                    id={data[1].id}
                    brand={data[1].brand}
                    name={data[1].name}
                    price={data[1].price}
                    imgSrc={data[1].api_featured_image}
                    key="1"
                  />,
                  <ProductCard
                    id={data[2].id}
                    brand={data[2].brand}
                    name={data[2].name}
                    price={data[2].price}
                    imgSrc={data[2].api_featured_image}
                    key="2"
                  />,
                ],
                [
                  <ProductCard
                    id={data[3].id}
                    brand={data[3].brand}
                    name={data[3].name}
                    price={data[3].price}
                    imgSrc={data[3].api_featured_image}
                    key="3"
                  />,
                  <ProductCard
                    id={data[4].id}
                    brand={data[4].brand}
                    name={data[4].name}
                    price={data[4].price}
                    imgSrc={data[4].api_featured_image}
                    key="4"
                  />,
                  <ProductCard
                    id={data[5].id}
                    brand={data[5].brand}
                    name={data[5].name}
                    price={data[5].price}
                    imgSrc={data[5].api_featured_image}
                    key="5"
                  />,
                ],
                [
                  <ProductCard
                    id={data[6].id}
                    brand={data[6].brand}
                    name={data[6].name}
                    price={data[6].price}
                    imgSrc={data[6].api_featured_image}
                    key="6"
                  />,
                  <ProductCard
                    id={data[7].id}
                    brand={data[7].brand}
                    name={data[7].name}
                    price={data[7].price}
                    imgSrc={data[7].api_featured_image}
                    key="7"
                  />,
                  <ProductCard
                    id={data[8].id}
                    brand={data[8].brand}
                    name={data[8].name}
                    price={data[8].price}
                    imgSrc={data[8].api_featured_image}
                    key="8"
                  />,
                ],
                [
                  <ProductCard
                    id={data[9].id}
                    brand={data[9].brand}
                    name={data[9].name}
                    price={data[9].price}
                    imgSrc={data[9].api_featured_image}
                    key="9"
                  />,
                  <ProductCard
                    id={data[10].id}
                    brand={data[10].brand}
                    name={data[10].name}
                    price={data[10].price}
                    imgSrc={data[10].api_featured_image}
                    key="10"
                  />,
                  <ProductCard
                    id={data[11].id}
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
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
