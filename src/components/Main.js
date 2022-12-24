import React, { useContext } from "react";
// import Footer from "./Footer";
import "../style/Main.css";
import { BurgerContext } from "./BurgerContext";

function Main() {
  const { lettuce, bacon, cheese, meat } = useContext(BurgerContext);
  const [lettuceCount, setlettuceCount] = lettuce;
  const [baconCount, setBaconCount] = bacon;
  const [cheeseCount, setCheeseCount] = cheese;
  const [meatCount, setMeatCount] = meat;

  const getArray = (count, side) => {
    return [...Array(count).keys()].map((task) => (
      <div key={task.length} className={side}></div>
    ));
  };

  const burgerInside = () => {
    const lettuceArray = getArray(lettuceCount, "lettuseSide");
    const baconArray = getArray(baconCount, "baconSide");
    const cheeseArray = getArray(cheeseCount, "cheeseSide");
    const meatArray = getArray(meatCount, "meatSide");
    const burger = [
      ...lettuceArray,
      ...baconArray,
      ...cheeseArray,
      ...meatArray,
    ];
    if (burger.length === 0) burger.push(<p>No Ingredients Added</p>);
    return burger;
  };

  return (
    <main className="Layout__Content__3KSp3">
      <div className="Modal__Modal__cd320"></div>
      <div className="Modal__Modal__cd320"></div>
      <div className="Burger__Burger__2h2kL">
        <div className="BurgerIngredient__BreadTop__2Pkwe">
          <div className="BurgerIngredient__Seeds1__2k2x7"></div>
          <div className="BurgerIngredient__Seeds2__9Mret"></div>
        </div>
        {burgerInside()}
        <div className="BurgerIngredient__BreadBottom__2z9NQ"></div>
      </div>
    </main>
  );
}

export default Main;
