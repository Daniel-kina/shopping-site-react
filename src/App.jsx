import { useState } from "react";
import { Link, Outlet } from "react-router";
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
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="nav">
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default App;
