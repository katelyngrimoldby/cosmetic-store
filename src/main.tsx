import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import NoMatch from "./pages/noMatch";
import menuOpen from "./assets/menu-open.svg";
import menuClose from "./assets/menu-close.svg";
import cart from "./assets/cart-outline.svg";
import heart from "./assets/heart-outline.svg";
import email from "./assets/email-outline.svg";
import phone from "./assets/phone-outline.svg";
import location from "./assets/map-marker-outline.svg";
import styles from "./styles/Layout.module.css";
import "./styles/global.css";

function Layout() {
  const [visible, setVisible] = useState(false);

  const handleNav = () => {
    setVisible(!visible);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <button type="button" className={styles.menuBtn} onClick={handleNav}>
            <img src={menuOpen} alt="Open menu" />
          </button>
          <nav className={visible ? styles.visible : undefined}>
            <button
              type="button"
              className={styles.menuBtn}
              onClick={handleNav}
            >
              <img src={menuClose} alt="Close menu" />
            </button>
            <ul>
              <li>
                <Link to="/" onClick={handleNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={handleNav}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNav}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <span className={styles.logo}>Miralou</span>
          <span className={styles.navWrapper}>
            <ul className={styles.icons}>
              <li>
                <Link to="/cart" onClick={visible ? handleNav : undefined}>
                  <img src={cart} width="24" />
                </Link>
              </li>
              <li>
                <Link to="/wishlist" onClick={visible ? handleNav : undefined}>
                  <img src={heart} width="24" />
                </Link>
              </li>
            </ul>
            <ul className={styles.settings}>
              <li>EN</li>
              <li>USD</li>
            </ul>
          </span>
        </div>
      </header>
      <Outlet />

      <footer>
        <div className={styles.topFooter}>
          <div>
            <span>Miralou</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue porta velit.
            </p>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>About Miralou</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Shop</li>
              <li>Wishlist</li>
              <li>Cart</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <img src={location} alt="Address:" width="20px" /> 316 Glenridge
                St. Duarte, CA 91010
              </li>

              <li>
                <img src={phone} alt="Phone:" width="20px" /> (808) 555-0111
              </li>

              <li>
                <img src={email} alt="Email:" width="20px" />{" "}
                miralou.contacts@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <span>
            COPYRIGHT © 2022{" "}
            <a
              href="https://katelyngrimoldby.com"
              target="_blank"
              rel="noreferrer"
            >
              &#x20;KATELYN GRIMOLDBY
            </a>
          </span>
          <span>
            DESIGN BY{" "}
            <a
              href="https://katelyngrimoldby.com"
              target="_blank"
              rel="noreferrer"
            >
              THEMERAGE
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
