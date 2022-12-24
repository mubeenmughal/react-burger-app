import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main.js";

export default function Checkout() {
  return (
    <>
      <Main />
      <div className="checkout-buttons">
        <Link to="/">
          <button className="Button__Button__ajevi Button__Danger__18hYt">
            Cancel
          </button>
        </Link>
        <Link to="/details">
          <button className="Button__Button__ajevi Button__Success__1DMln">
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}
