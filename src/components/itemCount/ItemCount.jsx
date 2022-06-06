import React, { useState, useEffect } from 'react';
import { useCount } from '../../customHooks/useCount';
import { BsCartPlus } from "react-icons/bs";
import './ItemCount.css';
const ItemCount = ({ initial = 0, stock = 0 }) => {

  const { addItem, counter, removeItem } = useCount(initial);

  return <>
    <div className='stocks-container'>
      <div className="counter-container">
        <input type={"button"}
          className="change-counter-button"
          disabled={counter === 0 ? true : false}
          value="-"
          onClick={removeItem} />

        <span className="container-counter-input">{counter}</span>

        <input type={"button"}
          className="change-counter-button"
          disabled={counter === stock || stock === 0 ? true : false}
          value="+"
          onClick={addItem} />
      </div>

      <button disabled={stock === 0 ? true : false}
        className="add-cart-button" > Anadir al carrito <BsCartPlus size={18} /> </button>
    </div>
  </>
}

export default ItemCount;