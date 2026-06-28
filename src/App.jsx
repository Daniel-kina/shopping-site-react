import { useState } from "react";
import { Link, Outlet } from "react-router";
import styles from "./styles/App.module.css";
import ShoppingCartIcon from "./assets/shopping-cart.svg?react";
import SearchIcon from "./assets/search.svg?react";

function App() {
  const [view, setView] = useState("Home");

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.upperNavbar}>
          <div className={styles.upperNavbarLogo}>
            <h1>Hase</h1>
            <h2>Sportz</h2>
          </div>
          <div className={styles.navIcons}>
            <SearchIcon className="icon"></SearchIcon>
            <Link to="/cart">
              <ShoppingCartIcon className="icon"></ShoppingCartIcon>
            </Link>
          </div>
        </div>
        <div className={styles.lowerNavbar}>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>

          <Link to="/shop" className={styles.navItem}>
            Shop
          </Link>

          <Link to="/cart" className={styles.navItem}>
            Shopping Cart
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
