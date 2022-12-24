import React, { useContext } from "react";
import { BurgerContext } from "./BurgerContext";
import "../style/Order.css";

export default function Order() {
  const { lettuce, bacon, cheese, meat, priceCount } =
    useContext(BurgerContext);
  const [lettuceCount] = lettuce;
  const [baconCount] = bacon;
  const [cheeseCount] = cheese;
  const [meatCount] = meat;
  const [price] = priceCount;

  return (
    <>
      <main className="Layout__Content__3KSp3">
        <div className="Modal__Modal__cd320"></div>
        <div className="Modal__Modal__cd320"></div>
        <div className="Order__Order__W-Npf">
          <p>
            Ingredients: <span className="order-list">bacon: {baconCount}</span>
            <span className="order-list">cheese: {cheeseCount}</span>
            <span className="order-list">lettuce: {lettuceCount}</span>
            <span className="order-list">meat: {meatCount}</span>
          </p>
          <p>
            Price: <strong>USD {price.toFixed(2)} $</strong>
          </p>
        </div>
      </main>
    </>
  );
}
