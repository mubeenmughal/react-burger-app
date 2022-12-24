import React, { useContext } from "react";
import Checkout from "./Checkout";
import "../style/Details.css";
import { Link } from "react-router-dom";
import { BurgerContext } from "./BurgerContext";

export default function Details() {
  const { loginCheck } = useContext(BurgerContext);
  const [setLogin] = loginCheck;
  return (
    <>
      <div class="ContactData__ContactData__1whvJ">
        <h4>Enter your Contact Data</h4>
        <form>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input
              type="text"
              class="Input__InputElement__3TB0k"
              placeholder="Your Name"
              required="true"
            />
          </div>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input
              type="text"
              class="Input__InputElement__3TB0k"
              placeholder="Street"
              required="true"
            />
          </div>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input
              type="text"
              class="Input__InputElement__3TB0k"
              placeholder="Zip Code"
              required="true"
            />
          </div>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input
              type="text"
              class="Input__InputElement__3TB0k"
              placeholder="Country"
              required="true"
            />
          </div>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input
              type="email"
              class="Input__InputElement__3TB0k"
              placeholder="E-mail"
              required="true"
            />
          </div>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <select class="Input__InputElement__3TB0k">
              <option value="fastest">Fastest</option>
              <option value="cheapest">Cheapest</option>
            </select>
          </div>
          <Link to="/orders">
            <button
              class="Button__Button__ajevi Button__Success__1DMln"
              disabled=""
              onClick={() => setLogin(true)}
            >
              ORDER
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
