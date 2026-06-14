import { useState } from "react";
import { Link } from "react-router";
import "./App.css";

function App() {
  const [view, setView] = useState("Home");

  return (
    <>
      <div className="navbar">
        <ul className="">
          <li className="nav">
            <Link to="/">Home</Link>
          </li>
          <li className="nav">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav">
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
