import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectCart, edit, removeFromCart } from "../redux/slices/cartSlice";
import ButtonLink from "../components/ButtonLink";
import styles from "../styles/cart.module.css";

const Cart = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const [total, setTotal] = useState(0);

  useMemo(() => {
    let temp = 0;
    cart.forEach((item) => {
      isNaN(item.quantity) ? temp += item.product.price : temp += item.product.price * item.quantity;
    });
    setTotal(temp);
  }, [cart]);

  return (
    <main>
      <header className={styles.hero}>
        <h1>Cart</h1>
      </header>
      {cart.length > 0 ? (
        <div className={styles.wrapper}>
          <div className={styles.items}>
            {cart.map((e, i) => {
              if (e.product.color) {
                return (
                  <div key={i} className={styles.item}>
                    <img src={e.product.img} alt={e.product.name}  />
                    <div className={styles.content}>
                      <div className={styles.core}>
                        <Link to={`/shop/${e.product.id}`} className={styles.name}>{e.product.name}</Link>
                        <input
                          type="number"
                          name="quantity"
                          id="quantity"
                          min="1"
                          defaultValue={e.quantity}
                          onChange={(event) => {
                            dispatch(
                              edit({
                                product: e.product,
                                quantity: parseInt(event.target.value),
                              })
                            );
                          }}
                          className={styles.quantity}
                        />
                      </div>
                      <div className={styles.details}>
                        <span className={styles.price}>{isNaN(e.quantity) ? `$${e.product.price}` : `$${e.product.price * e.quantity}`}</span>
                        <div className={styles.color}>
                          <span
                            style={{ backgroundColor: `${e.product.color.hex}` }}
                            className={styles.swatch}
                          />
                          <span className={styles.colorName}>{e.product.color.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(removeFromCart(e));
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.checkout}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span>{`$${total}`}</span>
            </div>
            <ButtonLink location="/" value="Proceed to Checkout" />
            <Link to="/shop">Continue Shopping</Link>
          </div>
        </div>
      ) : (
        <section className={styles.empty}>
          <h2>Your Cart is Empty</h2>
          <p>
            Duis ac posuere sapien, facilisis lacinia dui. Maecenas tristique
            arcu non elit commodo maximus. Donec a imperdiet massa, posuere
            condimentum erat. Donec vulputate turpis neque, at molestie nulla
            mollis id. Ut tempor lacus id massa dictum condimentum. Aenean porta
            viverra accumsan. Sed lobortis aliquam iaculis. Nunc et sem eget
            nisi facilisis viverra.
          </p>
          <ButtonLink location="/shop" value="Shop" />
        </section>
      )}
    </main>
  );
};

export default Cart;
