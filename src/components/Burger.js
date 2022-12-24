import React, { useContext, useEffect } from "react";
import Main from "./Main";
import Footer from "./Footer";
import { BurgerContext } from "./BurgerContext";

function Burger() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

export default Burger;
