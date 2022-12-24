import React from "react";
import { BurgerProvider } from "./components/BurgerContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Burger from "./components/Burger.js";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Order from "./components/Order";
import Checkout from "./components/Checkout";
import Details from "./components/Details";
// import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <React.Fragment>
      <BurgerProvider>
        <Router>
          <Header />
          <Routes>
            {/* <Route path="*" element={<ErrorComponent />} /> */}
            <Route path="/sign_up" exact element={<SignUp />} />
            <Route path="/" exact element={<Burger />} />
            <Route path="/logout" exact element={<Burger />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/orders" exact element={<Order />} />
            <Route path="/details" exact element={<Details />} />
          </Routes>
        </Router>
      </BurgerProvider>
    </React.Fragment>
  );
}

export default App;
