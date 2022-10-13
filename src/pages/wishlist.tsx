import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  selectWishlist,
  removeFromWishlist,
} from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import ButtonLink from "../components/ButtonLink";
import styles from "../styles/wishlist.module.css";

const Wishlist = () => {
  const wishlist = useAppSelector(selectWishlist);
  const dispatch = useAppDispatch();
  return (
    <main>
      <header className={styles.hero}>
        <h1>Wishlist</h1>
      </header>
      {wishlist.length > 0 ? (
        <div className={styles.wrapper}>
          {wishlist.map((e, i) => {
            if (e.color) {
              return (
                <div key={i} className={styles.item}>
                  <img src={e.img} alt={e.name} width="200" />
                  <Link to={`/shop/${e.id}`} className={styles.name}>
                    {e.name}
                  </Link>
                  <span className={styles.price}>{`$${e.price}`}</span>
                  <div className={styles.color}>
                    <span
                      style={{ backgroundColor: `${e.color.hex}` }}
                      className={styles.swatch}
                    />
                    <span className={styles.colorName}>{e.color.name}</span>
                  </div>
                  <div className={styles.buttons}>
                    <button
                      onClick={() => {
                        dispatch(addToCart({ product: e, quantity: 1 }));
                      }}
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeFromWishlist(e));
                      }}
                    >
                      Remove From Wishlist
                    </button>
                  </div>
                </div>
              );
            }
          })}
          <ButtonLink location="/shop" value="Shop" />
        </div>
      ) : (
        <section className={styles.empty}>
          <h2>Your Wishlist is Empty</h2>
          <p>
            Donec laoreet suscipit urna. Aliquam sollicitudin bibendum odio, id
            mollis lectus. Donec a ante elit. Aliquam eu quam vehicula, posuere
            neque non, blandit augue. Vestibulum in auctor mi.{" "}
          </p>
          <ButtonLink location="/shop" value="Shop" />
        </section>
      )}
    </main>
  );
};

export default Wishlist;
