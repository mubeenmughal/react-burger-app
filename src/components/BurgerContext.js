import React, { createContext, useState } from 'react';
export const BurgerContext = createContext();

export const BurgerProvider = (props) =>  {
    const [lettuceCount, setlettuceCount] = useState(0);
    const [baconCount, setBaconCount] = useState(0);
    const [cheeseCount, setCheeseCount] = useState(0);
    const [meatCount, setMeatCount] = useState(0);
    const [price, setPrice] = useState(3.0);
    const [login, setLogin] = useState(false);

    return ( 
        <BurgerContext.Provider
          value={{
              lettuce: [lettuceCount,setlettuceCount],
              bacon: [baconCount,setBaconCount],
              cheese: [cheeseCount,setCheeseCount],
              meat: [meatCount,setMeatCount],
              priceCount: [price,setPrice],
              loginCheck: [login,setLogin],
          }}  
        >
        {props.children}
        </BurgerContext.Provider>
     );
};