import React, { useContext } from "react";
import "../style/Footer.css";
import { BurgerContext } from "./BurgerContext";
// import { Link } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const { lettuce, bacon, cheese, meat, priceCount, loginCheck } =
    useContext(BurgerContext);
  const [lettuceCount, setlettuceCount] = lettuce;
  const [baconCount, setBaconCount] = bacon;
  const [cheeseCount, setCheeseCount] = cheese;
  const [meatCount, setMeatCount] = meat;
  const [price, setPrice] = priceCount;
  const [login, setLogin] = loginCheck;

  const addIngredient = (ingredient) => {
    switch (ingredient) {
      case "lettuce":
        setlettuceCount(lettuceCount + 1);
        setPrice((pre) => pre + 2);
        break;
      case "bacon":
        setBaconCount(baconCount + 1);
        setPrice((pre) => pre + 3);
        break;
      case "cheese":
        setCheeseCount(cheeseCount + 1);
        setPrice((pre) => pre + 4);
        break;
      case "meat":
        setMeatCount(meatCount + 1);
        setPrice((pre) => pre + 5);
        break;

      default:
        break;
    }
  };

  const removeIngredient = (ingredient) => {
    switch (ingredient) {
      case "lettuce":
        setlettuceCount(lettuceCount - 1);
        setPrice(price - 2);
        break;

      case "bacon":
        setBaconCount(baconCount - 1);
        setPrice(price - 3);
        break;

      case "cheese":
        setCheeseCount(cheeseCount - 1);
        setPrice(price - 4);
        break;

      case "meat":
        setMeatCount(meatCount - 1);
        setPrice(price - 5);
        break;

      default:
        break;
    }
  };

  const makeBurger = (element, count) => {
    console.log(element, count);
    return (
      <>
        <div className="BuildControl__BuildControl__ibcUQ">
          <div className="BuildControl__Label__2VLnR">{element}</div>
          <button
            className={count ? "BuildControl__Less__3X6hg" : "disable_less"}
            disabled={count === 0}
            onClick={() => removeIngredient(element)}
          >
            Less
          </button>
          <button
            className="BuildControl__More__2eQpV"
            onClick={() => addIngredient(element)}
          >
            More
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="BuildControls__BuildControls__220uz">
        <p>Price: {price}$</p>
        {makeBurger("lettuce", lettuceCount)}
        {makeBurger("bacon", baconCount)}
        {makeBurger("cheese", cheeseCount)}
        {makeBurger("meat", meatCount)}
        {lettuceCount || baconCount || cheeseCount || meatCount ? (
          <Link to="/sign_up">
            <button
              className="BuildControls__OrderButton__1ScSk"
              onClick={() => setLogin(true)}
              disabled=""
            >
              Sign Up
            </button>
          </Link>
        ) : (
          <button className="disable-order" disabled="">
            SIGN UP TO ORDER
          </button>
        )}
      </div>
    </>
  );
};
export default Footer;
