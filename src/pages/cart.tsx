import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectCart, edit, removeFromCart } from "../redux/slices/cartSlice";
import ButtonLink from "../components/ButtonLink";

const Cart = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const [total, setTotal] = useState(0);

  useMemo(() => {
    let temp = 0;
    cart.forEach((item) => {
      temp += item.product.price * item.quantity;
    });
    setTotal(temp);
  }, [cart]);

  return (
    <main>
      <header>
        <h1>Cart</h1>
      </header>
      {cart.length > 0 ? (
        <div>
          {cart.map((e, i) => {
            if (e.product.color) {
              return (
                <div key={i}>
                  <img src={e.product.img} alt={e.product.name} width="300" />
                  <Link to={`/shop/${e.product.id}`}>{e.product.name}</Link>
                  <div>
                    <span
                      style={{ backgroundColor: `${e.product.color.hex}` }}
                    />
                    <span>{e.product.color.name}</span>
                  </div>
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
                  />
                  <span>{`$${e.product.price * e.quantity}`}</span>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeFromCart(e));
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            }
          })}
          <div>
            <div>
              <span>Subtotal</span>
              <span>{`$${total}`}</span>
            </div>
            <ButtonLink location="/" value="Proceed to Checkout" />
            <Link to="/shop">Continue Shopping</Link>
          </div>
        </div>
      ) : (
        <section>
          <h2>Your Cart is Empty</h2>
          <p>
            Donec laoreet suscipit urna. Aliquam sollicitudin bibendum odio, id
            mollis lectus. Donec a ante elit. Aliquam eu quam vehicula, posuere
            neque non, blandit augue. Vestibulum in auctor mi.
          </p>
          <ButtonLink location="/shop" value="Shop" />
        </section>
      )}
    </main>
  );
};

export default Cart;
