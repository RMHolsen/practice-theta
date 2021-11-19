import React, { useState } from "react";
import ItemList from "../data/itemList";
import { produce, pantryItems } from "../data/storeItems";


export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // array spread syntax
    setCart((prevCart) => {
      return [item, ...prevCart];
    })
   };

  const removeItem = (targetIndex) => {
    // same syntax with setCart((param) => {function to do the thing})
    setCart((prevCart) => {
      return prevCart.filter((item, index) => index !== targetIndex)
    })
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
