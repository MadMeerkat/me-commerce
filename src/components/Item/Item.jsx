import React from 'react';
import './Item.css';

export const Item = ({ item }) => {

  const {id,title,descripcion,price,pictureUrl} = item;

  return <>
        <div className='item-container'>
          <div className="item-title">
              <h3>{title}</h3>
          </div>
          <img src={pictureUrl}></img>
          <div className="item-description">
            <p>{descripcion}</p>
          </div>
          <div className="item-price">
            <span>$ {price}</span>
          </div>
        </div>
  </>
}



export default Item;